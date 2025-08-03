<h1>Windows</h1>
<h2>Tools: ALL</h2>
<ul>
<li><a href="https://cmder.app/">https://cmder.app/</a></li>
<li><a href="https://winstall.app/">https://winstall.app/</a></li>
<li><a href="https://www.getpaint.net/">https://www.getpaint.net/</a></li>
<li><a href="https://getgreenshot.org/">https://getgreenshot.org/</a></li>
<li><a href="https://www.mythicsoft.com/agentransack/">https://www.mythicsoft.com/agentransack/</a></li>
<li><a href="https://www.scootersoftware.com/">https://www.scootersoftware.com/</a></li>
</ul>
<h2>Tools: OSS</h2>
<ul>
<li><a href="https://github.com/cmderdev/cmder">https://github.com/cmderdev/cmder</a></li>
<li><a href="https://github.com/microsoft/PowerToys">https://github.com/microsoft/PowerToys</a></li>
<li><a href="https://github.com/rocksdanister/lively">https://github.com/rocksdanister/lively</a></li>
<li><a href="https://github.com/Awesome-Windows/Awesome">https://github.com/Awesome-Windows/Awesome</a></li>
</ul>
<h2>SSH Key</h2>
<ul>
<li><a href="https://www.purdue.edu/science/scienceit/ssh-keys-windows.html">https://www.purdue.edu/science/scienceit/ssh-keys-windows.html</a></li>
</ul>
<h3>Create SSH Key</h3>
<pre><code class="language-bash">1 => open Windows classic cmd
2 => ssh-keygen
3 => choose a new name to avoid erasing others key
</code></pre>
<h3>Use SSH Key</h3>
<pre><code class="language-bash">cd C:\Users\myuser\.ssh
ssh -i myprivatekey root@123.456.789.22
</code></pre>
<h2>SSH Agent</h2>
<pre><code class="language-bash">1 => open Window Powershell as administrator and write
2 => Get-Service ssh-agent //(you will find status stopped )
3 => Set-Service ssh-agent -StartupType Manual
</code></pre>
<h2>SSH/SCP Copy</h2>
<ul>
<li><a href="https://unix.stackexchange.com/questions/106480/how-to-copy-files-from-one-machine-to-another-using-ssh">https://unix.stackexchange.com/questions/106480/how-to-copy-files-from-one-machine-to-another-using-ssh</a></li>
</ul>
<pre><code class="language-bash"># Syntax:
scp &#x3C;source> &#x3C;destination>

# To copy a file from B to A while logged into B:
scp /path/to/file username@a:/path/to/destination

# To copy a file from B to A while logged into A:
scp username@b:/path/to/file /path/to/destination
</code></pre>
<h2>MORE</h2>
<p>See also <a href="https://github.com/pegaltier/utils-dev/blob/master/utils-tools.md">tools</a></p>