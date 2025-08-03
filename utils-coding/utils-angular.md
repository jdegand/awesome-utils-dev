<p><strong>Table of Contents</strong>  <em>generated with <a href="https://github.com/thlorenz/doctoc">DocToc</a></em></p>
<ul>
<li><a href="#angular">ANGULAR</a><ul>
<li><a href="#templates">TEMPLATES</a></li>
<li><a href="#css">CSS</a></li>
<li><a href="#cli">CLI</a><ul>
<li><a href="#auto-update">AUTO UPDATE</a></li>
<li><a href="#build-prod">BUILD PROD</a></li>
<li><a href="#extends">EXTENDS</a></li>
</ul></li>
<li><a href="#upgrade">UPGRADE</a><ul>
<li><a href="#clean-node_modules">CLEAN NODE_MODULES</a></li>
<li><a href="#upgrade-cli-version">UPGRADE CLI VERSION</a></li>
<li><a href="#upgrade-ng-version">UPGRADE NG VERSION</a></li>
</ul></li>
<li><a href="#monorepo">MONOREPO</a><ul>
<li><a href="#install">INSTALL</a></li>
<li><a href="#add-angular">ADD ANGULAR</a></li>
<li><a href="#add-scully">ADD SCULLY</a></li>
<li><a href="#start">START</a></li>
<li><a href="#buildserve">BUILD&#x26;SERVE</a></li>
<li><a href="#buildserve-watch">BUILD&#x26;SERVE (+WATCH)</a></li>
<li><a href="#resources">RESOURCES</a></li>
<li><a href="#structure">STRUCTURE</a></li>
<li><a href="#reusable-lib">REUSABLE LIB</a></li>
</ul></li>
<li><a href="#http-post-params">HTTP POST PARAMS</a></li>
<li><a href="#redux--ngrx">REDUX / NGRX</a><ul>
<li><a href="#summary">Summary</a></li>
<li><a href="#new-projects">New projects</a></li>
<li><a href="#cycle">Cycle</a></li>
<li><a href="#issues">Issues</a></li>
<li><a href="#pitfalls">Pitfalls</a></li>
<li><a href="#tips">Tips</a></li>
<li><a href="#components">Components</a></li>
</ul></li>
<li><a href="#pipes">PIPES</a></li>
<li><a href="#directives">DIRECTIVES</a><ul>
<li><a href="#angular-directives">ANGULAR DIRECTIVES</a></li>
</ul></li>
<li><a href="#decorators">DECORATORS</a></li>
<li><a href="#lifecycle">LIFECYCLE</a></li>
<li><a href="#api">API</a></li>
<li><a href="#angular-dom">ANGULAR DOM</a></li>
<li><a href="#form">FORM</a></li>
<li><a href="#angular-testing">ANGULAR TESTING</a><ul>
<li><a href="#e2e-tests">E2E TESTS</a></li>
<li><a href="#unit-tests">UNIT TESTS</a></li>
<li><a href="#strategy">STRATEGY</a></li>
<li><a href="#example-type-of-tests">EXAMPLE TYPE OF TESTS</a></li>
<li><a href="#mocking">MOCKING</a></li>
<li><a href="#testing-factorizeimports">TESTING FACTORIZE/IMPORTS</a></li>
<li><a href="#testing-translate">TESTING TRANSLATE</a></li>
</ul></li>
<li><a href="#modules">MODULES</a><ul>
<li><a href="#benefits-of-lazy-modules">Benefits of lazy modules</a></li>
<li><a href="#one-shared-module">One shared module</a></li>
<li><a href="#multiple-shared-modules">Multiple shared modules</a></li>
<li><a href="#shared-modules-part">Shared modules part</a></li>
<li><a href="#dependency-injection-di">Dependency injection (DI)</a></li>
<li><a href="#types">Types</a></li>
<li><a href="#providing">Providing</a></li>
<li><a href="#decorators">Decorators</a></li>
</ul></li>
<li><a href="#change-detection">CHANGE DETECTION</a><ul>
<li><a href="#optimization">Optimization</a></li>
<li><a href="#onpush-and-immutability">OnPush and immutability</a></li>
<li><a href="#pipes-instead-of-methods-in-template">Pipes instead of methods in template</a></li>
<li><a href="#cahing">Cahing</a></li>
<li><a href="#trackby-in-ngfor">TrackBy in ngFor</a></li>
<li><a href="#detach-change-detection">Detach change detection</a></li>
<li><a href="#others-optimization">Others optimization</a></li>
</ul></li>
<li><a href="#coding-rules">CODING RULES</a><ul>
<li><a href="#reactive-programming">Reactive programming</a></li>
</ul></li>
<li><a href="#debug">DEBUG</a><ul>
<li><a href="#devtools">DEVTOOLS</a></li>
<li><a href="#performance">PERFORMANCE</a></li>
<li><a href="#measure">MEASURE</a></li>
<li><a href="#circular-dependencies">CIRCULAR DEPENDENCIES</a></li>
</ul></li>
<li><a href="#bad-practices">BAD PRACTICES</a></li>
<li><a href="#best-practices">BEST PRACTICES</a></li>
<li><a href="#join-an-existing-projects">JOIN AN EXISTING PROJECTS</a></li>
<li><a href="#microfrontend">MICROFRONTEND</a></li>
<li><a href="#jamstack">JAMSTACK</a><ul>
<li><a href="#scully">SCULLY</a></li>
</ul></li>
<li><a href="#tips">TIPS</a></li>
<li><a href="#interview">INTERVIEW</a><ul>
<li><a href="#breaking-ice-questions">BREAKING ICE QUESTIONS:</a></li>
<li><a href="#open-questions">OPEN QUESTIONS:</a></li>
<li><a href="#technical-questions">TECHNICAL QUESTIONS:</a></li>
<li><a href="#closed-questions">CLOSED QUESTIONS:</a></li>
<li><a href="#test">TEST</a></li>
</ul></li>
</ul></li>
</ul>
<h1>ANGULAR</h1>
<h2>TEMPLATES</h2>
<ul>
<li>{{}} pour l’interpolation,</li>
<li>[] pour le binding de propriété (entrée)</li>
<li>() pour le binding d’événement (sortie)</li>
<li>'#' pour la déclaration de variable</li>
<li>'*' pour les directives structurelles (for/if...)</li>
</ul>
<p>Template binding works with properties and events of DOM elements, components, and directives, not HTML, not attributes. When you write a data-binding, you're dealing exclusively with the DOM properties and events of the target object.</p>
<ul>
<li>Attributes (are defined by HTML) initialize DOM properties and directive state and then they are done. </li>
<li>Property (are accessed from DOM nodes) values can change; attribute values can't.</li>
<li>A few HTML attributes have 1:1 mapping to properties; for example, id. Some HTML attributes don't have corresponding properties; for example, aria-*. </li>
</ul>
<p>There is one exception to this rule. Attributes can be changed by setAttribute(), which re-initializes corresponding DOM properties.</p>
<ul>
<li><a href="https://angular.io/guide/binding-syntax">https://angular.io/guide/binding-syntax</a></li>
<li><a href="https://blog.angularindepth.com/angular-mastery-template-syntax-194bffe2ad6f">https://blog.angularindepth.com/angular-mastery-template-syntax-194bffe2ad6f</a></li>
</ul>
<h2>CSS</h2>
<p>::ng-deep .mat-option  { ... } without :host then it's not isolated and it apply to all mat-option in the app...</p>
<h2>CLI</h2>
<pre><code>ng g component pony test-list
ng g class article
ng g service article
ng g pipe my-new-pipe
ng g directive my-directive
ng g guard logged-in

ng g module lazy
ng g component lazy/lazypage

ng serve

