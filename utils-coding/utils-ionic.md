<h1>IONIC</h1>
<h2>BEST PRACTICES</h2>
<ul>
<li><a href="https://devdactic.com/10-ionic-problems/">https://devdactic.com/10-ionic-problems/</a></li>
</ul>
<h2>LINKS</h2>
<p><a href="https://apps.ionic.io/apps">https://apps.ionic.io/apps</a><br>
<a href="http://ionicframework.com/docs/">http://ionicframework.com/docs/</a></p>
<h2>GENERAL</h2>
<p>component : <a href="http://ionicframework.com/docs/v2/components/#overview">http://ionicframework.com/docs/v2/components/#overview</a><br>
sample : <a href="https://github.com/driftyco/ionic-conference-app">https://github.com/driftyco/ionic-conference-app</a><br>
events : <a href="https://github.com/driftyco/ionic/blob/master/demos/src/events/app.component.ts">https://github.com/driftyco/ionic/blob/master/demos/src/events/app.component.ts</a><br>
events : <a href="http://ionicframework.com/docs/v2/api/util/Events/">http://ionicframework.com/docs/v2/api/util/Events/</a><br>
lifecycle : <a href="https://saniyusuf.com/ionic-by-component-page-lifecycle/">https://saniyusuf.com/ionic-by-component-page-lifecycle/</a><br>
lifecycle : <a href="http://blog.ionic.io/navigating-lifecycle-events/">http://blog.ionic.io/navigating-lifecycle-events/</a></p>
<h3>UI</h3>
<ul>
<li><a href="https://ionicframework.com/docs/v2/ionicons/">https://ionicframework.com/docs/v2/ionicons/</a> </li>
<li><a href="http://ionicframework.com/docs/v2/theming/overriding-ionic-variables/">http://ionicframework.com/docs/v2/theming/overriding-ionic-variables/</a> </li>
</ul>
<h3>CLI</h3>
<ul>
<li><a href="http://ionicframework.com/docs/cli">http://ionicframework.com/docs/cli</a></li>
</ul>
<h4>CLI GENERAL</h4>
<pre><code>ionic start cutePuppyPics --v2                  > start new project   
cd cutePuppyPics                                             
ionic serve                                     > test web project 
ionic serve --lab                               > test web and simulate android/ios mobile
ionic serve -- --hmr                            > enable HMR with Angular11
ionic platform add android                      > add android platform to project 
ionic platform add browser                      > add browser platform to project 
ionic info 

