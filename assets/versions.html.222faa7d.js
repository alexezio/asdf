import{_ as o,r as n,o as l,c as p,a,b as s,d as r,e as t}from"./app.ac196eda.js";const c={},i=t(`<h1 id="versoes" tabindex="-1"><a class="header-anchor" href="#versoes" aria-hidden="true">#</a> Versões</h1><blockquote><p>Hi, we&#39;ve recently migrated our docs and added some new pages. If you would like to help translate this page, see the &quot;Edit this page&quot; link at the bottom of the page.</p></blockquote><h2 id="instalar-versao" tabindex="-1"><a class="header-anchor" href="#instalar-versao" aria-hidden="true">#</a> Instalar Versão</h2><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf install </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"><span style="color:#88846F;"># asdf install erlang 17.3</span></span>
<span class="line"></span></code></pre></div><p>Se um plugin suporta o download e compilação do código-fonte, você pode especificar <code>ref:foo</code> no qual <code>foo</code> é uma &#39;branch&#39; especifica, &#39;tag&#39;, ou &#39;commit&#39;. Você também precisará usar o mesmo nome e referência ao desinstalar.</p><h2 id="instalar-ultima-versao-estavel" tabindex="-1"><a class="header-anchor" href="#instalar-ultima-versao-estavel" aria-hidden="true">#</a> Instalar última versão estável</h2><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf install </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> latest</span></span>
<span class="line"><span style="color:#88846F;"># asdf install erlang latest</span></span>
<span class="line"></span></code></pre></div><p>Instale a última versão estável que inicia com um texto.</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf install </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> latest:</span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"><span style="color:#88846F;"># asdf install erlang latest:17</span></span>
<span class="line"></span></code></pre></div><h2 id="listar-versoes-instaladas" tabindex="-1"><a class="header-anchor" href="#listar-versoes-instaladas" aria-hidden="true">#</a> Listar versões instaladas</h2><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf list </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"><span style="color:#88846F;"># asdf list erlang</span></span>
<span class="line"></span></code></pre></div><p>Limite as versões que inicie com um determinado texto.</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf list </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"><span style="color:#88846F;"># asdf list erlang 17</span></span>
<span class="line"></span></code></pre></div><h2 id="listar-todas-as-versoes-disponiveis" tabindex="-1"><a class="header-anchor" href="#listar-todas-as-versoes-disponiveis" aria-hidden="true">#</a> Listar todas as versões disponíveis</h2><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf list all </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"><span style="color:#88846F;"># asdf list all erlang</span></span>
<span class="line"></span></code></pre></div><p>Limite as versões que inicie com um determinado texto.</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf list all </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"><span style="color:#88846F;"># asdf list all erlang 17</span></span>
<span class="line"></span></code></pre></div><h2 id="mostrar-ultima-versao-estavel" tabindex="-1"><a class="header-anchor" href="#mostrar-ultima-versao-estavel" aria-hidden="true">#</a> Mostrar última versão estável</h2><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf latest </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"><span style="color:#88846F;"># asdf latest erlang</span></span>
<span class="line"></span></code></pre></div><p>Mostrar última versão estável que inicie com um determinado texto.</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf latest </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"><span style="color:#88846F;"># asdf latest erlang 17</span></span>
<span class="line"></span></code></pre></div><h2 id="selecionar-versao-atual" tabindex="-1"><a class="header-anchor" href="#selecionar-versao-atual" aria-hidden="true">#</a> Selecionar versão atual</h2><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf global </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> [</span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;">...]</span></span>
<span class="line"><span style="color:#F8F8F2;">asdf shell </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> [</span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;">...]</span></span>
<span class="line"><span style="color:#F8F8F2;">asdf </span><span style="color:#F92672;">local</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> [</span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;">...]</span></span>
<span class="line"><span style="color:#88846F;"># asdf global elixir 1.2.4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">asdf global </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> latest[:</span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#F8F8F2;">asdf </span><span style="color:#F92672;">local</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> latest[:</span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#88846F;"># asdf global elixir latest</span></span>
<span class="line"></span></code></pre></div><p><code>global</code> escreve a versão para <code>$HOME/.tool-versions</code>.</p><p><code>shell</code> selecione a versão na variável de ambiente <code>ASDF_\${LANG}_VERSION</code>, para a atual seção do <em>shell</em>.</p><p><code>local</code> escreve a versão para <code>$PWD/.tool-versions</code>, crie se necessário .</p><p>Veja em <code>.tool-versions</code> <a href="/pt-br/core-configuration">arquivo de seleção de configuração</a> para mais detalhes.</p><div class="custom-container warning"><p class="custom-container-title">Alternativa</p><p>Se você quiser selecionar a versão atual do seu <em>shell</em> ou para executar um comando em uma versão específica de sua ferramenta, você pode selecionar a versão na variável de ambiente <code>ASDF_\${TOOL}_VERSION</code>.</p></div><p>O seguinte exemplo executa os testes em um projeto Elixir na versão <code>1.4.0</code>. O formato da versão é o mesmo suportado pelo arquivo <code>.tool-versions</code>.</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">ASDF_ELIXIR_VERSION=1.4.0 mix </span><span style="color:#66D9EF;">test</span></span>
<span class="line"></span></code></pre></div><h2 id="resposta-do-sistema-de-versao" tabindex="-1"><a class="header-anchor" href="#resposta-do-sistema-de-versao" aria-hidden="true">#</a> Resposta do sistema de versão</h2><p>Para usar o sistema de versão da ferramenta <code>&lt;name&gt;</code> inicie um gerenciador de versões do asdf para selecionar a versão na ferramenta do <code>system</code>.</p><p>Selecione o sistema com <code>global</code>, <code>local</code> ou <code>shell</code> Set system with either <code>global</code>, <code>local</code> or <code>shell</code> conforme descrito em <a href="#selecionar-vers%C3%A3o-atual">Selecionar versão atual</a>.</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf </span><span style="color:#F92672;">local</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> system</span></span>
<span class="line"><span style="color:#88846F;"># asdf local python system</span></span>
<span class="line"></span></code></pre></div><h2 id="verificar-a-versao-atual" tabindex="-1"><a class="header-anchor" href="#verificar-a-versao-atual" aria-hidden="true">#</a> Verificar a versão atual</h2><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf current</span></span>
<span class="line"><span style="color:#88846F;"># asdf current</span></span>
<span class="line"><span style="color:#88846F;"># erlang 17.3 (set by /Users/kim/.tool-versions)</span></span>
<span class="line"><span style="color:#88846F;"># nodejs 6.11.5 (set by /Users/kim/cool-node-project/.tool-versions)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">asdf current </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"><span style="color:#88846F;"># asdf current erlang</span></span>
<span class="line"><span style="color:#88846F;"># 17.3 (set by /Users/kim/.tool-versions)</span></span>
<span class="line"></span></code></pre></div><h2 id="desinstalar-versao" tabindex="-1"><a class="header-anchor" href="#desinstalar-versao" aria-hidden="true">#</a> Desinstalar versão</h2><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf uninstall </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"><span style="color:#88846F;"># asdf uninstall erlang 17.3</span></span>
<span class="line"></span></code></pre></div><h2 id="shims" tabindex="-1"><a class="header-anchor" href="#shims" aria-hidden="true">#</a> Shims</h2><p>Quando asdf instala um pacote é criado <em>shims</em> para cada programa executado no pacote do diretório <code>$ASDF_DATA_DIR/shims</code> (padrão <code>~/.asdf/shims</code>). Esse diretório começa no <code>$PATH</code> (pelos <code>asdf.sh</code>, <code>asdf.fish</code>, etc) é como o programa instalado é disponibilizado no ambiente do sistema.</p><p>Os <em>shims</em> em si são atalhos simples que executam um programa auxiliar <code>asdf exec</code> passando o nome do plugin e o caminho para o executável no pacote instalado que o <em>shim</em> está contido.</p><p>O <code>asdf exec</code> ajuda a determinar a versão do pacote usado (como especificado no arquivo <code>.tool-versions</code>, pelo <code>asdf local ...</code> ou <code>asdf global ...</code>), o final do <em>path</em> do executavél no pacote instalado no diretório (pode ser manipulado pelo <code>exec-path</code> no <em>callback</em> do plugin) e o ambiente executado em (também fornecido pelo plugin - <code>exec-env</code>) e finalmente executado.</p><div class="custom-container warning"><p class="custom-container-title">Observação</p><p>Observe que, como este sistema usa chamadas <code>exec</code>, qualquer <em>scripts</em> no pacote devem ser fornecidos pelo <em>shell</em>, a instancia em execução precisa ser aessado diretamente ao invés do <em>shim</em>. Os dois comandos do asdf: <code>which</code> e <code>where</code> pode ajudar com o retorno do caminho para o pacote instalado:</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;"># retorna o &#39;path&#39; da versão atual em execução</span></span>
<span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">$(asdf which </span><span style="color:#F8F8F2;">\${PLUGIN}</span><span style="color:#E6DB74;">)</span><span style="color:#F8F8F2;">/../script.sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># retorna o &#39;path&#39; do pacote instalado no diretório</span></span>
<span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">$(asdf where </span><span style="color:#F8F8F2;">\${PLUGIN}</span><span style="color:#E6DB74;"> $(asdf current </span><span style="color:#F8F8F2;">\${PLUGIN}</span><span style="color:#E6DB74;">))</span><span style="color:#F8F8F2;">/bin/script.sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ignorando-shims-do-asdf" tabindex="-1"><a class="header-anchor" href="#ignorando-shims-do-asdf" aria-hidden="true">#</a> Ignorando <em>shims</em> do asdf</h3>`,45),d=a("em",null,"shims",-1),F={href:"https://github.com/asdf-community/asdf-direnv",target:"_blank",rel:"noopener noreferrer"};function y(m,h){const e=n("ExternalLinkIcon");return l(),p("div",null,[i,a("p",null,[s("Se por algum motivo você deseja ignorar "),d,s(" do asdf ou deseja que suas variáveis de ambiente sejam definidas automaticamente ao entrar no diretório do seu projeto, pode ser útil o "),a("a",F,[s("asdf-direnv"),r(e)]),s(". Verifique o README para mais detalhes.")])])}const v=o(c,[["render",y],["__file","versions.html.vue"]]);export{v as default};
