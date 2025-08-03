<h1>Google Tag Manager</h1>
<h2>Tools OSS</h2>
<ul>
<li><a href="https://github.com/PostHog/posthog">https://github.com/PostHog/posthog</a></li>
<li><a href="https://github.com/medama-io/medama">https://github.com/medama-io/medama</a></li>
<li><a href="https://github.com/matomo-org/matomo">https://github.com/matomo-org/matomo</a></li>
<li><a href="https://github.com/aptabase/aptabase">https://github.com/aptabase/aptabase</a></li>
<li><a href="https://github.com/plausible/analytics">https://github.com/plausible/analytics</a></li>
<li><a href="https://github.com/umami-software/umami">https://github.com/umami-software/umami</a></li>
<li><a href="https://github.com/ClickHouse/ClickHouse">https://github.com/ClickHouse/ClickHouse</a></li>
<li><a href="https://github.com/benvinegar/counterscale">https://github.com/benvinegar/counterscale</a></li>
<li><a href="https://github.com/open-metadata/OpenMetadata">https://github.com/open-metadata/OpenMetadata</a></li>
</ul>
<h2>Tools</h2>
<ul>
<li><a href="https://www.tinybird.co/">https://www.tinybird.co/</a></li>
<li><a href="https://www.rudderstack.com/">https://www.rudderstack.com/</a></li>
<li><a href="https://tagassistant.google.com/">https://tagassistant.google.com/</a></li>
<li><a href="https://www.simpleanalytics.com/">https://www.simpleanalytics.com/</a></li>
<li><a href="https://chrome.google.com/webstore/detail/dataslayer/ikbablmmjldhamhcldjjigniffkkjgpo">https://chrome.google.com/webstore/detail/dataslayer/ikbablmmjldhamhcldjjigniffkkjgpo</a></li>
<li><a href="https://chrome.google.com/webstore/detail/tag-assistant-companion/jmekfmbnaedfebfnmakmokmlfpblbfdm/related">https://chrome.google.com/webstore/detail/tag-assistant-companion/jmekfmbnaedfebfnmakmokmlfpblbfdm/related</a></li>
</ul>
<h2>Summary</h2>
<ul>
<li>
<p>GA = google analytics</p>
</li>
<li>
<p>FA = firebase analytics</p>
</li>
<li>
<p>metric (GA + FA) = statistics</p>
</li>
<li>
<p>dimension (GA) = user property (FA)</p>
</li>
<li>
<p>dimensions vs metrics: <a href="https://www.searchenginepeople.com/blog/16081-analytics-metrics-dimensions.html">https://www.searchenginepeople.com/blog/16081-analytics-metrics-dimensions.html</a></p>
</li>
<li>
<p>dimensions &#x26; metrics examples: <a href="https://support.google.com/analytics/answer/1033861?hl=en">https://support.google.com/analytics/answer/1033861?hl=en</a></p>
</li>
</ul>
<h2>Helpers</h2>
<pre><code>console.log(dataLayer.slice(-1).pop())
</code></pre>
<h2>Google Analytics</h2>
<ul>
<li><a href="https://www.optimizesmart.com/event-tracking-guide-google-analytics-simplified-version/#a3">https://www.optimizesmart.com/event-tracking-guide-google-analytics-simplified-version/#a3</a></li>
</ul>
<pre><code>event.push(
{
    eventCategory: 'favorite:tabnaame', &#x3C;&#x3C;&#x3C;&#x3C; standard
    eventSubcategory: 'fdsf' &#x3C;&#x3C;&#x3C;&#x3C; custom tab or subpage ???
    eventAction: 'clicked add-favorite', &#x3C;&#x3C;&#x3C;&#x3C; standard
    eventLabel: '#id' &#x3C;&#x3C;&#x3C;&#x3C; standard
    eventValue: '#id' &#x3C;&#x3C;&#x3C;&#x3C; standard
    more: [] &#x3C;&#x3C;&#x3C;&#x3C; custom complex js object
})
</code></pre>
<h2>Google Tag Manager</h2>
<p>Google Tag Manager is used to track the user interactions and thanks to that the project can use the data collected to improve the user experience. That means when you create a new screen or update an existing screen you have to take care to tag the possible interactions of the user. Basically the routing events should be tracked automatically and you must add the custom directive called gtmEvent each time you use a click event.</p>
<p>Now you must configure your directive in order to correctly tag the event:</p>
<ul>
<li>eventCategory is a fixed value depending on the screen, it must corresponds to one of the screens mentioned in the tag manager spreadsheet file</li>
<li>eventSubcategory is a fixed value depending on the sub-screen, for example when we have a screen with tabs or sections or child screens. If no tab / section / subscreen and main screen then use: main</li>
<li>eventAction is a value which corresponds to the action of the event, what does the link/button do. It must contains a variable and 'clicked', ex: 'send question clicked'. If the action aims to redirect to another internal screen then the value must be the name of the destination screen used in eventCategory, ex: 'invoices clicked'. This naming allows you to create conversion funnels.</li>
<li>eventLabel allows you to pass additional information on the origin of the action, for example if you are in the menu: statistics menu, if you are in a list, the item id. The origin of the action can also be passed here. Performance teams use it to target conversion tunnel exit points in combination with 'eventAction.</li>
</ul>
<h3>CODE HELPER</h3>
<h4>ANGULAR DIRECTIVE</h4>
<pre><code>[gtmEvent]="{
    eventCategory: 'profile',
    eventSubcategory: 'main',
    eventAction: 'tab clicked',
    eventLabel: tab?.label?.toLowerCase()
}"
</code></pre>
<h4>GTM EVENTS</h4>
<pre><code>gtm.load
gtm.dom
optimize.activate
gtm.js
</code></pre>
<h4>GTM WITH REGEX</h4>
<pre><code>.* (enable regex)
REGEX for cookies
^(true|false|undefined)$
</code></pre>
<h2>Google Firebase</h2>
<h3>Introduction</h3>
<ul>
<li>Firebase is mandatory to publish an Android app on Google Play, this is why we have the google-services.json- Then you can track and report more information specific to usage of your application such as user info (preferences...), navigation events or click events.</li>
</ul>
<h3>Event system</h3>
<ul>
<li>In Firebase an Event is an important occurrence in your app that you want to measure. You can report up to 500 different types of Events per app and you can associate up to 25 unique parameters with each Event type. Some common events are suggested below, but you may also choose to specify custom Event types that are associated with your specific app. Each event type is identified by a unique name. Event names can be up to 40 characters long, may only contain alphanumeric characters and underscores ("<em>"), and must start with an alphabetic character. The "firebase</em>", "google<em>" and "ga</em>" prefixes are reserved and should not be used.<br>
More info: <a href="https://firebase.google.com/docs/reference/android/com/google/firebase/analytics/FirebaseAnalytics.Event">https://firebase.google.com/docs/reference/android/com/google/firebase/analytics/FirebaseAnalytics.Event</a></li>
</ul>
<p>You can report up to 500 different types of Events per app and you can associate up to 25 unique parameters with each Event type.</p>
<h3>User property</h3>
<p>A call to setUserProperty() will be persistent for all future sessions. Once set, all future logged events will be tagged with that user property. You do not need to call it each time your app starts.<br>
You can report a maximum of 25 user properties<br>
More info : <a href="https://support.google.com/firebase/answer/6317519">https://support.google.com/firebase/answer/6317519</a></p>
<h3>Tagging plan</h3>
<ul>
<li>First it's better to develop the event locally using the web platform without a physical device (analyticsLoggingEnabled=true &#x26; analyticsTrackingEnabled=false)- Secondly it's possible to switch in debug mode in order to check the behavior with a physical device (analyticsLoggingEnabled=false &#x26; analyticsTrackingEnabled=true)</li>
</ul>
<h3>Debug</h3>
<ul>
<li>Debug the events: <a href="https://support.google.com/firebase/answer/7201382">https://support.google.com/firebase/answer/7201382</a></li>
<li>Click debug view in Firebase console or Google Analytics</li>
</ul>
<h4>Debug Android</h4>
<pre><code>adb shell setprop debug.firebase.analytics.app com.app.package # enable debug
adb shell setprop debug.firebase.analytics.app .none. # disabled debug
</code></pre>
<h4>Debug iOS</h4>
<ul>
<li>In Xcode, select Product > Scheme > Edit scheme...</li>
<li>Select Run from the left menu >Select the Arguments tab.</li>
<li>In the Arguments Passed On Launch section, add:</li>
</ul>
<pre><code>-FIRDebugEnabled # enable debug
-FIRDebugDisabled # disable debug
</code></pre>
<h2>Google Optimize</h2>
<ul>
<li>At bootstrap website appends « Optimize » script to the page</li>
<li>« Optimize » load all the running experiments that matches </li>
<li>« Optimize » determines the variant of these experiments</li>
<li>« Optimize » stores in a cookie experiments+variants</li>
<li>« Optimize » sends the impression event to « Analytics » </li>
</ul>