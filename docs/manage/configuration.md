# Configuration

Configuration of `asdf` encompasses both the sharable `.tool-versions` files as well as user specific customisations with `.asdfrc` and Environment Variables.

## `.tool-versions`

Whenever `.tool-versions` file is present in a directory, the tool versions it declares will be used in that directory and any subdirectories.

::: warning Note

Global defaults can be set in the file `$HOME/.tool-versions`

:::

This is what a `.tool-versions` file looks like:

```:no-line-numbers
ruby 2.5.3
nodejs 10.15.0
```

You can also include comments:

```:no-line-numbers
ruby 2.5.3 # This is a comment
# This is another comment
nodejs 10.15.0
```

The versions can be in the following format:

- `10.15.0` - an actual version. Plugins that support downloading binaries, will download binaries.
- `ref:v1.0.2-a` or `ref:39cb398vb39` - tag/commit/branch to download from github and compile
- `path:~/src/elixir` - a path to custom compiled version of a tool to use. For use by language developers and such.
- `system` - this keyword causes asdf to passthrough to the version of the tool on the system that is not managed by asdf.

::: tip

Multiple versions can be set by separating them with a space. For example, to use Python `3.7.2`, fallback to Python `2.7.15` and finally to the `system` Python, the following line can be added to `.tool-versions`.

```:no-line-numbers
python 3.7.2 2.7.15 system
```

:::

To install all the tools defined in a `.tool-versions` file run `asdf install` with no other arguments in the directory containing the `.tool-versions` file.

To install a single tool defined in a `.tool-versions` file run `asdf install <name>` in the directory containing the `.tool-versions` file. The tool will be installed at the version specified in the `.tool-versions` file.

Edit the file directly or use `asdf local` (or `asdf global`) which updates it.

## `.asdfrc`

The `.asdfrc` file defines the user's machine specific configuration.

`${HOME}/.asdfrc` is the default location used by asdf. This can be set with the [Environment Variable `ASDF_CONFIG_FILE`](#asdfconfigfile).

The below file shows the required format with the default values:

@[code :no-line-numbers](../../defaults)

### `legacy_version_file`

Plugins **with support** can read the versions files used by other version managers, for example, `.ruby-version` in the case of Ruby's `rbenv`.

| Options                                                    | Description                                                                |
| :--------------------------------------------------------- | :------------------------------------------------------------------------- |
| `no` <Badge type="tip" text="default" vertical="middle" /> | Use `.tool-versions` to read versions                                      |
| `yes`                                                      | Use plugin fallback to legacy version files (`.ruby-version`) if available |

### `use_release_candidates`

Configure the `asdf update` command to upgrade to the latest Release Candidate instead of the latest Semantic Version.

| Options                                                    | Description               |
| :--------------------------------------------------------- | :------------------------ |
| `no` <Badge type="tip" text="default" vertical="middle" /> | Semantic Version is used  |
| `yes`                                                      | Release Candidate is used |

### `always_keep_download`

Configure the `asdf install` command to keep or delete the source code or binary it downloads.

| Options                                                    | Description                                           |
| :--------------------------------------------------------- | :---------------------------------------------------- |
| `no` <Badge type="tip" text="default" vertical="middle" /> | Delete source code or binary after successful install |
| `yes`                                                      | Keep source code or binary after install              |

### `plugin_repository_last_check_duration`

Configure the duration (in minutes) between asdf plugin repository syncs. Trigger events result in a check of the duration. If more time has elapsed since the last sync than specified in the duration, a new sync occurs.

| Options                                                                                                 | Description                                                  |
| :------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------- |
| integer in range `1` to `999999999` <br/> `60` is <Badge type="tip" text="default" vertical="middle" /> | Sync on trigger event if duration (in minutes) since last sync has been exceeded |
| `0`                                                                                                     | Sync on each trigger event                                   |
| `never`                                                                                                 | Never sync                                                   |

Sync events occur when the following commands are executed:

- `asdf plugin add <name>`
- `asdf plugin list all`

`asdf plugin add <name> <git-url>` does NOT trigger a plugin sync.

::: warning Note

Setting the value to `never` does not stop the plugin repository from being initially synced, for that behaviour see `disable_plugin_short_name_repository`.

:::

### `disable_plugin_short_name_repository`

Disable synchronization of the asdf plugin short-name repository. Sync events will exit early if the short-name repository is disabled.

| Options                                                    | Description                                               |
| :--------------------------------------------------------- | :-------------------------------------------------------- |
| `no` <Badge type="tip" text="default" vertical="middle" /> | Clone or update the asdf plugin repository on sync events |
| `yes`                                                      | Disable the plugin short-name repository                  |

Sync events occur when the following commands are executed:

- `asdf plugin add <name>`
- `asdf plugin list all`

`asdf plugin add <name> <git-url>` does NOT trigger a plugin sync.

::: warning Note

Disabling the plugin short-name repository does not remove the repository if it has already synced. Remove the plugin repo with `rm --recursive --trash $ASDF_DATA_DIR/repository`.

Disabling the plugin short-name repository does not remove plugins previously installed from this source. Plugins can be removed with `asdf plugin remove <name>`. Removing a plugin will remove all installed versions of the managed tool.

:::

## Environment Variables

Setting environment variables varies depending on your system and Shell. Default locations depend upon your installation location and method (Git clone, Homebrew, AUR).

Environment variables should generally be set before sourcing `asdf.sh`/`asdf.fish` etc. For Elvish set above `use asdf`.

The following examples assume:

- an installation to `$HOME/.asdf`
- a Bash Shell

### `ASDF_CONFIG_FILE`

Path to the `.asdfrc` configuration file. Can be set to any location. Must be an absolute path.

- Default: `$HOME/.asdfrc`
- Usage: `export ASDF_CONFIG_FILE=/home/john_doe/.config/asdf/.asdfrc`

### `ASDF_DEFAULT_TOOL_VERSIONS_FILENAME`

The filename of the file storing the tool names and versions. Can be any valid filename. Typically, you should not set this value unless you want to ignore `.tool-versions` files.

- Default: `.tool-versions`
- Usage: `export ASDF_DEFAULT_TOOL_VERSIONS_FILENAME=tool_versions`

### `ASDF_DIR`

The location of `asdf` core scripts. Can be set to any location. Must be an absolute path.

- Default: `$HOME/.asdf` (always the parent directory of the `bin/asdf` executable)
- Usage: `export ASDF_DIR=/home/john_doe/.config/asdf`

### `ASDF_DATA_DIR`

The location where `asdf` will install plugins, shims and tool versions. Can be set to any location. Must be an absolute path.

- Default: `$HOME/.asdf`
- Usage: `export ASDF_DATA_DIR=/home/john_doe/.asdf`

## Internal Configuration

Users should not worry about this section as it describes configuration internal to `asdf` useful for Package Managers and integrators.

- `$ASDF_DIR/asdf_updates_disabled`: Updates via the `asdf update` command are disabled when this file is present (content irrelevant). This is used by package managers like Pacman or Homebrew to ensure the correct update method is used for the particular installation.