ng github-pages:deploy
git subtree push --prefix dist/ origin gh-pages
</code></pre>
<ul>
<li><a href="https://angularconsole.com/">https://angularconsole.com/</a></li>
<li><a href="https://www.amadousall.com/my-favourite-angular-cli-commands-and-options/">https://www.amadousall.com/my-favourite-angular-cli-commands-and-options/</a></li>
<li><a href="https://github.com/angular/angular-cli#proxy-to-backend">https://github.com/angular/angular-cli#proxy-to-backend</a></li>
</ul>
<h3>AUTO UPDATE</h3>
<pre><code>sudo npm install -g npm-check-updates
rmdir /s/q node_modules
ncu for display
ncu -u for re-writing your package.json
ncu -a for upgrade all
</code></pre>
<h3>NODE HIGH MEMORY</h3>
<pre><code># use it as it is in your npm script
node --max_old_space_size=8096 ./node_modules/@angular/cli/bin/ng
# or create a new script called nghm to reuse it in others scripts 
"nghm": "node --max_old_space_size=8096 ./node_modules/@angular/cli/bin/ng"
# start with high mem
npm run nghm -- serve
</code></pre>
<p>more complex usage in <a href="utils-node.md">utils-node</a></p>
<h3>BUILD PROD</h3>
<pre><code>ng build --prod
ng build --prod --aot
ng build --prod --aot --bh /enterprise/webapp/ --build-optimizer        OK
ng build --prod --aot --base-href '/enterprise/'
ng build --target=production --base-href '/enterprise/'
</code></pre>
<ul>
<li><a href="http://stackoverflow.com/questions/37631098/how-to-bundle-and-angular-2-app-for-production">http://stackoverflow.com/questions/37631098/how-to-bundle-and-angular-2-app-for-production</a></li>
</ul>
<h3>EXTENDS</h3>
<ul>
<li>Add lib:</li>
<li>ajouter un fichier css ou lib js :</li>
<li>installer via npm --save</li>
<li>ajouter dans angular-cli.json > balises styles + scripts</li>
</ul>
<h2>UPGRADE</h2>
<h3>CLEAN CACHE</h3>
<pre><code>npm run clean
rm -rf node_modules/.cache
rm -rf .angular
nx reset
</code></pre>
<h3>CLEAN NODE_MODULES</h3>
<pre><code>rmdir /s /q node_modules (windows)
rm -r -f node_modules (linux)
</code></pre>
<h3>UPGRADE CLI VERSION</h3>
<ul>
<li><a href="https://yakovfain.com/2017/02/05/upgrading-to-the-latest-angular-cli">https://yakovfain.com/2017/02/05/upgrading-to-the-latest-angular-cli</a></li>
<li><a href="https://github.com/angular/angular-cli/wiki/Upgrading-from-Beta.10-to-Beta.14">https://github.com/angular/angular-cli/wiki/Upgrading-from-Beta.10-to-Beta.14</a></li>
</ul>
<pre><code>npm uninstall -g angular-cli
npm cache clean
npm install -g @angular/cli
</code></pre>
<h3>UPGRADE CLASSIC APP</h3>
<pre><code>npm outdated # Check for out of date modules
ng update @angular/core @angular/cli # Update Angular
ng update --all --force # Update all Angular and force
npm update # Update non-Angular dependencies
</code></pre>
<h3>UPGRADE NX/XPLAT</h3>
<pre><code>nx migrate @nrwl/workspace@x.x.x # Update with NX Workspace (sol:1)
nx migrate latest # Update with latest NX (sol:2)
npm install
nx migrate --run-migrations=migrations.json
</code></pre>
<p>NOTE: The packages you update may differ depending on your xplat workspace but this shows an example of a workspace that had web and nativescript platforms configured. It will usually be all the @nstudio packages in devDependencies.</p>
<pre><code>nx migrate @nstudio/angular@11.0.3-rc.3
nx migrate @nstudio/nativescript-angular@11.0.3-rc.3
nx migrate @nstudio/nativescript@11.0.3-rc.3
nx migrate @nstudio/web-angular@11.0.3-rc.3 
nx migrate @nstudio/web@11.0.3-rc.3
nx migrate @nstudio/xplat@11.0.3-rc.3
npm install
</code></pre>
<p>Now that the latest versions installed, kick off the xplat architecture init to add the new xplat lib separations.</p>
<p>You will want to pass just the platforms which you currently use in your workspace.<br>
The prefix you use can be the same your workspace is currently configured to use. This can be found in package.json under the xplat key.</p>
<pre><code>nx g @nstudio/xplat:init --prefix=abc --platforms=web,nativescript --framework=angular
</code></pre>
<p>With the new architecture in place and the latest all installed, you can now kick off the workspace migration:</p>
<pre><code>nx migrate --run-migrations=migrations.json
</code></pre>
<p>This will handle a lot of laborious manual update tasks like:</p>
<p>Updating your tsconfig path mappings<br>
Updating imports throughout all shared and app code to match the new xplat lib barrels<br>
Update app configurations to use the latest Nx 11 has to offer<br>
Update nx.json and workspace to clean out old retired references and update to new ones<br>
Lastly move all your shared code into the new structure<br>
Lastly do a full clean of your workspace to ensure you're in good updated shape now:</p>
<h3>UPGRADE LINKS</h3>
<ul>
<li><a href="https://update.angular.io">https://update.angular.io</a></li>
<li><a href="https://github.com/angular/angular-cli#updating-angular-cli">https://github.com/angular/angular-cli#updating-angular-cli</a></li>
<li><a href="https://blog.angular.io/version-6-of-angular-now-available-cc56b0efa7a4">https://blog.angular.io/version-6-of-angular-now-available-cc56b0efa7a4</a></li>
<li><a href="https://www.techiediaries.com/updating-angular-cli-projects/">https://www.techiediaries.com/updating-angular-cli-projects/</a></li>
<li><a href="https://appdividend.com/2018/10/20/how-to-update-angular-cli-to-version-7/">https://appdividend.com/2018/10/20/how-to-update-angular-cli-to-version-7/</a></li>
<li><a href="https://blog.angularindepth.com/angular-5-or-angular-6-yes-please-d71b08b5e59b">https://blog.angularindepth.com/angular-5-or-angular-6-yes-please-d71b08b5e59b</a></li>
<li><a href="https://stackoverflow.com/questions/43931986/how-to-upgrade-angular-cli-to-the-latest-version">https://stackoverflow.com/questions/43931986/how-to-upgrade-angular-cli-to-the-latest-version</a></li>
<li><a href="https://medium.com/@timdeschryver/ng-update-the-setup-2d2c54d05a0e">https://medium.com/@timdeschryver/ng-update-the-setup-2d2c54d05a0e</a> (update libs)</li>
<li><a href="http://angularjs.blogspot.fr/2017/03/angular-400-now-available.html">http://angularjs.blogspot.fr/2017/03/angular-400-now-available.html</a></li>
<li><a href="http://stackoverflow.com/questions/36597780/how-do-i-correctly-upgrade-angular-2-npm-to-the-latest-version">http://stackoverflow.com/questions/36597780/how-do-i-correctly-upgrade-angular-2-npm-to-the-latest-version</a></li>
<li><a href="http://stackoverflow.com/questions/41274341/upgrading-from-angular-2-2-3-to-2-4-0">http://stackoverflow.com/questions/41274341/upgrading-from-angular-2-2-3-to-2-4-0</a></li>
<li><a href="http://stackoverflow.com/questions/186737/whats-the-fastest-way-to-delete-a-large-folder-in-windows">http://stackoverflow.com/questions/186737/whats-the-fastest-way-to-delete-a-large-folder-in-windows</a></li>
</ul>
<h2>MONOREPO</h2>
<h3>INTRODUCTION</h3>
<p>Since NX11 The @nrwl/devkit package naming is different:</p>
<ul>
<li>builders are now executors in fact builder execute a kind of command</li>
<li>schematics are now generators in fact schematics are just a tool for code genarator automation</li>
</ul>
<p>In the workspace config file you will find different level of nested configuration, you can see the most important namings are : Projects/Targets/Tasks/Executors/Generators.<br>
- Projects are the source code in the repo.</p>
<ul>
<li>A generators (schematics in Angular) in fact schematics are just a tool for code genarator automation</li>
<li>A target (called architect in angular) is something that you can do with a project (for example, build/serve/test). A project can have many targets.<br>
- An executor (called builders in angular) is a function (with some metadata) that executes a command, indeed it tells Nx what to do when you run say nx test lib. The metadata piece is crucial. This is what tells Nx how to validate params and set defaults, what to cache, and so forth.</li>
<li>A task is an invocation of a target. If you invoke the same target twice, you create two tasks.</li>
</ul>
<h3>LIBS</h3>
<ul>
<li>configurable (ts config, strict checks)</li>
<li>reusable (can be used in multiple projecs)</li>
<li>buildable (or not, if yes build is cacheable)</li>
<li>cacheable (or not, lint, test, build is cacheable)</li>
</ul>
<h3>INSTALL</h3>
<pre><code>nvm install 12.16.1 # install the latest npm using nvm
npm install -g @nrwl/cli # install the latest nrwl cli using npm
node -v # check that the good version of node is selected
npx create-nx-workspace@latest my-project # init the repo
</code></pre>
<h3>ADD ANGULAR</h3>
<pre><code>npm install --save-dev @nrwl/angular # add angular capability
npm install --save-dev @nstudio/xplat # add xplat capability
nx g @nrwl/angular:app my-project/my-app # or just ng g myapp if angular default
nx g @nstudio/xplat my-project/my-app # or just ng g myapp if xplat default
nx update @angular/core # or ng update @angular/core
nx migrate @nrwl/workspace@x.x.x # better to use migrate instead of update
</code></pre>
<h3>ADD SCULLY</h3>
<pre><code>nx add @scullyio/init # todo run inside the project path
nx add @scully/init:install -- --project=&#x3C;projectName> # or run from root
ng generate @scullyio/init:blog # create a blog module with scully
</code></pre>
<h3>START</h3>
<pre><code>nvm use v12.16.1 # select the good version of node
nx serve my-project-my-app # start the new project
</code></pre>
<h3>BUILD&#x26;SERVE</h3>
<pre><code>npm run build # Angular build
npm run scully -- --scanRoutes # generate static build and force checking new routes
npm run scully:serve -- --scanRoutes # serve static build and force checking new routes
npm run scully serve # serve the scully results
</code></pre>
<h3>BUILD&#x26;SERVE (+WATCH)</h3>
<pre><code>ng build --watch
npm run scully -- --watch
</code></pre>
<h3>RESOURCES</h3>
<ul>
<li><a href="https://nx.dev/angular/getting-started/getting-started">https://nx.dev/angular/getting-started/getting-started</a></li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console">https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console</a></li>
<li><a href="https://medium.com/mean-fire/nx-nrwl-ionic-1baf3a43db74">https://medium.com/mean-fire/nx-nrwl-ionic-1baf3a43db74</a></li>
<li><a href="https://github.com/Bielik20/nx-mean-starter/commit/aacbfa66dbd6465a0e0087fe6dcccd1b805619c3">https://github.com/Bielik20/nx-mean-starter/commit/aacbfa66dbd6465a0e0087fe6dcccd1b805619c3</a></li>
<li><a href="https://medium.com/@gregor.woiwode/how-to-setup-jest-in-an-ionic-4-project-ff1e5b72dd79">https://medium.com/@gregor.woiwode/how-to-setup-jest-in-an-ionic-4-project-ff1e5b72dd79</a></li>
</ul>
<h3>BEST PRACTICES</h3>
<ul>
<li>The libs must be split in two part: data-access-namefeature and feature-shell-namefeature. The data-access-namefeature will probably export via the barrel file the models, services, ngrx selectors... On the contrary the feature-shell-namefeature should not export that much except the module itself.<br>
best practices:</li>
<li>keep the files architecture flat and the app folder bare as much as possible.- dep-graph trace dependencies graphes between apps and libs. The graph is created using the angular/workspace.json and the nx.json configurations however it's not linked to your typescript alias path configuration so feel free to adapt a bit the aliast path to your need.</li>
<li>ts alias path: You can customize your alias path even if they have been generated by NX by default. This will not impact the dependency graph or any NX feature. For instance if you have lazy modules in a shared library (used by the main bundle) and you follow the recommended barrel files for exposing all your files then you will not be able to load those lazy modules lazily, in fact they will be included in the main bundle by webpack because with the barrel import everything is grouped at the same place. So in this case you must add another alias path for each lazy module inside the shared library This is just an exemple but it's not recommended to do that, indeed at this time it's better to extract your lazy module in a domain library. But again your domain library can have multiple lazy modules and with the barrel import all those modules will be grouped so again if you want to keep them independant you will need to have one alias path for each however if you want to group them and load only one big the barrel import by default is the right solution. </li>
<li>nx-enforce-module-boundaries is a linting verification that help to protect access to your libraries. Indeed when you create libraries, especially lazy loaded libraries it's important that no others apps or libraries inside the monorepository can access them except by using the barrel import. So if you try to import any file by a relative or absolute path you will get the following error: nx-enforce-module-boundaries libraries cannot be imported by a relative or absolute path, and must begin with a npm scope</li>
<li>remove an unused NX library automatically with the schematics command: ng g @nrwl/workspace:remove project-name</li>
<li>run commands is a NX builder, it's the perfect tool to turn any command line into an executor command, you can chain multiple commands directly here and</li>
</ul>
<h3>AFFECTED</h3>
<p>NX affected work by default comparing the code affected between the current state and the latest commit in the master branch, it's possible to change the base branch and the head. however there are other special behavior for instance when you pass uncommited or untracked of a files list in input then it works using this file list</p>
<h3>REUSABLE LIB (WIP)</h3>
<ul>
<li>In the specific app: develop components that will be injected with this.router.resetConfig</li>
<li>In the same generic lib: use the ng-content to integrate visual components</li>
<li>In the same generic lib: create a specific module + routing (in app or lib) </li>
<li>In a new specific lib: import the generic lib and add the specific behavior</li>
</ul>
<p>To try:</p>
<ul>
<li>Create a factory for routing and switching components</li>
<li>Create an injection token and pass specific components/routing through it</li>
<li>Use a third parties lib to dynamically instantiate components</li>
</ul>
<h2>LINTING</h2>
<pre><code>npx mrm lint-staged
rm .git/hooks/pre-commit
npx husky
npm rebuild
</code></pre>
<h2>SECONDARY ENTRY POINTS</h2>
<ul>
<li><a href="https://github.com/nrwl/nx/issues/3518">https://github.com/nrwl/nx/issues/3518</a></li>
<li><a href="https://github.com/nrwl/nx/issues/5952">https://github.com/nrwl/nx/issues/5952</a></li>
<li><a href="https://github.com/ng-packagr/ng-packagr/issues/987">https://github.com/ng-packagr/ng-packagr/issues/987</a></li>
<li><a href="https://github.com/nrwl/nx/issues/5952#issuecomment-998039783">https://github.com/nrwl/nx/issues/5952#issuecomment-998039783</a></li>
<li><a href="https://izifortune.com/multiple-packages-repository-with-angular/">https://izifortune.com/multiple-packages-repository-with-angular/</a></li>
<li><a href="https://github.com/ng-packagr/ng-packagr/blob/main/docs/secondary-entrypoints.md">https://github.com/ng-packagr/ng-packagr/blob/main/docs/secondary-entrypoints.md</a></li>
<li><a href="https://techmark.pk/multiple-entry-points-for-the-ngxsimplecharts-angular-library/">https://techmark.pk/multiple-entry-points-for-the-ngxsimplecharts-angular-library/</a></li>
<li><a href="https://medium.com/tunaiku-tech/creating-secondary-entry-points-for-your-angular-library-1d5c0e95600a">https://medium.com/tunaiku-tech/creating-secondary-entry-points-for-your-angular-library-1d5c0e95600a</a></li>
<li><a href="https://stackoverflow.com/questions/65538963/service-is-not-under-rootdir-in-angular-secondary-entry-point">https://stackoverflow.com/questions/65538963/service-is-not-under-rootdir-in-angular-secondary-entry-point</a></li>
</ul>
<h2>HTTP POST PARAMS</h2>
<ul>
<li><a href="https://forum.ionicframework.com/t/http-post-not-sending-data/47452/6">https://forum.ionicframework.com/t/http-post-not-sending-data/47452/6</a></li>
<li><a href="http://michael.laffargue.fr/blog/2016/04/17/angularjs2-send-http-post-request-with-parameters-to-php/">http://michael.laffargue.fr/blog/2016/04/17/angularjs2-send-http-post-request-with-parameters-to-php/</a></li>
<li><a href="https://auth0.com/blog/angular-2-series-part-3-using-http/">https://auth0.com/blog/angular-2-series-part-3-using-http/</a></li>
<li><a href="https://www.barbarianmeetscoding.com/blog/2016/04/02/getting-started-with-angular-2-step-by-step-6-consuming-real-data-with-http/">https://www.barbarianmeetscoding.com/blog/2016/04/02/getting-started-with-angular-2-step-by-step-6-consuming-real-data-with-http/</a></li>
</ul>
<h2>REDUX / NGRX</h2>
<h3>Summary</h3>
<ul>
<li>store.dispatch = trigger an action</li>
<li>store.select = get current state</li>
<li>effects = async task like http request</li>
<li>reducer = switch where state is updated</li>
</ul>
<h3>New projects</h3>
<ul>
<li>When you start a new project consider enabling all the runtime checks:</li>
<li><a href="https://ngrx.io/guide/store/configuration/runtime-checks">https://ngrx.io/guide/store/configuration/runtime-checks</a></li>
</ul>
<pre><code>runtimeChecks: {
  strictStateImmutability: true,
  strictActionImmutability: true,
  strictStateSerializability: true,
  strictActionSerializability: true,
  strictActionWithinNgZone: true
}
</code></pre>
<h3>Cycle</h3>
<ul>
<li>dispatch action -> effect -> success/failure action -> reducer pattern.</li>
</ul>
<h3>Issues</h3>
<ul>
<li>The root of the problem is that once you fire an Action you’re completely disconnected from the lifecycle of that action (</li>
</ul>
<ol>
<li>Effects<br>
Ngrx/effects is middleware for handling side effects in ngrx/store. It listens for dispatched actions in an observable stream, performs side effects, and returns new actions either immediately or asynchronously. The returned actions get passed along to the reducer.</li>
</ol>
<h3>Pitfalls</h3>
<ol>
<li>Bloated stores: not everything must be in the store. How to determine if it should go in the store:(SHARI: Shared, Hydrated, Available, Retrieved, Impacted) (DUGSA: Dependent, Unique, Global, Serializable, Atomic)</li>
<li>Too few selectors: will get harder to test and instead of building selectors you maybe duplicate a lot of data in the store. You must compose selectors.</li>
<li>Common-based actions: create and reuse a base action instead of creating all actions from scratch</li>
<li>Effects dominos: actions which trigger effect which trigger action which trigger effect...</li>
<li>Selector-based effects: do no trigger async things using a selector as a trigger... you will not have any way to understand what is going on.</li>
<li>Overly smart conponents: instead of waiting actions success in your components, you should use the state instead, also think you can do router in your effects, you can trigger toaster from your effects</li>
<li>Large effects are problematic: When you're deciding where to re-allocate business logic put it (in priority order: (1. In external pure function > 2. In a selector > 3. In a service > 4. In an effect)): Selectors are easier to test and easier to understand. Services are slightly harder in both categories. Effects are the hardest of all. Only put code there that absolutely needs to go there (asynchronous call for instance).</li>
</ol>
<h3>Tips</h3>
<ol>
<li>Don't forget to release when you use a selector with parameter, you can eventually release in the effect when you get a new value. ex: </li>
</ol>
<ul>
<li>selectTotal(state); // returns the memoized value of 8</li>
<li>selectTotal.release(); // memoized value of selectTotal is now null</li>
</ul>
<ol start="2">
<li>Split nested data apart for store: split directly in service or effect or helper functions</li>
<li>Use NgRx Entity if you load data from api and you are dealing with array of objects. You will get many utility functions. ex: find by id, fast shortcuts like that...</li>
<li>Use NgRx Data if you have a very big app with many entities (+40).</li>
<li>Use NgRx Entity Schematic to skaffold entities with actions, effects, reducer, model, service, and passing specs.</li>
</ol>
<h3>Components</h3>
<p>So @ngrx/component (and partly @ngrx/component-store) are all about leveraging the observable as the primary means of change detection in Angular apps. The goal is to enable fully reactive Angular applications to run without Zone.js. Right now we accomplish this with two APIs:</p>
<ul>
<li>
<p>observable$ | ngrxPush is a drop-in replacement for the async pipe. ngrxPush pipe will run change detection for you when the provided observable emits. It also handles errors a little more gracefully than the async pipe. Unlike the Angular async pipe it triggers change detection and rendering ONLY in the very component where the change got introduced, and the child components effected by the change.</p>
</li>
<li>
<p><em>ngrxLet="observable$ as value" is an alternative for </em>ngIf="observable$ | async as value" that handles falsey values correctly, lets you handle errors, and also runs change detection when the provided observable emits.</p>
</li>
<li>
<p>*ngIf="state$ | async as vm" (old syntax)</p>
</li>
<li>
<p>*ngrxLet="state$ as vm" (no typing at the moment)</p>
</li>
<li>
<p>*ngIf="state$ | ngrxPush as vm" (no typing at the moment)</p>
</li>
<li>
<p>*ngrxLet="state$; let vm" (typing work)</p>
</li>
</ul>
<h2>PIPES</h2>
<p><code></code><br>
{{ asyncGreeting | async }</p>
<p>{{ birthday | date:'shortTime' }} &#x3C;!-- will display '3:30 PM' --<br>
{{ article.date() | date:'medium'}}<br>
{{ birthday | date:'longDate' }} <br>
{{ birthday | date:'dd/MM/yyyy' }}</p>
<p>{{ ponies | json }}<br>
{{ ponies | slice:0:2 | json }<br>
{{ 'Ninja Squad' | uppercase }}<br>
{{ 'Ninja Squad' | lowercase }}<br>
{{ 12345 | number:'.2' }			<br>
{{ 12345.13 | number:'.1-1' }} <br>
{{ 0.8 | percent }} <br>
{{ 0.8 | percent:'.3' }} <br>
{{ 10.6 | currency:'EUR' } <br>
<code></code></p>
<h2>DIRECTIVES</h2>
<h3>ANGULAR DIRECTIVES</h3>
<p>ngTemplate</p>
<p>Welcome {{user?.name}} </p>
<p>ngIf </p>
<h2>DECORATORS</h2>
<ul>
<li>@HostListener() function decorator allows you to handle events of the host element in the directive class. For example, it can be used to change the color of the host element if you hover over the host element with the mouse.</li>
<li>@HostBinding() function decorator allows you to set the properties of the host element from the directive class. In this directive class, we can change any style property like height, width, color, margin, border, etc.</li>
</ul>
<h2>LIFECYCLE</h2>
<p>• ngOnChanges sera la première appelée quand la valeur d’une propriété bindée est modifiée. Elle recevra une map changes, contenant les valeurs courante et précédente du binding, emballées dans un SimpleChange. Elle ne sera pas appelée s’il n’y a pas de changement.<br>
• ngOnInit sera appelée une seule fois après le premier changement (alors que ngOnChanges est appelée à chaque changement). Cela en fait la phase parfaite pour du travail d’initialisation, comme son nom le laisse à penser.<br>
• ngOnDestroy est appelée quand le composant est supprimé. Utile pour y faire du nettoyage.<br>
• ngDoCheck est légèrement différente. Si elle est présente, elle sera appelée à chaque cycle de détection de changements, redéfinissant l’algorithme par défaut de détection, qui inspecte les différences pour chaque valeur de propriété bindée. Cela signifie que si une propriété au moins est modifiée, le composant est considéré modifié par défaut, et ses enfants seront inspectés et réaffichés. Mais tu peux redéfinir cela si tu sais que la modification de certaines entrées n’a pas de conséquence. Cela peut être utile si tu veux accélérer le cycle de détection de changements en n’inspectant que le minimum, mais en règle générale tu ne devrais pas avoir à le faire.<br>
• ngAfterContentInit est appelée quand tous les bindings du composant ont été vérifiés pour la première fois.<br>
• ngAfterContentChecked est appelée quand tous les bindings du composant ont été vérifiés, même s’ils n’ont pas changé.<br>
• ngAfterViewInit est appelée quand tous les bindings des directives enfants ont été vérifiés pour la première fois.<br>
• ngAfterViewChecked est appelée quand tous les bindings des directives enfants ont été vérifiés,<br>
même s’ils n’ont pas changé. Cela peut être utile si ton composant attend quelque chose de ses composants enfants. Comme ngAfterViewInit, cela n’a de sens que pour un composant (une directive n’a pas de vue).</p>
<p>EXAMPLE</p>
<pre><code class="language-javascript">export class App implements OnInit, AfterViewInit, AfterContentInit {
  @Input() myInput: string;
  @ViewChild() myTemplate: TemplateRef&#x3C;any>;
  @ContentChild(ChildComponent) myComponent: ChildComponent;

  constructor(private elementRef: ElementRef) {
     // this.elementRef.nativeElement is undefined here
     // this.myInput is undefined here
     // this.myTemplate is undefined here
     // this.myComponent is undefine here
  }

  ngOnInit() {
     // this.elementRef.nativeElement can be used from here on
     // value of this.myInput is passed from parent scope
     // this.myTemplate and this.myComponent are still undefined
  }
  ngAfterContentInit() {
     // this.myComponent now gets projected in and can be accessed
     // this.myTemplate is still undefined
  }

  ngAfterViewInit() {
     // this.myTemplate can be used now as well
  }
}
</code></pre>
<h2>API</h2>
<p>ViewChild and ContentChild are two very important features of Angular. It is used to access Child Component in the Parent Component.</p>
<p>Any directive, component, and element which is part of component template is accessed as ViewChild. Whereas, any element or component which is projected inside is accessed as ContentChild for instance when using ng-content. In case if you project a list of components using ngFor you can still access the ContentChild using the type QueryList. You can then access it in the ngAfterContentInit hook.</p>
<h2>ANGULAR DOM</h2>
<p>Angular Suggests to use its own Renderer2 API instead of Native DOM Manipulations because it will make your app compatible with different rendering method such as Server Side Rendering (Angular Universal). In addition to that it's for a security question.</p>
<ul>
<li><a href="https://dzone.com/articles/4-common-bugs-in-angular-and-how-to-fix-them">https://dzone.com/articles/4-common-bugs-in-angular-and-how-to-fix-them</a></li>
</ul>
<p>private _renderer2:Renderer2</p>
<p>avoidAngularBugs(){<br>
this._renderer2.setElementProperty(this._elementRef,'add-property-here',true);<br>
}</p>
<h2>FORM</h2>
<ul>
<li>Template-driven (FormsModule) most of the logic is driven from the template</li>
<li>Reactive-driven (ReactiveFormsModule)  the logic resides mainly in the component or typescript code. </li>
</ul>
<h2>ANGULAR BROWSER TESTING</h2>
<ul>
<li>Playwright and Cypress are very efficient tools for e2e. At the beginning to see how it goes you can start testing the app using real backend request for the GET requests and using mock for the other methods (POST,PATCH, DELETE) so you dont modify the state of the database</li>
<li>More info on test end to end (see utils-testing.md OR book ninja angular page 157)</li>
</ul>
<h2>ANGULAR UNIT TESTS GENERIC</h2>
<ul>
<li>Jest is faster compared to Karma because it does not run on a real browser instead it uses jsdom. It's not testing the rendering (html/css) but just the dom tree. So there is a potential risk that jsdom differs from your targetted browser.</li>
<li>Karma is slower compared to Jest because is testing using a real browser so the unit test are certainly working as expected in a real browser.</li>
</ul>
<p>In the context of a large application with a lot of tests we need a quick tool so Jest seem adapted, the html rendering will then be tested with e2e tests.</p>
<p>In unit test there are different way of simulating a function or an object : Spy, Mock... The difference is that in mock, you are creating a complete mock or fake object while in spy, there is the real object and you just spying or stubbing specific methods of it. While in spy objects, of course, since it is a real method, when you are not stubbing the method, then it will call the real method behavior. When stubbing you can create a dynamic responsive and return a different response depending on the call.</p>
<p>A stub is also a dummy class providing some more specific, prepared or pre-recorded, replayed results to certain requests under test. ... A spy is kind of a hybrid between real object and stub, i.e. it is basically the real object with some (not all) methods shadowed by stub methods</p>
<h3>UNIT TESTS: STRATEGY</h3>
<ul>
<li>
<p>Separate business logic from UI</p>
</li>
<li>
<p>Use more dumb components</p>
</li>
<li>
<p>Test business logic and UI separately</p>
</li>
<li>
<p>Test actions and impact on the store</p>
</li>
<li>
<p>Create custom validators for forms</p>
</li>
<li>
<p>Services (NgRx effects, business logic, sandboxes/facades) - unit test, 100% coverage</p>
</li>
<li>
<p>Pure functions (Pipes and helpers) - unit test, 100% coverage</p>
</li>
<li>
<p>Container component - integration tests, happy paths</p>
</li>
</ul>
<h3>UNIT TESTS: TYPE OF TESTS</h3>
<p>my-comp.ui.spec.ts<br>
my-comp.io.spec.ts<br>
my-comp.bu.spec.ts</p>
<h3>UNIT TESTS: BASICS</h3>
<ul>
<li>
<p>To test a component javascript code only you can create a new MyComponent() directly in the spec but a component is not only js code; The component truly is the template and the class working together, that's why the framework has a fixture = TestBed.createComponent(MyComponent) used to create a fixture (the mount test harness instance of class and template) where you can get the class instance with component = fixture.componentInstance and also can get the html element template instance with element = fixture.nativeElement;</p>
</li>
<li>
<p>overrideComponent can be useful in various cases:</p>
</li>
<li>
<p>for instance you can do set: { template: '{{message}}' } so you can test your component with a simpler template compared to the original</p>
</li>
<li>
<p>for instance you can do set: { providers: [{ provide: MyService,useValue: mockService }] } so you can inject services scoped to component injectors, that is to say provided in the component and not in the root injector like singleton services. This is especially useful when you are using standalone components, then you can get the fixture.debugElement.injector.get(MyService);</p>
</li>
</ul>
<h3>UNIT TESTS: ELEMENTS CHEATSHEET</h3>
<ul>
<li>for complex element assertion use the third parties libraries: </li>
<li>testing-library/jest-dom / testing-library/angular-testing-library</li>
</ul>
<pre><code class="language-javascript">// example to check the element is in the dom
expect(fixture.debugElement.query(By.css('#example1'))).toBeTruthy();
// example to check the element is not in the dom
expect(fixture.debugElement.query(By.css('#example1'))).toBeFalsy();
// example to check the text of an element
expect(fixture.debugElement.query(By.css('#example1')).nativeElement.textContent.trim()).toBe('text');
// example to check class is there with testing-library/jest-dom
expect(fixture.debugElement.query(By.css('#example1')).nativeNode).toHaveClass('the-class');
// example to check class is not there with testing-library/jest-dom
expect(fixture.debugElement.query(By.css('#example1')).nativeNode).not.toHaveClass('the-class');
</code></pre>
<h3>UNIT TESTS: TESTBED CHEATSHEET</h3>
<h4>UNIT TESTS: DEPENDENCIES IN SERVICES</h4>
<ul>
<li>if you need a real dependency implementation in your test injected from the root injector then use TestBed.inject. exemple: dateService = TestBed.inject(DateService);</li>
</ul>
<pre><code class="language-javascript">// get the providedIn: "root" (application singletons) 
// mocked via configureTestingModule({providers: [ MyService ] })
let svc1 = TestBed.get(MyService);
</code></pre>
<h4>UNIT TESTS: DEPENDENCIES IN COMPONENTS</h4>
<ul>
<li>if you need a real dependency implementation in your test injected from the component injector then use the debugElement. exemple: dateService = fixture.debugElement.injector.get(DateService) gets the service that is actually injected into the component:</li>
</ul>
<pre><code class="language-javascript">// get the providedIn: "local" (component scoped) 
// mocked via overrideComponent(set: { providers: [{ provide: MyService,useValue: mockService }] })
let svc2 = fixture.debugElement.injector.get(MyService);
</code></pre>
<h4>UNIT TESTS: DEPENDENCIES MOCKING</h4>
<ul>
<li>Mock components with ng-mocks (MockComponent) and add them to the declarations in TestBed/spectator factory</li>
<li>Mock services/guards/resolvers with mocks property in Spectator factory/createSpyObject</li>
<li>Mock directives using ng-mocks (MockDirective)</li>
<li>Mock pipes with ng-mocks (MockPipe)</li>
<li>Mock ngrx/store with provideMockStore</li>
<li>Mock ngrx/selectors with store.overrideSelector</li>
</ul>
<h3>UNIT TESTS: LINKS</h3>
<ul>
<li><a href="https://angular.io/guide/testing">https://angular.io/guide/testing</a></li>
<li><a href="http://blog.soat.fr/2018/02/tests-unitaires-avec-angular-partie-1/">http://blog.soat.fr/2018/02/tests-unitaires-avec-angular-partie-1/</a></li>
<li><a href="http://blog.soat.fr/2018/02/tests-unitaires-avec-angular-partie-2/">http://blog.soat.fr/2018/02/tests-unitaires-avec-angular-partie-2/</a></li>
<li><a href="https://codecraft.tv/courses/angular/unit-testing/angular-test-bed/">https://codecraft.tv/courses/angular/unit-testing/angular-test-bed/</a></li>
<li><a href="https://this-is-angular.github.io/angular-guides/docs/standalone-apis/testing-a-standalone-component-using-the-angular-testbed">https://this-is-angular.github.io/angular-guides/docs/standalone-apis/testing-a-standalone-component-using-the-angular-testbed</a></li>
<li><a href="https://stackoverflow.com/questions/40126729/angular-2-testing-async-function-call-when-to-use">https://stackoverflow.com/questions/40126729/angular-2-testing-async-function-call-when-to-use</a></li>
<li><a href="https://stackoverflow.com/questions/40432734/angular-2-jasmine-error-please-call-testbed-compilecomponents-before-your">https://stackoverflow.com/questions/40432734/angular-2-jasmine-error-please-call-testbed-compilecomponents-before-your</a></li>
<li><a href="https://stackoverflow.com/questions/48789289/how-to-reuse-all-imports-in-angular-test-files">https://stackoverflow.com/questions/48789289/how-to-reuse-all-imports-in-angular-test-files</a></li>
<li><a href="https://github.com/ngx-translate/core/issues/636">https://github.com/ngx-translate/core/issues/636</a></li>
<li><a href="https://github.com/ngx-translate/example/blob/master/src/app/app.component.spec.ts">https://github.com/ngx-translate/example/blob/master/src/app/app.component.spec.ts</a></li>
</ul>
<h2>MODULES</h2>
<ul>
<li>App module: it's the root module used to bootstrap the application. There should not be a lot of content because we must encapsulate features into domain-specific modules.</li>
<li>Core module: app-level components like header, footer, breadcrumb, navigation and singleton services. This module should be imported once in app module and the module should not export anything because only the core use those components.</li>
<li>Shared module: shared components, directives, guards, &#x26; pipes used throughout the application must be inside this module and exported to be able to be used by others modules which are importing it. It's common to import and export Angular built modules, Common Module or Material module inside your Shared Module if you really need to access them in multiple locations like in many Feature modules.</li>
<li>Feature module: Breaking things up into domain-specific lazy loaded modules will help run in the long term. Those modules must be isolated and export nothing except the module itself for doing the lazyloading.</li>
</ul>
<h3>Benefits of lazy modules</h3>
<ul>
<li>faster rebuilds in dev mode</li>
<li>feature isolation/guarantees</li>
<li>faster application boot time</li>
</ul>
<h3>One shared module</h3>
<ul>
<li>If we put all shared pipes, directives and common components in one big shared module and then import it everywhere (inside sync and async chunks) then that code will be in our initial main chunk. So if you want to get a bad initial load performance then it’s the way to go.</li>
</ul>
<h3>Multiple shared modules</h3>
<ul>
<li>On the other hand, if we split commonly used code across lazy loaded modules then a new shared chunk will be created and will be loaded only if any of those lazy modules are loaded. This should improve the application initial load. But do it wisely because sometimes it’s better to put small code in one chunk that having the extra request needed for a separate chunk load.</li>
</ul>
<h3>Shared modules part</h3>
<ul>
<li>Shared modules will be imported by many lazy loaded features so they must only contain declarables (components, directives and pipes) and modules (which only contain declarables) and must NEVER implement any services (providers: [ ]).</li>
</ul>
<h3>Module configuration</h3>
<h4>Declarations</h4>
<p>The declarations array only takes declarables. Declarables are components, directives and pipes. Declarables must belong to exactly one module else the compiler emits an error. Declarables are private by default so they can be used only in the template of any component that is part of this same NgModule, if you want to use it outside you must uses the export array. Pipes is a special case. must also be added to the providers array if you use transform function in a component template or if you want to use inject it via a constructor. You can also instead provide your pipe locally to the component or else use the providedIn 'root' if you want to share it globally.</p>
<h4>Imports</h4>
<p>Other modules whose exported classes are needed by component templates declared in this NgModule. Basically this is useful in order to use declarables that are exported in others modules. For instance if ModuleA imports ModuleB then ModuleA will be allowed to use any declarable exported by ModuleB.</p>
<h4>Exports</h4>
<p> The subset of declarations that should be visible and usable in the component templates of other NgModules. It means that a template external to this module can use exported declarables from any imported module. For instance if you want to use in your app template a modal component declared in a modal module then this modal component should be declared and exported in your modal module first and of course modal module should be imported in your app module. Also another more complex case is the indirect principles made possible by exporting a whole module instead of a single declarable. Indeed if ModuleA imports ModuleB, and also exports it, this makes the declarables from ModuleB available wherever ModuleA is imported.</p>
<h4></h4>
<h3>Dependency injection (DI)</h3>
<p>Injectors are inherited, which means that if a given injector can't resolve a dependency, it asks the parent injector. A component/directives can get services from its own injector, from the injectors of its component ancestors, from the injector of its parent NgModule, or from the root injector (created from the app module).</p>
<h3>Types</h3>
<ul>
<li>
<p>Tree-shaking services are possible by using the providedIn: 'root', 'platform', 'any', like that if the service is never injected it will be removed of the bundle at compilation.</p>
</li>
<li>
<p>Core services (not lazy) must be in the core folder and can declared either in the providers: [ ] array of the core module or better by using the providedIn: 'root' syntax from their @Injectable() decorators and then can be used in all kind of modules (lazy or not) without putting them in providers: [ ] array of any other module.</p>
</li>
<li>
<p>Shared services (shared by multiple lazy or core modules) if you put your services inside the provider array of the shared module and then use shared like its intented to use in multiple lazy modules then every lazy loaded module would get its own service instance and not the intented singleton. In this case (only for shared modules) you can also use forRoot/forChild with providers that are going to be imported into both eager and lazy module modules.</p>
</li>
<li>
<p>Feature services (lazy module) can be scoped to that feature by removing the providedIn: 'root' from their @Injectable() decorators and adding them to the providers: [ ] array of the lazy feature module instead.</p>
</li>
<li>
<p>Component services can be scoped to that component by removing the providedIn: 'root' from their @Injectable() decorators and adding them to the providers: [ ] array of the component. The service will be available in all child components, the view child and the content child. In addition to providers you can add viewProviders array if you want to scope the same token (with different class) only for the component view itself and consequently the content children (ng-content) will use the service from the providers array defined first.</p>
</li>
<li>
<p>Shared services between multiple apps or Angular Elements. You can use the providedIn: 'platform' in order to make a service available between multiple apps or Angular Elements.</p>
</li>
<li>
<p>Non singleton services. You can use the providedIn: 'any' in order to create isolated (contrary to a singleton) services for every child injector.</p>
</li>
</ul>
<h3>Providing</h3>
<ul>
<li>Then you must understand the different kind of injection you can do, in fact you can inject either a class, a value, a factory and even more:</li>
<li>class: { provide: MyService, useClass: MyService } // It is a shortcut for MyService</li>
<li>value: { provide: MY_CONST,  useValue: "<a href="https://my.text">https://my.text</a>" } // MY_CONST must be declared as InjectionToken</li>
<li>factory: { provide: MyObs, deps: [DOCUMENT], useFactory: doThingFactory } // MyObs must be declared as InjectionToken&#x3C;Observable> and doThingFactory is a function which return the observable. You can also create your factory using the 2ng argument of InjectionToken. With useFactory you can easily switch between different implementation but with factory from InjectionToken the token is automatically provided in root so it's not modulable.</li>
<li>existing: { provide: MyInterface, useExisting: forwardRef(() => MyDirective) } // MyDirective implements MyInterface and so forwardRef returns a directive after its instance is created</li>
</ul>
<h3>Decorators</h3>
<p>Those decorators below can be used to configure more precisely the injection behavior. They can be used in the constructor method or also in the deps array while providing a factory.</p>
<ul>
<li>default: inject without any decorator, looking up the injectors hierarchy...</li>
<li>self: inject using only the provider from the component itself (@Self())</li>
<li>skipSelf: inject by skipping the provider from the component itself (@SkipSelf())</li>
<li>optional: inject if is provided else return null (@Optional())</li>
<li>host: inject looking in the component itself first and if is not found there, it looks for the injector up to its host component. (@Host()). Special case with directives and content projection.</li>
</ul>
<h2>CHANGE DETECTION</h2>
<h3>Optimization</h3>
<ul>
<li>onPush and immutability</li>
<li>pipes instead of methods in template</li>
<li>caching</li>
<li>trackBy in ngFor</li>
<li>detach change detection</li>
</ul>
<h3>OnPush and immutability</h3>
<p>Only rerender template if:</p>
<ul>
<li>One of its input properties has gotten a new ref</li>
<li>An event from the component of one of is childrens (click...)</li>
<li>Explicit trigger of CD (detectChanges/markForCheck)</li>
</ul>
<p>Design for immutability :</p>
<ul>
<li>Presentational comp &#x3C;-> Container com &#x3C;-> Redux store</li>
<li>Eventually use facade in your container comp</li>
</ul>
<p>Trigger details:</p>
<ul>
<li>ChangeDetectorRef.markForCheck() to cause change detection to execute on the component itself and all ancestor components up to the root component.</li>
<li>ChangeDetectorRef.detectChanges() if state changes are local to the component and its descendants</li>
</ul>
<h3>Pipes instead of methods in template</h3>
<ul>
<li>methods gets evaluated evaluated on every tick</li>
<li>pure pipes only get evaluated on every input changes</li>
</ul>
<ol>
<li>extract to smaller components and use onPush</li>
<li>use async and custom pipes instead of template methods</li>
</ol>
<h3>Cahing</h3>
<ul>
<li>cache values from pure pipes using memoize (lodash or not)</li>
</ul>
<h3>TrackBy in ngFor</h3>
<ul>
<li>trackBy ensure that only the list element that has changed will be rerendered</li>
</ul>
<h3>Detach change detection</h3>
<ul>
<li>for heavy computation only and rerender manually</li>
<li>cdr.detach() onInit</li>
<li>cdr.detectChanges() after the computation</li>
</ul>
<h3>Others optimization</h3>
<ul>
<li>Cache static content using PWA (ng add @angular:pwa --project "project-name")</li>
<li>Normalize the store in the effect and denormalize in the selector</li>
</ul>
<h2>CODING RULES</h2>
<h3>Reactive programming</h3>
<ul>
<li>use reactive for ngrx store / effects / services</li>
<li>use reactive for async processing (cancel/batch/debounce)</li>
<li>use reactive to subscribe in container components (async / streams)</li>
<li>don't use reactive for view / presentation components</li>
<li>their interface is plain data (@input/@output)</li>
<li>eventually use ngOnChanges to get derived data</li>
</ul>
<h2>DEBUG</h2>
<h3>DEVTOOLS</h3>
<pre><code>$0 # most recent selection from the elements tabng.getComponent($0)
ng.getDirectives($0) # get directives applied to this angular component
ng.getListeners($0) # get listeners applied to this angular component
ng.applyChanges($0) # trigger change detection for this specific component
ng.getContext($0); # get context ex: are you inside ngIf or ngFor
ng.getOwningComponent($0) # parent angular component of any element
ng.getRootComponents($0)  # get root component from any element
</code></pre>
<ul>
<li>ex: Modify value in live </li>
</ul>
<pre><code>let c = ng.getComponent($0)
c.title = 'test';ng.applyChanges($0)
</code></pre>
<ul>
<li>More: <a href="https://medium.com/wizpanda/new-ways-to-debug-components-in-angular-9-e866e41ed23f">https://medium.com/wizpanda/new-ways-to-debug-components-in-angular-9-e866e41ed23f</a></li>
</ul>
<h3>PERFORMANCE</h3>
<p>chrome dev tools > performance tab > record+stop</p>
<ul>
<li>check then summary if scripting take more than 60% of the time then you found the issue, maybe change detection is triggered in a loop or maybe a function with high level of computation is triggered many times.</li>
<li>check bottom-up and call tree to understand more about the issue, you will see if there is any function from your codebase which is called many times or if the issue is due to the change detection then you will see zone.js.</li>
</ul>
<h3>CSS</h3>
<p>:host if we want to style the host element of the component itself, also useful when using ::ng-deep to makes sure that the override stay local to this component.<br>
:host-context is useful when you want to apply style to your component based on selector outside of your component, like a container or the body, html tags. One possible common use case is for theme enabling classes.<br>
::ng-deep if we want our component styles to cascade to all child elements of a component, but not to any other element on the page, we can currently do so using by combining the :host with the ::ng-deep selector:</p>
<h3>CIRCULAR DEPENDENCIES</h3>
<p>There are  different kinds of circular dependencies</p>
<ul>
<li>NX libs (via barrel import)</li>
<li>typescript files (local imports detected via madge: npx madge --circular --extensions ts ./ correctable via the index.js and internal.js pattern proposed by Michel Weststrate)</li>
<li>angular services (highlighted by the use from the barrel import, using the wildcard should hide this type) (Warning: Circular dependency detected: in terminal and console) (build.options. "showCircularDependencies": false,)</li>
</ul>
<p>Can be caused by:</p>
<ul>
<li>wrong usage of barrel imports. IE: imports inside a module must be relative and outside module must use the barrel reference</li>
<li>wrong usage of services. IE: usage inside the constructor of others services which are mutually linked.</li>
<li>wrong usage of providedIn. IE: the service must not belong to the module you want to provide it to.</li>
</ul>
<h2>BAD PRACTICES</h2>
<ul>
<li>lack of clear design pattern such as smart/dumb components results in hard to read, debug, test and maintain codebase. The smart/dumb components pattern should be used everywhere.</li>
<li>lack of application monitoring and error tracking at the beginning of the project such as sentry. It results in a tons of bugs the day you install it and you then have to work for months in order to clear the app of all the bugs.</li>
<li>lack of pure functions, the developers are used to write impure functions which are changing the state of the component variable inside the function, this results in side effects and function are not testable. It's harder to write pure function but it results in easier to maintain code.</li>
<li>lack of simple typings in objects, functions input and output, developers sometimes use any instead. if in addition you don't have unit tests then your code it's very vulnerable to errors.</li>
<li>lack of readonly and deepreadonly typings it results in unsafe code and possible mutation of any attributes in the codebase, functions will have potentially side effects.</li>
<li>lack of clear pattern for overriding the existing theme. A clear convention should be used, for instance if you want to override material, there are many different cases to know: (theming variables, overlay components, regular components...) you must check the articles written by razroo called customize angular material design.</li>
<li>lack of splitting in modules, especially lazy modules, it will results in big main bundle but also it will makes the app more and more coupled and later it will be almost impossible to split the codebase in lazy modules.</li>
<li>wrong usage of ngrx, indeed this library should be used only for a certains types of entities which are shared, hydrated, available, retrieved, impacted. That's also why in 2020 multiples new solutions emerged in order to give developers the ability to store data in a local state instead of the global ngrx state.</li>
<li>usage of ::ng-deep without :host is going to affect the css of the others components, the style isolation principle is broken, the way to avoid that is by using :host ::ng-deep. Those errors are also due to the fact that angular material must render part of the components outside of the components, that means there is a overlay panel detached which pop on top of the view, for instance when mat-select is open.</li>
<li>accumulation of circular dependencies warnings will make your app less and less maintenable. Each time you detect a circular dependencies it's recommended to take time and fix it.</li>
<li>usage of scss imports in each components produces a lot of duplicated code.</li>
</ul>
<h2>BEST PRACTICES</h2>
<ul>
<li>usage of feature toggle in environment files in order to be able to enable or disable a new features in each environment, it can be very useful if a feature is buggy or not finished.</li>
<li>usage of template to follow for the gitlab MRs + the jira tickets. Us a much as possible generic model for the processing like that the team will be used and will naturally start to follow those best practices.</li>
<li>improve the testability by making a backdoor to test all the different conditional templates in the UI.</li>
<li>test the screen with any kind of data, for instance a short text and a long text in order to check the layout responsiveness.</li>
<li>extract the conditional templates logic in a component function, for instance if you have to display a text depending on many conditions then make a switch(true) function to handle this. In some case if the template is big enough then you can use a ngSwitch in order to render different components.</li>
</ul>
<h2>JOIN AN EXISTING PROJECTS</h2>
<ul>
<li>ask for an existing bookmark links list of create my own bookmark links (envs, gitlab, jira, api, tools, perso)</li>
<li>ask which extensions are used by the team ex: vscode-gitlab + angular-essential</li>
<li>review the redux store in order to understand the data/entities of the app</li>
<li>review the routing modules in order to understand the architecture of the app</li>
<li>check all the mixin and variables scss files in order to know what should be reused</li>
<li>check all keywords such as InjectionToken, readonly, as const in order to know the current state</li>
<li>use tools such as bundle-analyzer and ngrx-vis in order to understand the current archi</li>
</ul>
<h2>MICROFRONTEND</h2>
<p>In order to communicate between multiple microfrontend initialized in a same webpage you can create a messageBus using a BehaviorSubject and attach it to the window or use the dispatchEvent already in the window object: ex: window.dispatchEvent(new CustomEvent('myCustomEvent'));</p>
<ul>
<li><a href="https://github.com/DanWahlin/angular-architecture/blob/master/demos/src/app/core/services/event-bus.service.ts">https://github.com/DanWahlin/angular-architecture/blob/master/demos/src/app/core/services/event-bus.service.ts</a></li>
</ul>
<h3>IDEAS</h3>
<ul>
<li>manage version compatibility to be sure cached shell version use the right compatible mf</li>
<li>how to detect what need to be delivered? only one mf or multiple mf or the full app: shell+mfs</li>
</ul>
<h2>JAMSTACK</h2>
<p>JamStack is a new way to build static website using javascript, apis, markups. contrary to LAMPStack everything is generated at the build time. It helps for the SEO and for the performance, loading time...</p>
<p>There is two way to develop those websites:</p>
<ul>
<li>server side rendering: do the rendering on a server, behind a cache. it's more complex and recommended only if you have very dynamic content in your page.</li>
<li>pre rendering: do the rendering at the build and then deploy static files online, it's the simpler and the easy to go solution.</li>
</ul>
<p> In angular there is 2 solutions to build those static websites: </p>
<ul>
<li>universal: official solution provided by angular </li>
<li>scully: community driven project, it's using a headless browser (puppeteer) and it's more complete and also provides also a plugin adapter.</li>
</ul>
<p>There is a new module called @angular/fire which helps to automatize the whole deployment process.</p>
<h3>SCULLY</h3>
<ul>
<li>use isScullyRunning to know if the prerendering is running, like that you can adapt different logic depending on if this is the angular app or scully rendering or static website...</li>
<li>use isScullyGenerated to know if the app has been prerendered and it's the final static angular webapp that is running. In this case you can get state from the transferState feature else the app will be in angular mode or in prerendering mode and in this case you can set the transferState by getting the data from the api...</li>
<li>ignore route using type: 'ignored' instead of type: 'contentFolder' in the scully config of the project</li>
<li>build only the route you are asking for using the command line route filter: ex: npm run scully -- --watch --routeFilter=/donuts/*</li>
<li>use state transfer to cache api data in the same server and in plain json object.</li>
<li>use the scully utility called herodevs/scully-plugin-the-vault in order to cache your api requests, for instance if two pages make the same call the api is called only once. Consequently it speed up the build time and also save resources and money.</li>
<li>the routes config make puppeteer traverses the local source only, so eventually puppeteer will not traverses routes that are lazy loaded or remote routes such as external websites, microfrontends included. You must add the route in the extraRoutes config to make puppeteer traverses routes from external sources, you can even use a slug pattern (ex: "/product/detail/:productId") if you have a dynamic routes config configured.</li>
<li>the critical css for each page must be inlined and the other part of the global css should be ideally in a regular css file. if all the page have a very similar css  it would make sense to use viewEncapsulation: 'none' on all your pages, and use a single global CSS file to be cached and reused by the browser across different pages. However, pages are very different. Each page can have its own file. The only cost is some extra disk space at your server.</li>
</ul>
<h2>TIPS</h2>
<ul>
<li>role system: use the data property in the routing to pass role restriction enum and then you can check if the user has this role (route.data.roles) in the canActivate of the guard. You can extend role feature with a dedicated ACL lib such as: CASL.</li>
<li>starting: integrate the best utils libs at the beginning of the project: casl, match-rules</li>
<li>circular dep: check the quality of you code using the various open-source tools such as: bundle-analyzer, madge... <code>madge --circular --extensions ts ./</code></li>
<li>normalize state: when there is business logic which will duplicate entities. In this case it's the right way to normalize else you can nest entities in the state because it's simpler particulary if you use an entity adapter</li>
</ul>
<h2>ERROR</h2>
<ul>
<li>you can override the default global error handler to add your custom behavior</li>
<li>try { } catch {} is only catching synchronous errors</li>
<li>asynchronous errors are catched via Zone.js error stream (setTimeout, promise.resolve...)</li>
<li>asynchronous errors in RxJS needs to be catched differently (tap to get, then catchError to set a default value and you can also throwError to propagate downstream, you can/need to catchError at different place : service and/or component or else it will goes to the global handler)</li>
<li>http errors in angular can be catched in a global interceptor where you can for instance retry 3 times before throwing the errors.</li>
</ul>
<h2>INTERVIEW</h2>
<h3>BREAKING ICE QUESTIONS:</h3>
<ul>
<li>how many different versions of angular did you use?</li>
<li>which third party libraries do you like to use?</li>
<li>did you already develop unit-tests in angular? + (which toolkit)?</li>
</ul>
<h3>OPEN QUESTIONS:</h3>
<ul>
<li>what was the most challenging thing you have had to do in Angular?</li>
<li>what was your biggest mistake in front-end development?</li>
<li>what do you like and what do you dislike in Angular?</li>
</ul>
<h3>TECHNICAL QUESTIONS:</h3>
<ul>
<li>can you describe what is reactive programming (rxjs/observable)?</li>
<li>can you describe what is redux (ngrx)?</li>
<li>can you describe what is typescript?</li>
</ul>
<h3>CLOSED QUESTIONS:</h3>
<ul>
<li>what are the different values possible for the position property in css?</li>
<li>what are the different values possible for the display property in css?</li>
<li>whats is the immutability in javascript?</li>
<li>what is the spread operator in javascript?</li>
<li>what is the destructuring in javascript?</li>
</ul>
<h3>TEST</h3>
<ul>
<li><a href="https://github.com/cloudnc/frontend-interview">https://github.com/cloudnc/frontend-interview</a></li>
<li><a href="https://github.com/Yonet/Angular-Interview-Questions">https://github.com/Yonet/Angular-Interview-Questions</a></li>
<li><a href="https://github.com/danieldelcore/mega-interview-guide">https://github.com/danieldelcore/mega-interview-guide</a></li>
<li><a href="https://github.com/sudheerj/angular-interview-questions">https://github.com/sudheerj/angular-interview-questions</a></li>
<li><a href="https://github.com/yangshun/front-end-interview-handbook">https://github.com/yangshun/front-end-interview-handbook</a></li>
<li><a href="https://github.com/armankhondker/best-leetcode-resources">https://github.com/armankhondker/best-leetcode-resources</a></li>
<li><a href="https://github.com/learning-zone/angular-interview-questions">https://github.com/learning-zone/angular-interview-questions</a></li>
<li><a href="https://dev.to/mokkapps/my-top-angular-interview-questions-237h">https://dev.to/mokkapps/my-top-angular-interview-questions-237h</a></li>
</ul>