<h1>Ubuntu</h1>
<h2>Configure VPS</h2>
<pre><code># create a new user
adduser myuser

# give myuser sudo privilege
usermod -aG sudo myuser

# copy ssh key from root to myuser
rsync --archive --chown=myuser:myuser ~/.ssh /home/myuser
</code></pre>
<h1>LIB</h1>
<ul>
<li><a href="https://github.com/monasticacademy/httptap">https://github.com/monasticacademy/httptap</a></li>
</ul>