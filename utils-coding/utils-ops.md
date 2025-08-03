<h2>GOOGLE CLOUD</h2>
<ul>
<li><a href="https://www.youtube.com/watch?v=nJ0L28ZfmUA">https://www.youtube.com/watch?v=nJ0L28ZfmUA</a> (Build and deploy with Cloud Run)</li>
<li><a href="https://medium.com/stackblitz-blog/google-cloud-meet-stackblitz-da13f4e4fc29?1">https://medium.com/stackblitz-blog/google-cloud-meet-stackblitz-da13f4e4fc29?1</a></li>
</ul>
<h2>SFTP SSH KEY</h2>
<ul>
<li><a href="https://www.rebex.net/kb/secure-ftp/">https://www.rebex.net/kb/secure-ftp/</a></li>
<li><a href="http://community.ovh.com/t/repertoire-sftp-avec-cle-publique-privee/12330/4">http://community.ovh.com/t/repertoire-sftp-avec-cle-publique-privee/12330/4</a></li>
<li><a href="https://www.weblogin.fr/blog/utiliser-des-cles-rsa-pour-se-connecter-a-un-serveur-mutualise-ovh">https://www.weblogin.fr/blog/utiliser-des-cles-rsa-pour-se-connecter-a-un-serveur-mutualise-ovh</a></li>
</ul>
<h2>DEPLOYING</h2>
<ul>
<li><a href="https://hackernoon.com/deploying-frontend-applications-the-fun-way-bc3f69e15331">https://hackernoon.com/deploying-frontend-applications-the-fun-way-bc3f69e15331</a></li>
</ul>
<h2>AUTODEPLOY FTP/SFTP...</h2>
<h3>NODE</h3>
<ul>
<li><a href="https://github.com/git-ftp/git-ftp">https://github.com/git-ftp/git-ftp</a></li>
<li><a href="https://github.com/lucasmotta/dploy">https://github.com/lucasmotta/dploy</a></li>
<li><a href="https://github.com/KenorFR/dploy">https://github.com/KenorFR/dploy</a></li>
<li><a href="https://github.com/yllumi/dploy-red">https://github.com/yllumi/dploy-red</a></li>
<li><a href="https://github.com/deployphp/deployer">https://github.com/deployphp/deployer</a></li>
<li><a href="https://github.com/theblackhole/dploy-red">https://github.com/theblackhole/dploy-red</a></li>
</ul>
<h3>GULP</h3>
<ul>
<li><a href="https://www.npmjs.com/package/gulp-sftp">https://www.npmjs.com/package/gulp-sftp</a></li>
<li><a href="https://github.com/gtg092x/gulp-sftp">https://github.com/gtg092x/gulp-sftp</a></li>
<li><a href="https://github.com/teambition/gulp-ssh">https://github.com/teambition/gulp-ssh</a></li>
<li><a href="https://github.com/gulpjs/gulp/issues/465">https://github.com/gulpjs/gulp/issues/465</a></li>
<li><a href="https://www.npmjs.com/package/gulp-rsync">https://www.npmjs.com/package/gulp-rsync</a></li>
</ul>
<h3>GRUNT</h3>
<ul>
<li><a href="https://github.com/thrashr888/grunt-sftp-deploy">https://github.com/thrashr888/grunt-sftp-deploy</a></li>
</ul>
<h3>VSCODE</h3>
<ul>
<li>
<p><a href="https://github.com/mkloubert/vs-deploy#deploying-to-sftp-">https://github.com/mkloubert/vs-deploy#deploying-to-sftp-</a></p>
</li>
<li>
<p><a href="https://github.com/liximomo/vscode-sftp">https://github.com/liximomo/vscode-sftp</a></p>
</li>
<li>
<p><a href="https://coderwall.com/p/xczkaq/ftp-is-so-90-s-let-s-deploy-via-git-instead">https://coderwall.com/p/xczkaq/ftp-is-so-90-s-let-s-deploy-via-git-instead</a></p>
</li>
</ul>
<h3>DEPLOYMENT</h3>
<ul>
<li><a href="https://buddy.works/ftp">https://buddy.works/ftp</a></li>
<li><a href="https://deploybot.com">https://deploybot.com</a></li>
<li><a href="https://ftploy.com">https://ftploy.com</a></li>
<li><a href="https://www.deployhq.com/">https://www.deployhq.com/</a></li>
<li><a href="https://vercel.com/">https://vercel.com/</a></li>
</ul>
<h4>DPLOY EXAMPLE</h4>
<p>example to deploy on ftp server</p>
<ul>
<li>create file: dploy.yaml</li>
<li>deploy command : dploy alias</li>
</ul>
<pre><code>deploy_alias:
    host: "ftp.domain"
    user: "use"
    pass: "pwd"
    path:
        local: "/"
        remote: "/folder/"
exclude: [".vscode/**/*.{xml,json,abc}",".idea/**/*.{xml,json,abc}",".gitignore","dploy.yaml","_local/**/*.{html,css,sql,xml,md,php,html,js,json,htaccess}"]
</code></pre>