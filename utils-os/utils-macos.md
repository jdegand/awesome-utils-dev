<h1>MacOS</h1>
<ul>
<li><a href="https://github.com/iCHAIT/awesome-macOS">https://github.com/iCHAIT/awesome-macOS</a></li>
<li><a href="https://github.com/appleboy/awesome-osx">https://github.com/appleboy/awesome-osx</a></li>
<li><a href="https://github.com/jaywcjlove/awesome-mac">https://github.com/jaywcjlove/awesome-mac</a></li>
<li><a href="https://github.com/phmullins/awesome-macos">https://github.com/phmullins/awesome-macos</a></li>
<li><a href="https://github.com/nikitavoloboev/my-mac-os">https://github.com/nikitavoloboev/my-mac-os</a></li>
<li><a href="https://github.com/geerlingguy/mac-dev-playbook">https://github.com/geerlingguy/mac-dev-playbook</a></li>
<li><a href="https://github.com/myspaghetti/macos-virtualbox">https://github.com/myspaghetti/macos-virtualbox</a></li>
<li><a href="https://github.com/PubFoundry/macos-frontend-setup">https://github.com/PubFoundry/macos-frontend-setup</a></li>
<li><a href="https://github.com/serhii-londar/open-source-mac-os-apps">https://github.com/serhii-londar/open-source-mac-os-apps</a></li>
<li><a href="https://github.com/herrbischoff/awesome-macos-command-line">https://github.com/herrbischoff/awesome-macos-command-line</a></li>
<li><a href="https://github.com/BlockchainCommons/Secure-Development-Setup-macOS">https://github.com/BlockchainCommons/Secure-Development-Setup-macOS</a></li>
</ul>
<h2>Tips</h2>
<ul>
<li><a href="https://www.maketecheasier.com/show-current-path-finder-mac/">https://www.maketecheasier.com/show-current-path-finder-mac/</a></li>
<li><a href="https://stackoverflow.com/questions/30065227/run-open-vscode-from-mac-terminal">https://stackoverflow.com/questions/30065227/run-open-vscode-from-mac-terminal</a></li>
<li><a href="https://stackoverflow.com/questions/31374085/installing-adb-on-macos">https://stackoverflow.com/questions/31374085/installing-adb-on-macos</a></li>
<li><a href="https://www.browserstack.com/guide/how-to-debug-on-iphone">https://www.browserstack.com/guide/how-to-debug-on-iphone</a></li>
<li><a href="https://www.wiserfirst.com/blog/how-to-use-asdf-on-macos/">https://www.wiserfirst.com/blog/how-to-use-asdf-on-macos/</a></li>
</ul>
<h2>Tools</h2>
<ul>
<li><a href="https://github.com/iina/iina">https://github.com/iina/iina</a></li>
<li><a href="https://github.com/lima-vm/lima">https://github.com/lima-vm/lima</a></li>
<li><a href="https://github.com/asdf-community">https://github.com/asdf-community</a></li>
<li><a href="https://github.com/abiosoft/colima">https://github.com/abiosoft/colima</a></li>
<li><a href="https://github.com/dwarvesf/hidden">https://github.com/dwarvesf/hidden</a></li>
<li><a href="https://github.com/leits/MeetingBar">https://github.com/leits/MeetingBar</a></li>
<li><a href="https://github.com/rxhanson/Rectangle">https://github.com/rxhanson/Rectangle</a></li>
<li><a href="https://github.com/seemoo-lab/opendrop">https://github.com/seemoo-lab/opendrop</a></li>
<li><a href="https://github.com/sickcodes/Docker-OSX">https://github.com/sickcodes/Docker-OSX</a></li>
<li><a href="https://github.com/minamarkham/formation">https://github.com/minamarkham/formation</a></li>
<li><a href="https://github.com/jacklandrin/OnlySwitch">https://github.com/jacklandrin/OnlySwitch</a></li>
<li><a href="https://github.com/alienator88/Pearcleaner">https://github.com/alienator88/Pearcleaner</a></li>
<li><a href="https://github.com/NativeScript/template-macos-solid">https://github.com/NativeScript/template-macos-solid</a></li>
<li><a href="https://apps.apple.com/us/app/magnet/id441258766?mt=12">https://apps.apple.com/us/app/magnet/id441258766?mt=12</a></li>
</ul>
<h2>Package Manager</h2>
<ul>
<li><a href="https://brew.sh/">https://brew.sh/</a></li>
<li><a href="https://github.com/crhuber/kelp">https://github.com/crhuber/kelp</a></li>
<li><a href="https://github.com/Homebrew/brew">https://github.com/Homebrew/brew</a></li>
</ul>
<pre><code>brew update
brew install nginx
brew services list
</code></pre>
<h2>Java</h2>
<pre><code>which java
/usr/libexec/java_home
/usr/libexec/java_home -V
echo $JAVA_HOME
</code></pre>
<h2>Nginx</h2>
<pre><code>nginx -V
sudo nano /private/etc/hosts
launchctl load /usr/local/cellar/nginx/1.21.0/homebrew.mxcl.nginx.plist
launchctl unload /usr/local/cellar/nginx/1.21.0/homebrew.mxcl.nginx.plist
</code></pre>
<p>Important locations:</p>
<pre><code>Add configs in -> /usr/local/etc/nginx/servers/
Default config -> /usr/local/etc/nginx/nginx.conf
Logs will be in -> /usr/local/var/log/nginx/
Default webroot is -> /usr/local/var/www/
Default listen address -> http://localhost:8080
</code></pre>
<h2>Spotlight</h2>
<p>Wanna speed up your MacOSX by telling Spotlight NOT to index 10k node_modules? Use and run my shell alias...</p>
<ul>
<li>Solution 1.</li>
</ul>
<p>Settings > Spotlight > exclude folders</p>
<ul>
<li>Solution 2.</li>
</ul>
<pre><code>alias npm_ignore_indexing='find . -type d -name "node_modules" -exec touch "{}/.metadata_never_index" \; -exec echo "✔ {}" \;'
</code></pre>
<h2>Programming</h2>
<ul>
<li><a href="https://github.com/bow-swift/bow-arch">https://github.com/bow-swift/bow-arch</a></li>
<li><a href="https://github.com/MikeMcQuaid/strap">https://github.com/MikeMcQuaid/strap</a></li>
</ul>
<h2>Directory Access</h2>
<p>Finder > Aller > Aller au dossier<br>
Terminal > ~/Library</p>
<h2>Symbolik link</h2>
<ul>
<li>Absolute symbolik link</li>
</ul>
<pre><code>ln -s ~/Workspace/website-js/apps/website-js/src/i18n ~/Workspace/website-js/
</code></pre>
<ul>
<li>Relative symbolik link</li>
</ul>
<pre><code>cd ~/Workspace/website-js/cypress/fixtures/default-context/shared/
ln -s ../../../../apps/website-js/src/i18n/ i18n
</code></pre>
<h2>Shortcuts</h2>
<p>Lock screen: Control + CMD + Q<br>
Show/hide hidden: SHIFT+CMD+Dot<br>
Take screenshot full: SHIFT + CMD + 3<br>
Take screenshot portion: SHIFT + CMD + 4<br>
Array []: Option + 5/6<br>
Object {}: Option + 8/9<br>
Pipe |: Option + 7</p>
<h2>Mobile dev Tips (iOS/Android)</h2>
<ul>
<li>
<p>Debug iOS app: open safari > develop > find your device</p>
</li>
<li>
<p>Debug Android app: open chrome > go to: chrome://inspect#devices > find your device</p>
</li>
<li>
<p><a href="https://developers.google.com/web/tools/chrome-devtools/remote-debugging">https://developers.google.com/web/tools/chrome-devtools/remote-debugging</a></p>
</li>
</ul>
<h2>Mobile dev Setup (iOS/Android)</h2>
<p>This tutorial assumes that you are using Zsh as the line shell cmd tool which is used by default in newer versions of macOS.</p>
<h3>Installing Xcode</h3>
<ol>
<li>Search for “xcode” in the App Store</li>
<li>Install XCode from the App Store</li>
<li>Install the Tools CLI: </li>
</ol>
<pre><code>xcode-select --install
</code></pre>
<h3>Installing Android Studio</h3>
<ol>
<li>Download and install the latest version available on <a href="https://developer.android.com/studio">https://developer.android.com/studio</a></li>
<li>Drag and drop the icon in the Applications directory</li>
<li>Add the conf and the environment variables to the .zshrc file</li>
</ol>
<pre><code>touch ~/.zshrc
export LANG=en_US.UTF-8
export ANDROID_HOME=~/Library/Android/sdk
export ANDROID_SDK_ROOT=~/Library/Android/sdk
export ANDROID_AVD_HOME=~/.android/avd
</code></pre>
<h3>NVM installation</h3>
<p>NVM allows you to manage different versions of NodeJS (essential when working on more or less recent projects)</p>
<pre><code>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.1/install.sh | bash
nvm install v10.16.0
nvm list
nvm use v10.16.0
</code></pre>
<h3>Java installation</h3>
<p>Solution 1 seems the easiest and quickest, however you can also choose solution 2 if you prefer the command line or if you have a problem with solution 1.</p>
<p>Solution 1<br>
Download and install the java JDK8 DMG here: <a href="https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html">https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html</a></p>
<p>Solution 2</p>
<pre><code>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
brew cask install java --no-quarantine
</code></pre>
<h2>iOS Distribute</h2>
<ol>
<li>App > Generic iOS Device</li>
<li>Product > Archive > Distribute app > Ad Hoc (distribute IPA locally)</li>
</ol>
<ul>
<li><a href="https://github.com/sindresorhus/create-dmg">https://github.com/sindresorhus/create-dmg</a></li>
</ul>
<h3>iOS Certificate</h3>
<ol>
<li>Create an Apple Developper account: <a href="https://appleid.apple.com/account#!&#x26;page=create">https://appleid.apple.com/account#!&#x26;page=create</a></li>
<li>Connect the account on XCode: Preference> Account> + (bottom left)</li>
<li>Ask the admin for App Manager access in order to have access to the creation of a distribution certificate<br>
<a href="https://developer.apple.com/support/roles/">https://developer.apple.com/support/roles/</a></li>
<li>make a certificate signing request, follow the procedure: <a href="https://help.apple.com/developer-account/#/devbfa00fef7">https://help.apple.com/developer-account/#/devbfa00fef7</a></li>
<li>Generate a certificate for your app and write down the password: Xcode > Account > Manage certificate > add (apple distribution)</li>
<li>Open your Keychain, then drag the .cer file to “My certificates” and the .p12 file to “Keys”. You should be able to launch a build from the Product > Archive menu at this step. We will now configure the archive distribution.</li>
<li>Download the profiles from the apple developer site (select the right team at the top right if you have several teams): <a href="https://developer.apple.com/account/resources/profiles/list">https://developer.apple.com/account/resources/profiles/list</a><br>
Usually, you need a profile to distribute on the App Store, and another for ad hoc distribution.</li>
<li>Import them into XCode by opening the application project, then in the Signing &#x26; Capabilities tab. Uncheck Automatically manage signing. Click on Provisioning Profile > Import Profile…. Import the two previously downloaded profiles. Re-check Automatically manage signing</li>
<li>Open Window > Organizer you should find the previously performed build</li>
<li>Click on Distribute > Ad Hoc > Next (default) > Select the Ad Hoc profile > Next > Choose the destination path</li>
<li>You have your IPA which you can distribute via <a href="https://www.diawi.com/">https://www.diawi.com/</a></li>
</ol>