ionic run android                               > run project on android device 
ionic run android --prod                        > run project on android device + minify 
ionic run android --prod --release              > run project on android device + minify + certificate
ionic build browser --prod
</code></pre>
<h4>CLI REAL DEVICE</h4>
<p>ionic emulate ios --livereload --consolelogs --serverlogs<br>
ionic emulate android --livereload --consolelogs --serverlogs</p>
<p>ionic run ios -l -c -s<br>
ionic run android -l -c -s<br>
ionic run android -c</p>
<h4>CLI GENERATE</h4>
<pre><code>ionic g page login 
ionic g provider MyData 
ionic g directive ElasticHeader
ionic g directive textHolderPipe
</code></pre>
<h4>CLI NEW COMPUTER</h4>
<pre><code>ionic state save
ionic state restore
</code></pre>
<h3>PUSH NOTIFICATIONS</h3>
<ul>
<li><a href="https://docs.ionic.io/services/push/">https://docs.ionic.io/services/push/</a> </li>
<li><a href="https://medium.com/@ankushaggarwal/push-notifications-in-ionic-2-658461108c59#.l7dh5evsv">https://medium.com/@ankushaggarwal/push-notifications-in-ionic-2-658461108c59#.l7dh5evsv</a> </li>
<li><a href="https://documentation.onesignal.com/docs/ionic-sdk-setup">https://documentation.onesignal.com/docs/ionic-sdk-setup</a></li>
<li><a href="https://documentation.onesignal.com/docs/generate-an-ios-push-certificate">https://documentation.onesignal.com/docs/generate-an-ios-push-certificate</a></li>
<li><a href="https://ionicframework.com/docs/v2/native/onesignal/">https://ionicframework.com/docs/v2/native/onesignal/</a></li>
<li><a href="http://www.codingandclimbing.co.uk/blog/ionic-2-setup-push-notifications-for-android-with-onesignal-17">http://www.codingandclimbing.co.uk/blog/ionic-2-setup-push-notifications-for-android-with-onesignal-17</a></li>
<li><a href="https://documentation.onesignal.com/docs/customize-notification-icons">https://documentation.onesignal.com/docs/customize-notification-icons</a></li>
</ul>
<h3>IONIC VIEW</h3>
<p>(share with others using ionic view app)<br>
cmd: ionic upload</p>
<ul>
<li><a href="https://apps.ionic.io/apps">https://apps.ionic.io/apps</a></li>
<li><a href="http://view.ionic.io/">http://view.ionic.io/</a></li>
<li><a href="http://ionicframework.com/docs/cli/uploading_viewing.html">http://ionicframework.com/docs/cli/uploading_viewing.html</a></li>
<li><a href="https://play.google.com/store/apps/details?id=com.ionic.viewapp">https://play.google.com/store/apps/details?id=com.ionic.viewapp</a></li>
</ul>
<p>update app without store<br>
<a href="https://docs.ionic.io/services/deploy/">https://docs.ionic.io/services/deploy/</a></p>
<p>ionic package (generate apk or ipa)<br>
<a href="http://docs.ionic.io/services/package/">http://docs.ionic.io/services/package/</a><br>
<a href="https://www.joshmorony.com/building-ionic-2-applications-for-ios-without-a-mac">https://www.joshmorony.com/building-ionic-2-applications-for-ios-without-a-mac</a></p>
<p>publish on store<br>
<a href="https://ionicframework.com/docs/guide/publishing.html">https://ionicframework.com/docs/guide/publishing.html</a><br>
<a href="http://ionicframework.com/docs/v1/guide/publishing.html">http://ionicframework.com/docs/v1/guide/publishing.html</a> (old)<br>
<a href="https://cordova.apache.org/docs/en/latest/guide/platforms/android/#signing-an-app">https://cordova.apache.org/docs/en/latest/guide/platforms/android/#signing-an-app</a></p>
<p>create PWA<br>
<a href="https://forum.ionicframework.com/t/building-for-browsers-pwa/72689">https://forum.ionicframework.com/t/building-for-browsers-pwa/72689</a></p>
<p>creator<br>
<a href="https://creator.ionic.io/app/login">https://creator.ionic.io/app/login</a></p>
<h3>UPDATE IONIC VERSION</h3>
<p>update 3.3.0 <a href="https://github.com/ionic-team/ionic/releases/tag/v3.3.0">https://github.com/ionic-team/ionic/releases/tag/v3.3.0</a><br>
update version : <a href="http://blog.ionic.io/ionic-2-rc-weekend-updates/">http://blog.ionic.io/ionic-2-rc-weekend-updates/</a><br>
delete node modules and update new version of ionic-angular inside package.json<br>
rmdir /s/q node_modules<br>
npm install + correct error (angular version)<br>
First, update the version of @ionic/app-scripts in your Ionic 2 app with<br>
npm install @ionic/app-scripts@latest --save-dev</p>
<p><a href="http://blog.ionic.io/announcing-ionic-cli-v3">http://blog.ionic.io/announcing-ionic-cli-v3</a><br>
Second, update your Ionic CLI using<br>
npm install -g ionic</p>
<h2>CAPACITOR</h2>
<ul>
<li><a href="https://ionicframework.com/blog/announcing-capacitor-1-0/">https://ionicframework.com/blog/announcing-capacitor-1-0/</a></li>
<li><a href="https://ionicframework.com/blog/announcing-capacitor-2-0/">https://ionicframework.com/blog/announcing-capacitor-2-0/</a></li>
<li><a href="https://capacitor.ionicframework.com/docs/apis/">https://capacitor.ionicframework.com/docs/apis/</a></li>
<li><a href="https://github.com/capacitor-community">https://github.com/capacitor-community</a></li>
</ul>
<p>Unlike Cordova Capacitor expects you to commit your native app project (Xcode, Android Studio, etc.) as a source artifact. This means it’s easy to add custom native code, build “plugins” to expose native functionality to your web app without having to actually build a standalone plugin, and also debug and manage your app in the way that embraces the best tooling for that platform.</p>
<p>Capacitor embraces NPM for every dependency in your project, including plugins and platforms. That means you never capacitor install plugin-x, you just npm install plugin-x</p>
<p>Cordova was copying plugin files directly into a project. Instead Capacitor requires your plugins to be Cocoa Pods for iOS or typical android libraries for Android. Then, capacitor comes with a plugin:generate command to quickly scaffold out plugin projects, complete with Xcode and Android Studio projects and unit tests.</p>
<p>Capacitor provides a tiny CLI that is installed locally to each app. That means there are no global dependencies to manage and it’s easy to use different versions of Capacitor across every app you build.</p>
<pre><code>npx cap init
npx cap add ios
npx cap add android
npx cap add electron
</code></pre>
<h2>PLUGINS</h2>
<ul>
<li><a href="https://github.com/bot101/capacitor-paystack">https://github.com/bot101/capacitor-paystack</a></li>
</ul>