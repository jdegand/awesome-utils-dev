<h1>SHELL COMMAND</h1>
<h2>Online</h2>
<ul>
<li><a href="https://www.shell.how">https://www.shell.how</a></li>
<li><a href="https://www.explainshell.com">https://www.explainshell.com</a></li>
<li><a href="https://github.com/cli-guidelines/cli-guidelines">https://github.com/cli-guidelines/cli-guidelines</a></li>
</ul>
<h2>Terminal</h2>
<ul>
<li><a href="https://github.com/wavetermdev/waveterm">https://github.com/wavetermdev/waveterm</a></li>
<li><a href="https://eugeny.github.io/terminus/">https://eugeny.github.io/terminus/</a></li>
<li><a href="https://github.com/vercel/hyper">https://github.com/vercel/hyper</a></li>
</ul>
<h2>Utils</h2>
<ul>
<li><a href="https://github.com/chmln/sd">https://github.com/chmln/sd</a></li>
<li><a href="https://github.com/cheat/cheat">https://github.com/cheat/cheat</a></li>
<li><a href="https://github.com/sharkdp/bat">https://github.com/sharkdp/bat</a></li>
<li><a href="https://github.com/nivekuil/rip">https://github.com/nivekuil/rip</a></li>
<li><a href="https://github.com/tldr-pages/tldr">https://github.com/tldr-pages/tldr</a></li>
<li><a href="https://github.com/ohmyzsh/ohmyzsh">https://github.com/ohmyzsh/ohmyzsh</a></li>
<li><a href="https://github.com/natemoo-re/clack">https://github.com/natemoo-re/clack</a></li>
<li><a href="https://github.com/zellij-org/zellij">https://github.com/zellij-org/zellij</a></li>
<li><a href="https://github.com/idank/explainshell">https://github.com/idank/explainshell</a></li>
<li><a href="https://github.com/shellspec/shellspec">https://github.com/shellspec/shellspec</a></li>
<li><a href="https://github.com/manifoldco/promptui">https://github.com/manifoldco/promptui</a></li>
<li><a href="https://github.com/addyosmani/firew0rks">https://github.com/addyosmani/firew0rks</a></li>
<li><a href="https://github.com/alebcay/awesome-shell">https://github.com/alebcay/awesome-shell</a></li>
<li><a href="https://github.com/romkatv/powerlevel10k">https://github.com/romkatv/powerlevel10k</a></li>
<li><a href="https://github.com/adrianscheff/useful-sed">https://github.com/adrianscheff/useful-sed</a></li>
<li><a href="https://github.com/ibraheemdev/modern-unix">https://github.com/ibraheemdev/modern-unix</a></li>
<li><a href="https://github.com/dylanaraps/pure-sh-bible">https://github.com/dylanaraps/pure-sh-bible</a></li>
<li><a href="https://github.com/gruntwork-io/bash-commons">https://github.com/gruntwork-io/bash-commons</a></li>
<li><a href="https://github.com/trinib/Linux-Bash-Commands">https://github.com/trinib/Linux-Bash-Commands</a></li>
<li><a href="https://github.com/jlevy/the-art-of-command-line">https://github.com/jlevy/the-art-of-command-line</a></li>
<li><a href="https://github.com/grv231/automation-bash-scripts">https://github.com/grv231/automation-bash-scripts</a></li>
<li><a href="https://github.com/Nikoo-Asadnejad/Practical_BashScripts">https://github.com/Nikoo-Asadnejad/Practical_BashScripts</a></li>
</ul>
<h2>ZSH</h2>
<ul>
<li><a href="https://github.com/zplug/zplug">https://github.com/zplug/zplug</a></li>
</ul>
<h2>Vim</h2>
<ul>
<li><a href="https://www.fprintf.net/vimCheatSheet.html">https://www.fprintf.net/vimCheatSheet.html</a></li>
</ul>
<h2>Remove</h2>
<pre><code>mv node_modules ../node_modules.bak
rmdir /s /q node_modules (windows)
rm -r -f node_modules (linux)
rm -rf ./node_modules (macos)
rm -rf ./node_modules/.cache/nx
rm .git/hooks/pre-commit
rm .git/hooks/pre-push
rm -f .git/index.lock
</code></pre>
<h2>Alias</h2>
<pre><code>alias ..="cd .."
alias ...="cd ../.."
</code></pre>
<h1>WSL2</h1>
<ul>
<li><a href="https://dev.to/equiman/move-wsl-file-system-to-another-drive-2a3d">https://dev.to/equiman/move-wsl-file-system-to-another-drive-2a3d</a></li>
<li><a href="https://blog.iany.me/2020/06/move-wsl-to-another-drive/">https://blog.iany.me/2020/06/move-wsl-to-another-drive/</a></li>
<li><a href="https://github.com/DDoSolitary/LxRunOffline">https://github.com/DDoSolitary/LxRunOffline</a></li>
</ul>
<pre><code class="language-bash">explorer.exe .
</code></pre>
<h2>WSL2/Nix</h2>
<h3>install</h3>
<pre><code class="language-bash"># start wsl session &#x26; start deamon as root: https://nixos.org/manual/nix/stable/installation/multi-user.html
wsl
sudo su -
nix-daemon
# start another wsl session and enjoy your nix commands
wsl
nix develop --extra-experimental-features nix-command --extra-experimental-features flakes
</code></pre>
<h3>uninstall</h3>
<pre><code class="language-bash"># https://nix-tutorial.gitlabpages.inria.fr/nix-tutorial/installation.html
# https://github.com/NixOS/nix/issues/1402
# https://github.com/NixOS/nix/issues/5370

# Delete the Nix store (and misc. Nix-related files) as root: 
rm -rf /nix/
# Delete the Nix configuration file as root: 
rm -rf /etc/nix
# Delete your user links as normal user: 
rm -rf ~/.nix-channels ~/.nix-defexpr ~/.nix-profile
</code></pre>
<h2>Various</h2>
<pre><code>find . -type f -name '*.service.ts' -exec du -s {} + |sort -n
</code></pre>