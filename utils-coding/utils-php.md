<h1>PHP</h1>
<h2>STANDARD</h2>
<ul>
<li><a href="https://github.com/alexeymezenin/laravel-best-practices">https://github.com/alexeymezenin/laravel-best-practices</a></li>
<li><a href="http://eilgin.github.io/php-the-right-way/">http://eilgin.github.io/php-the-right-way/</a></li>
<li><a href="https://github.com/dseguy/clearPHP">https://github.com/dseguy/clearPHP</a></li>
<li><a href="https://github.com/odan/learn-php">https://github.com/odan/learn-php</a></li>
<li><a href="https://phpbestpractices.org">https://phpbestpractices.org</a></li>
</ul>
<h2>INSTALL</h2>
<ul>
<li><a href="https://computingforgeeks.com/how-to-install-latest-php-on-debian/">https://computingforgeeks.com/how-to-install-latest-php-on-debian/</a></li>
</ul>
<h2>COMPOSER</h2>
<pre><code>composer dump-autoload (GENERATE import class)
composer update (update dependecies &#x26; generate import class)
</code></pre>
<h2>XAMPP VIRTUAL HOST</h2>
<ol>
<li>Open and edit like below the file: C:/xampp/apache/conf/extra/httpd-vhosts.conf</li>
</ol>
<pre><code>&#x3C;VirtualHost *:80>
ServerAdmin webmaster@localhost.com
DocumentRoot "C:/xampp3/htdocs/projectfolder/public"
ServerName myurl.test
&#x3C;/VirtualHost>
</code></pre>
<p>If you want to use directory external to your default htdocs then you need to add to the VirtualHost> tag the following:</p>
<pre><code>&#x3C;Directory "D:/Work/mypath/example">
    Require all granted    
&#x3C;/Directory>
</code></pre>
<ol start="2">
<li>Open and edit like below the file: C:\Windows\System32\drivers\etc\hosts</li>
</ol>
<pre><code>127.0.0.1      myurl.test
</code></pre>
<p>More infos: </p>
<ul>
<li><a href="https://www.cloudways.com/blog/configure-virtual-host-on-windows-10-for-wordpress/">https://www.cloudways.com/blog/configure-virtual-host-on-windows-10-for-wordpress/</a></li>
<li><a href="https://tonyfrenzy.medium.com/xampp-serving-from-any-directory-outside-of-htdocs-22a93f1b8815">https://tonyfrenzy.medium.com/xampp-serving-from-any-directory-outside-of-htdocs-22a93f1b8815</a></li>
<li><a href="https://stackoverflow.com/questions/27754367/how-to-set-up-apache-virtual-hosts-on-xampp-windows">https://stackoverflow.com/questions/27754367/how-to-set-up-apache-virtual-hosts-on-xampp-windows</a></li>
</ul>
<h2>XAMPP INCLUDE HTML PAGES</h2>
<pre><code>c:/xampp/apache/conf/httpd.conf
Search for:
AddType text/html .shtml
Add the below two lines:
AddType text/html .html
AddOutputFilter INCLUDES .html
Go to Xampp Control Panel and stop the session and restart again.
Refresh the page in browser and see, the virtual includes will start working.
&#x3C;!--#include virtual="/fr/header.html" -->
&#x3C;!--#include virtual="/se/site/as-html-web/site/fr/header.html" -->
</code></pre>
<h2>HOST</h2>
<ul>
<li><a href="https://www.infinityfree.com/">https://www.infinityfree.com/</a></li>
<li><a href="https://googiehost.com/">https://googiehost.com/</a></li>
</ul>
<h2>SECURITY</h2>
<ul>
<li><a href="https://www.acunetix.com/websitesecurity/php-security-1/">https://www.acunetix.com/websitesecurity/php-security-1/</a></li>
<li><a href="http://phpsecurity.readthedocs.io/en/latest/index.html">http://phpsecurity.readthedocs.io/en/latest/index.html</a></li>
<li><a href="http://securingphp.com">http://securingphp.com</a></li>
</ul>
<h2>LISTS</h2>
<ul>
<li><a href="https://github.com/ziadoz/awesome-php">https://github.com/ziadoz/awesome-php</a></li>
<li><a href="https://www.cloudways.com/blog/top-php-github-projects/">https://www.cloudways.com/blog/top-php-github-projects/</a></li>
</ul>
<h2>LIBS: ALL</h2>
<ul>
<li><a href="https://github.com/nuwave/lighthouse">https://github.com/nuwave/lighthouse</a></li>
<li><a href="https://github.com/phpstan/phpdoc-parser">https://github.com/phpstan/phpdoc-parser</a></li>
<li><a href="https://github.com/flowjs/flow-php-server">https://github.com/flowjs/flow-php-server</a></li>
<li><a href="https://github.com/selective-php/image-type">https://github.com/selective-php/image-type</a></li>
<li><a href="https://github.com/gossi/php-code-generator">https://github.com/gossi/php-code-generator</a></li>
<li><a href="https://github.com/EventSaucePHP/EventSauce">https://github.com/EventSaucePHP/EventSauce</a></li>
<li><a href="https://github.com/matomo-org/device-detector">https://github.com/matomo-org/device-detector</a></li>
<li><a href="https://github.com/selective-php/zip-responder">https://github.com/selective-php/zip-responder</a></li>
<li><a href="https://github.com/FriendsOfCake/crud">https://github.com/FriendsOfCake/crud</a></li>
<li><a href="https://github.com/selective-php">https://github.com/selective-php</a></li>
<li><a href="https://github.com/nette">https://github.com/nette</a></li>
</ul>
<h2>SERVERLESS</h2>
<ul>
<li><a href="https://github.com/vercel-community/php">https://github.com/vercel-community/php</a></li>
<li><a href="https://neon.tech/docs/guides/symfony">https://neon.tech/docs/guides/symfony</a></li>
</ul>
<h2>STARTER</h2>
<ul>
<li><a href="https://github.com/kachidk/atlas">https://github.com/kachidk/atlas</a></li>
</ul>
<h2>FRAMEWORKS</h2>
<ul>
<li><a href="https://github.com/laminas/laminas-mvc">https://github.com/laminas/laminas-mvc</a></li>
<li><a href="https://github.com/psr7-sessions/storageless">https://github.com/psr7-sessions/storageless</a></li>
<li><a href="https://github.com/willdurand/Negotiation">https://github.com/willdurand/Negotiation</a></li>
<li><a href="https://github.com/galousis/cqrs-ddd-php-example">https://github.com/galousis/cqrs-ddd-php-example</a></li>
</ul>
<h2>DEVTOOLS</h2>
<ul>
<li><a href="https://github.com/pestphp/pest">https://github.com/pestphp/pest</a></li>
<li><a href="https://github.com/xdebug/xdebug">https://github.com/xdebug/xdebug</a></li>
<li><a href="https://github.com/rectorphp/rector">https://github.com/rectorphp/rector</a></li>
</ul>
<h2>LIB:</h2>
<ul>
<li><a href="https://github.com/1ma/uuid">https://github.com/1ma/uuid</a></li>
<li><a href="https://github.com/nette/utils">https://github.com/nette/utils</a></li>
<li><a href="https://github.com/1ma/JsonRpc">https://github.com/1ma/JsonRpc</a></li>
<li><a href="https://github.com/1ma/Psr7Hmac">https://github.com/1ma/Psr7Hmac</a></li>
<li><a href="https://github.com/vrana/adminer">https://github.com/vrana/adminer</a></li>
<li><a href="https://github.com/janephp/janephp">https://github.com/janephp/janephp</a></li>
<li><a href="https://github.com/firebase/php-jwt">https://github.com/firebase/php-jwt</a></li>
<li><a href="https://github.com/cweiske/jsonmapper">https://github.com/cweiske/jsonmapper</a></li>
<li><a href="https://github.com/php-fig/http-factory">https://github.com/php-fig/http-factory</a></li>
<li><a href="https://github.com/FGRibreau/mailchecker">https://github.com/FGRibreau/mailchecker</a></li>
<li><a href="https://github.com/willdurand/Negotiation">https://github.com/willdurand/Negotiation</a></li>
<li><a href="https://github.com/laminas/laminas-session">https://github.com/laminas/laminas-session</a></li>
<li><a href="https://github.com/WsdlToPhp/PackageGenerator">https://github.com/WsdlToPhp/PackageGenerator</a></li>
<li><a href="https://github.com/RobDWaller/ReallySimpleJWT">https://github.com/RobDWaller/ReallySimpleJWT</a></li>
<li><a href="https://github.com/docusign/docusign-php-client">https://github.com/docusign/docusign-php-client</a></li>
<li><a href="https://github.com/jandaryl/simple-php-boilerplate">https://github.com/jandaryl/simple-php-boilerplate</a></li>
</ul>
<h2>SLIM PHP UTILS</h2>
<ul>
<li><a href="https://github.com/odan/slim-checker">https://github.com/odan/slim-checker</a></li>
<li><a href="https://github.com/xssc/awesome-slim">https://github.com/xssc/awesome-slim</a></li>
<li><a href="https://github.com/slimphp/PHP-View">https://github.com/slimphp/PHP-View</a></li>
<li><a href="https://github.com/PHP-DI/Slim-Bridge">https://github.com/PHP-DI/Slim-Bridge</a></li>
<li><a href="https://github.com/odan/slim4-htmx">https://github.com/odan/slim4-htmx</a></li>
<li><a href="https://github.com/zhorton34/authorize-slim-4">https://github.com/zhorton34/authorize-slim-4</a></li>
<li><a href="https://github.com/selective-php/samesite-cookie">https://github.com/selective-php/samesite-cookie</a></li>
<li><a href="https://github.com/akrabat/rka-slim-session-middleware">https://github.com/akrabat/rka-slim-session-middleware</a></li>
<li><a href="https://github.com/bryanjhv/slim-session">https://github.com/bryanjhv/slim-session</a></li>
<li><a href="https://github.com/selective-php/basepath">https://github.com/selective-php/basepath</a></li>
<li><a href="https://github.com/selective-php/session">https://github.com/selective-php/session</a></li>
<li><a href="https://github.com/selective-php/validation">https://github.com/selective-php/validation</a></li>
<li><a href="https://github.com/slimphp/Slim-Flash">https://github.com/slimphp/Slim-Flash</a></li>
<li><a href="https://github.com/slimphp/Slim-Csrf">https://github.com/slimphp/Slim-Csrf</a></li>
<li><a href="https://github.com/slimphp/Slim-Http">https://github.com/slimphp/Slim-Http</a></li>
<li><a href="https://github.com/slimphp/Twig-View">https://github.com/slimphp/Twig-View</a></li>
<li><a href="https://github.com/slimphp/Slim-Console">https://github.com/slimphp/Slim-Console</a></li>
<li><a href="http://php-di.org/doc/frameworks/slim.html">http://php-di.org/doc/frameworks/slim.html</a></li>
<li><a href="https://github.com/laminas/laminas-hydrator">https://github.com/laminas/laminas-hydrator</a></li>
<li><a href="https://github.com/laminas/laminas-permissions-acl/">https://github.com/laminas/laminas-permissions-acl/</a></li>
<li><a href="https://aimeos.org/slim-ecommerce-package/">https://aimeos.org/slim-ecommerce-package/</a></li>
<li><a href="https://github.com/geggleto/slim-do-app">https://github.com/geggleto/slim-do-app</a></li>
<li><a href="https://github.com/HavenShen/slim-born">https://github.com/HavenShen/slim-born</a></li>
<li><a href="https://github.com/awurth/SlimValidation">https://github.com/awurth/SlimValidation</a></li>
<li><a href="https://github.com/Neoflow/Session">https://github.com/Neoflow/Session</a></li>
</ul>
<h2>SLIM PHP V3 SKELETON</h2>
<ul>
<li><a href="https://github.com/1ma/Slim-Doctrine-Demo">https://github.com/1ma/Slim-Doctrine-Demo</a></li>
<li><a href="https://github.com/adriansuter/Slim4-Skeleton">https://github.com/adriansuter/Slim4-Skeleton</a></li>
<li><a href="https://github.com/nbayramberdiyev/slim-4-starter">https://github.com/nbayramberdiyev/slim-4-starter</a></li>
<li><a href="https://github.com/slimphp/Slim-Skeleton">https://github.com/slimphp/Slim-Skeleton</a></li>
<li><a href="https://github.com/odan/prisma">https://github.com/odan/prisma</a></li>
<li><a href="https://github.com/tuupola/slim-api-skeleton">https://github.com/tuupola/slim-api-skeleton</a></li>
<li><a href="https://github.com/gothinkster/slim-php-realworld-example-app">https://github.com/gothinkster/slim-php-realworld-example-app</a></li>
<li><a href="https://github.com/railto/realworld-slim">https://github.com/railto/realworld-slim</a></li>
<li><a href="https://github.com/maurobonfietti/rest-api-slim-php">https://github.com/maurobonfietti/rest-api-slim-php</a></li>
<li><a href="https://github.com/codecourse/slender">https://github.com/codecourse/slender</a></li>
</ul>
<h2>SLIM PHP V4 SKELETON</h2>
<ul>
<li><a href="https://github.com/adriansuter/Slim4-Skeleton">https://github.com/adriansuter/Slim4-Skeleton</a></li>
<li><a href="https://github.com/slimphp/Slim-Skeleton">https://github.com/slimphp/Slim-Skeleton</a></li>
<li><a href="https://github.com/semhoun/slim-skeleton-mvc">https://github.com/semhoun/slim-skeleton-mvc</a></li>
<li><a href="https://github.com/odan/slim4-skeleton">https://github.com/odan/slim4-skeleton</a></li>
<li><a href="https://github.com/maurobonfietti/slim4-api-skeleton">https://github.com/maurobonfietti/slim4-api-skeleton</a></li>
<li><a href="https://github.com/maurobonfietti/slim4-api-skeleton-crud-generator">https://github.com/maurobonfietti/slim4-api-skeleton-crud-generator</a></li>
<li><a href="http://www.slimframework.com/docs/v4/">http://www.slimframework.com/docs/v4/</a></li>
<li><a href="https://github.com/odan/slim4-tutorial">https://github.com/odan/slim4-tutorial</a></li>
<li><a href="https://odan.github.io/2019/11/05/slim4-tutorial.html">https://odan.github.io/2019/11/05/slim4-tutorial.html</a></li>
</ul>
<h2>SLIM PHP AUTH JWT</h2>
<ul>
<li><a href="https://github.com/tuupola/slim-jwt-auth">https://github.com/tuupola/slim-jwt-auth</a></li>
<li><a href="https://github.com/tuupola/slim-api-skeleton">https://github.com/tuupola/slim-api-skeleton</a></li>
<li><a href="https://github.com/letsila/slim3-jwt-auth-example">https://github.com/letsila/slim3-jwt-auth-example</a></li>
<li><a href="https://appelsiini.net/projects/slim-jwt-auth/">https://appelsiini.net/projects/slim-jwt-auth/</a></li>
<li><a href="https://github.com/akrabat/slim-bookshelf-api">https://github.com/akrabat/slim-bookshelf-api</a></li>
<li><a href="https://speakerdeck.com/akrabat/2017-04-08-phpyorkshire-slim-oauth2">https://speakerdeck.com/akrabat/2017-04-08-phpyorkshire-slim-oauth2</a></li>
<li><a href="https://arjunphp.com/secure-web-services-using-jwt-slim3-framework/">https://arjunphp.com/secure-web-services-using-jwt-slim3-framework/</a></li>
</ul>
<h2>PSR15</h2>
<ul>
<li><a href="https://github.com/middlewares/awesome-psr15-middlewares">https://github.com/middlewares/awesome-psr15-middlewares</a></li>
<li><a href="https://github.com/chubbyphp/chubbyphp-framework">https://github.com/chubbyphp/chubbyphp-framework</a></li>
</ul>
<h2>SLIM PHP TEST</h2>
<ul>
<li><a href="https://medium.com/@Andela/writing-testable-api-apps-in-slim-framework-29905970941b">https://medium.com/@Andela/writing-testable-api-apps-in-slim-framework-29905970941b</a></li>
</ul>
<h2>CMS / HEADLESS</h2>
<ul>
<li><a href="https://github.com/directus/directus">https://github.com/directus/directus</a></li>
<li><a href="https://github.com/flextype/flextype">https://github.com/flextype/flextype</a></li>
<li><a href="https://github.com/agentejo/cockpit">https://github.com/agentejo/cockpit</a></li>
<li><a href="https://github.com/quantacms/quanta">https://github.com/quantacms/quanta</a></li>
<li><a href="https://github.com/airesvsg/acf-to-rest-api">https://github.com/airesvsg/acf-to-rest-api</a></li>
</ul>
<h2>ASYNCRONOUS ASYNCRONOUS</h2>
<ul>
<li><a href="https://amphp.org">https://amphp.org</a></li>
</ul>
<h2>AUTODEPLOY</h2>
<ul>
<li><a href="http://rocketeer.autopergamene.eu/">http://rocketeer.autopergamene.eu/</a></li>
<li><a href="https://deployer.org/">https://deployer.org/</a></li>
<li><a href="https://github.com/dg/ftp-deployment">https://github.com/dg/ftp-deployment</a></li>
<li><a href="https://github.com/git-ftp/git-ftp">https://github.com/git-ftp/git-ftp</a></li>
<li><a href="https://github.com/deployphp/deployer">https://github.com/deployphp/deployer</a></li>
</ul>
<h2>IDE + EXTENSION</h2>
<ul>
<li><a href="http://calebporzio.com/my-vs-code-setup-2/">http://calebporzio.com/my-vs-code-setup-2/</a></li>
<li><a href="https://github.com/tightenco/tlint">https://github.com/tightenco/tlint</a></li>
</ul>
<h2>CQRS / DDD / EventSourcing</h2>
<ul>
<li><a href="https://github.com/real34/cqrs-es-camboui">https://github.com/real34/cqrs-es-camboui</a></li>
<li><a href="https://gist.github.com/jsor/6e79afb989c866915f20">https://gist.github.com/jsor/6e79afb989c866915f20</a></li>
<li><a href="http://martinfowler.com/eaaDev/EventSourcing.html">http://martinfowler.com/eaaDev/EventSourcing.html</a></li>
<li><a href="http://cqrs.nu/">http://cqrs.nu/</a></li>
<li><a href="https://dddcommunity.org/resources/ddd_terms/">https://dddcommunity.org/resources/ddd_terms/</a></li>
</ul>
<h2>XAMPP</h2>
<p>xampp multiple !: </p>
<ul>
<li><a href="http://webdevzoom.com/install-run-multiple-xampp-windows/">http://webdevzoom.com/install-run-multiple-xampp-windows/</a></li>
</ul>
<h2>ENV CONF</h2>
<ul>
<li><a href="http://jgrundner.com/slim-oo-003-decoupling-the-configuration/">http://jgrundner.com/slim-oo-003-decoupling-the-configuration/</a></li>
<li><a href="https://www.ekito.fr/people/setup-a-development-configuration-for-angularjs-and-a-php-mysql-rest-server-solving-the-cors-issue/">https://www.ekito.fr/people/setup-a-development-configuration-for-angularjs-and-a-php-mysql-rest-server-solving-the-cors-issue/</a></li>
</ul>
<h2>SSO</h2>
<ul>
<li><a href="https://github.com/jasny/sso">https://github.com/jasny/sso</a></li>
<li><a href="http://stackoverflow.com/questions/4061537/best-way-to-implement-single-sign-on-with-all-major-providers">http://stackoverflow.com/questions/4061537/best-way-to-implement-single-sign-on-with-all-major-providers</a></li>
</ul>
<h2>VALIDATION</h2>
<ul>
<li><a href="https://github.com/vlucas/valitron">https://github.com/vlucas/valitron</a></li>
<li><a href="https://github.com/selective-php/validation">https://github.com/selective-php/validation</a></li>
</ul>
<h2>IMAGE</h2>
<ul>
<li><a href="https://github.com/eventviva/php-image-resize">https://github.com/eventviva/php-image-resize</a></li>
</ul>
<h2>PUSH</h2>
<ul>
<li><a href="https://github.com/edamov/pushok">https://github.com/edamov/pushok</a></li>
<li><a href="https://samauto.nl/en/apple-push-notification-service-ios/">https://samauto.nl/en/apple-push-notification-service-ios/</a></li>
<li><a href="https://dev.to/samauto/connect-to-apns-via-http-2-with-php-57oj">https://dev.to/samauto/connect-to-apns-via-http-2-with-php-57oj</a></li>
</ul>
<h2>MYSQL</h2>
<ul>
<li><a href="https://github.com/hholzgra/mysql-udf-regexp/tree/master/regexp">https://github.com/hholzgra/mysql-udf-regexp/tree/master/regexp</a></li>
<li><a href="https://www.codeproject.com/Articles/1221422/Importance-of-Logging-in-MySQL">https://www.codeproject.com/Articles/1221422/Importance-of-Logging-in-MySQL</a></li>
</ul>
<h2>LIBS</h2>
<ul>
<li><a href="https://github.com/nette/forms">https://github.com/nette/forms</a></li>
<li><a href="https://github.com/php-pm/php-pm">https://github.com/php-pm/php-pm</a></li>
<li><a href="https://github.com/matrix-msu/kora">https://github.com/matrix-msu/kora</a></li>
<li><a href="https://github.com/dcarbone/php-object-merge">https://github.com/dcarbone/php-object-merge</a></li>
<li><a href="https://github.com/selective-php/image-type">https://github.com/selective-php/image-type</a></li>
<li><a href="https://github.com/selective-php/video-type">https://github.com/selective-php/video-type</a></li>
<li><a href="https://github.com/selective-php/audio-type">https://github.com/selective-php/audio-type</a></li>
<li><a href="https://github.com/spekulatius/phpscraper">https://github.com/spekulatius/phpscraper</a></li>
</ul>
<h2>TESTS</h2>
<ul>
<li><a href="https://github.com/carlosas/phpat">https://github.com/carlosas/phpat</a></li>
</ul>
<h2>ORM</h2>
<ul>
<li><a href="https://medium.com/@romaninsh/objectively-comparing-orm-dal-libraries-e4f095de80b5">https://medium.com/@romaninsh/objectively-comparing-orm-dal-libraries-e4f095de80b5</a></li>
<li><a href="http://woz.posthaven.com/what-orms-have-taught-me-just-learn-sql">http://woz.posthaven.com/what-orms-have-taught-me-just-learn-sql</a></li>
<li><a href="https://github.com/propelorm/Propel2">https://github.com/propelorm/Propel2</a></li>
<li><a href="https://github.com/cycle/orm">https://github.com/cycle/orm</a></li>
<li><a href="https://redbeanphp.com">https://redbeanphp.com</a></li>
<li><a href="http://propelorm.org/">http://propelorm.org/</a></li>
</ul>
<h2>PDO WRAPPER (ORM ALTERNATIVE)</h2>
<ul>
<li><a href="https://phpdelusions.net/pdo/pdo_wrapper">https://phpdelusions.net/pdo/pdo_wrapper</a></li>
<li><a href="https://phpdelusions.net/pdo_examples/dynamical_where">https://phpdelusions.net/pdo_examples/dynamical_where</a></li>
<li><a href="http://slashnode.com/pdo-for-elegant-php-database-access/">http://slashnode.com/pdo-for-elegant-php-database-access/</a></li>
<li><a href="https://github.com/fhmj/pdo-flexible-search">https://github.com/fhmj/pdo-flexible-search</a></li>
<li><a href="https://github.com/GrumpyCrouton/GrumpyPDO">https://github.com/GrumpyCrouton/GrumpyPDO</a></li>
<li><a href="https://github.com/paragonie/easydb">https://github.com/paragonie/easydb</a></li>
<li><a href="https://github.com/daveismyname/pdo-wrapper">https://github.com/daveismyname/pdo-wrapper</a></li>
</ul>
<h2>PDF LIB</h2>
<ul>
<li><a href="http://www.fpdf.org">http://www.fpdf.org</a> (no dependencies but very old)</li>
<li><a href="https://github.com/mpdf/mpdf">https://github.com/mpdf/mpdf</a> (no dependencies)</li>
<li><a href="https://github.com/tecnickcom/tcpdf">https://github.com/tecnickcom/tcpdf</a> (no dependencies)</li>
<li><a href="https://github.com/mikehaertl/phpwkhtmltopdf">https://github.com/mikehaertl/phpwkhtmltopdf</a> (slimPHP wrapper + require wkhtmltopdf)</li>
</ul>
<h2>PROXY</h2>
<ul>
<li><a href="https://www.php-proxy.com/">https://www.php-proxy.com/</a></li>
<li><a href="https://github.com/Athlon1600/php-proxy">https://github.com/Athlon1600/php-proxy</a></li>
<li><a href="https://github.com/Athlon1600/php-proxy-app">https://github.com/Athlon1600/php-proxy-app</a></li>
<li><a href="https://github.com/jenssegers/php-proxy">https://github.com/jenssegers/php-proxy</a></li>
<li><a href="https://github.com/zounar/php-proxy">https://github.com/zounar/php-proxy</a></li>
</ul>
<h2>STATIC ANALYZER / ANALYZYS</h2>
<ul>
<li><a href="https://github.com/phpstan/phpstan">https://github.com/phpstan/phpstan</a></li>
<li><a href="https://github.com/phan/phan">https://github.com/phan/phan</a></li>
<li><a href="https://www.exakat.io">https://www.exakat.io</a></li>
</ul>
<h2>PHP VSCODE EXTENSIONS</h2>
<p>Apache Conf<br>
API Elements extension<br>
change-case<br>
Composer<br>
Docker<br>
MySQL Syntax<br>
openapi-lint<br>
PHP Debug<br>
PHP DocBlocker<br>
PHP Intelephense<br>
PHP Mess Detector<br>
PHP Namespace Resolver<br>
PHP Phan (Analyzer)<br>
phpcbf<br>
phpcs<br>
XML Tools<br>
YAML</p>