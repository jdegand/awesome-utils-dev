<h1>REACTIVE / RXJS</h1>
<h2>INTRO</h2>
<ul>
<li>Reactive programming is an asynchronous programming paradigm concerned with data streams and the propagation of change - Wikipedia</li>
<li>RxJS is a library for reactive programming using observables that makes it easier to compose asynchronous or callback-based code - RxJS docs</li>
</ul>
<h2>DEFINITIONS</h2>
<ul>
<li>
<p>Observable: is the stream of data. It represents the idea of an invokable collection of future values or events.</p>
</li>
<li>
<p>Observer: is a collection of up to 3 callbacks (next, error, complete) that knows how to listen to values delivered by the Observable.</p>
</li>
<li>
<p>Subscription: represents the execution of an Observable, is primarily useful for starting the execution in case of a cold observable and for cancelling the execution in case of hot observable.</p>
</li>
<li>
<p>Operators: are pure functions that enable a functional programming style of dealing with collections with operations like map, filter, concat, flatMap, etc.</p>
</li>
<li>
<p>Subject: is the equivalent to an EventEmitter, and the only way of multicasting a value or event to multiple Observers.</p>
</li>
<li>
<p>Schedulers: are centralized dispatchers to control concurrency, allowing us to coordinate when computation happens on e.g. setTimeout or requestAnimationFrame or others.</p>
</li>
<li>
<p><a href="http://rxmarbles.com/">http://rxmarbles.com/</a></p>
</li>
<li>
<p><a href="https://xgrommx.github.io/rx-book/index.html">https://xgrommx.github.io/rx-book/index.html</a></p>
</li>
<li>
<p><a href="http://reactivex.io/rxjs/manual/overview.html">http://reactivex.io/rxjs/manual/overview.html</a></p>
</li>
<li>
<p><a href="https://github.com/sindresorhus/awesome-observables">https://github.com/sindresorhus/awesome-observables</a></p>
</li>
<li>
<p><a href="https://github.com/this-is-learning/rxjs-fundamentals-course">https://github.com/this-is-learning/rxjs-fundamentals-course</a></p>
</li>
<li>
<p><a href="https://github.com/PacktPublishing/Reactive-Patterns-with-RxJS-for-Angular">https://github.com/PacktPublishing/Reactive-Patterns-with-RxJS-for-Angular</a></p>
</li>
<li>
<p><a href="https://www.technologies-ebusiness.com/enjeux-et-tendances/rxjs-pour-les-humains">https://www.technologies-ebusiness.com/enjeux-et-tendances/rxjs-pour-les-humains</a></p>
</li>
</ul>
<h2>BAD PRACTICES</h2>
<ul>
<li><a href="https://www.youtube.com/watch?v=OhuRvfcw3Tw">https://www.youtube.com/watch?v=OhuRvfcw3Tw</a> TOP 6 Mistakes in RxJS code</li>
</ul>
<h2>HOT VS COLD</h2>
<ul>
<li>
<p>COLD (i.e interval, http requests) ==> are unicast as each subscriber gets data from different producer. "cold" observable will  produce value only if they are  listened to or observed via the subscribe function. in other word if there is no subscription, there is no producer/no event listener, They are called cold. ex with http module each subscriber is firing a new http request; because it has its own producer . Sometimes we also say it's cold when your observable creates the producer (data is produced inside the Observable.) timer is a special case it's a infinite cold observable.</p>
</li>
<li>
<p>HOT (fromEvent click, ngrx selectors) ==> are multicast as all subscribers get data from the same producer. the producer is always active, if you subscribe you get the value and you can subscribe many times and get the same producer because it's multicast. It's hot when your observable closes over the producer (data is produced outside the Observable.) Conversely, some are described as hot when values are produced even if the flow has no subscription. This is the case when you create a feed to listen to the user's clicks. Values are produced even if one does not subscribe to this observable (there is no subscription) (it seems logical).</p>
</li>
</ul>
<h2>OBSERVABLE</h2>
<p>Observables are lazy Push collections of multiple values.<br>
a flux = (i.e: collection asynchrone dont les événements arrivent au cours du temps)</p>
<pre><code>  | Single    | Multiple
</code></pre>
<p>Pull	| Function  | Iterator<br>
Push	| Promise   | Observable</p>
<p>Pull | Function | Iterator<br>
Push | Promise | Observable</p>
<pre><code>  | Producer                                  | Consumer
</code></pre>
<p>Pull	| Passive: produces data when requested.	| Active: decides when data is requested.<br>
Push	| Active: produces data at its own pace.	| Passive: reacts to received data.</p>
<p>Pull | Passive: produces data when requested. | Active: decides when data is requested.<br>
Push | Active: produces data at its own pace. | Passive: reacts to received data.</p>
<ul>
<li><a href="http://reactivex.io/rxjs/manual/overview.html#observable">http://reactivex.io/rxjs/manual/overview.html#observable</a></li>
</ul>
<h3>OBSERVER</h3>
<p>An Observer is a consumer of values delivered by an Observable. (i.e : a listener)</p>
<ul>
<li><a href="http://reactivex.io/rxjs/manual/overview.html#observer">http://reactivex.io/rxjs/manual/overview.html#observer</a></li>
</ul>
<h3>SUBSCRIPTION</h3>
<ul>
<li><a href="http://reactivex.io/rxjs/manual/overview.html#subscription">http://reactivex.io/rxjs/manual/overview.html#subscription</a></li>
</ul>
<p>A Subscription is an object that represents a disposable resource,<br>
var observable = Rx.Observable.interval(1000);<br>
var subscription = observable.subscribe(x => console.log(x));<br>
subscription.unsubscribe();</p>
<h3>SUBJECT</h3>
<ul>
<li>
<p><a href="http://reactivex.io/rxjs/manual/overview.html#subject">http://reactivex.io/rxjs/manual/overview.html#subject</a></p>
</li>
<li>
<p>Subject: Multicasted observable: Subject data can be pushed into a subject and the subject’s subscribers will in turn receive that pushed data. Subjects are useful for multicasting or for when a source of data is not easily transformed into an observable. It’s easy to overuse subjects and oftentimes, as illustrated in this excellent post, subjects can be avoided when an observable source can be created otherwise.</p>
</li>
<li>
<p>BehaviorSubject: whenever a new Observer subscribe it will immediatly receive the current value</p>
</li>
<li>
<p>ReplaySubject: similar to a BehaviorSubject but also records multiple values from the Observable execution and replays them to new subscribers.</p>
</li>
<li>
<p>AsyncSubject: only the last value of the Observable execution is sent to its observers, and only when the execution completes.</p>
</li>
</ul>
<h3>EVENT EMITTER</h3>
<ul>
<li>EventEmitter is aimed to help communication between component using input and output. It extends RxJS Subject but it's directly provided by the @angular/core package. EventEmitter should not be used for anything else then @Output()s in components and directives. Also EventEmitter gets cleaned up automatically unlike custom Subjects that you need to unsubscribe to in the onDestroy lifecycle hook.</li>
</ul>
<p>EventEmitter a une méthode subscribe() pour réagir aux événements, et cette méthode reçoit trois paramètres :<br>
• une méthode pour réagir aux événements.<br>
• une méthode pour réagir aux erreurs.<br>
• une méthode pour réagir à la terminaison.</p>
<ul>
<li>Un EventEmitter peut émettre un événement avec la méthode emit().</li>
</ul>
<pre><code>const emitter = new EventEmitter();
const subscription = emitter.subscribe(   value => console.log(value),   error => console.log(error),   () => console.log('done') );
emitter.emit('hello'); emitter.emit('there'); emitter.complete();
subscription.unsubscribe(); // unsubscribe  
// logs "hello", then "there", then "done"
</code></pre>
<h3>TROUBLESHOOTING</h3>
<p>If you get unsubscribed from your subscription you probably need to catch the error at the right place, meaning inside the nearest possible to the http call:</p>
<ul>
<li><a href="https://www.bitovi.com/blog/how-to-use-rxjs-catcherror-without-unsubscribing-from-new-events">https://www.bitovi.com/blog/how-to-use-rxjs-catcherror-without-unsubscribing-from-new-events</a></li>
</ul>
<h3>OPERATORS (FRENCH)</h3>
<p>• take(n) va piocher les n premiers éléments. take(1) ne se déclenchera pas (et ne terminera pas le flux observable) au cas où l'observable d'origine n'émettrait jamais, take(1) ne se désabonne pas lorsque le composant est détruit. L'abonnement reste actif jusqu'à ce que la première valeur soit émise, que le composant soit actif ou détruit. take(1) est presque similaire a first() L'opérateur first() prend une fonction de prédicat facultative et émet une notification d'erreur lorsqu'aucune valeur ne correspond lors du complete.<br>
• takeWhile() attend un boolean statique et va unsouscrire quand le boolean sera a true lors du prochain declenchement par le stream et non le changement d'etat du boolean.<br>
• takeUntil() attend un stream et va unsouscrire quand ce steam va emettre un evenement.<br>
• map(fn) va appliquer la fonction fn sur chaque événement et retourner le résultat.<br>
• filter(predicate) laissera passer les seuls événements qui répondent positivement au prédicat.<br>
• reduce(fn) appliquera la fonction fn à chaque événement pour réduire le flux à une seule valeur unique.<br>
• merge(s1, s2) fusionnera les deux flux.<br>
• subscribe(fn) appliquera la fonction fn à chaque événement qu’elle reçoit.<br>
• forEach(fn)</p>
<p>• transformation (delaying, debouncing…)<br>
• combinaison (merge, zip, combineLatest…)<br>
• filtrage (distinct, filter, last…)<br>
• mathématique (min, max, average, reduce…)<br>
• conditions (amb, includes…)</p>
<h3>OPERATORS (ENGLISH)</h3>
<p>They are pure functions. The function always returns the same result if the same arguments are passed in. It does not depend on any state, or data, change during a program's execution.</p>
<h4>TRANSFORMATION</h4>
<ul>
<li>
<p>first order mapping transforms each emitted value and emits the result (ex: map, pluck...)</p>
</li>
<li>
<p>higher-order mapping transforms each emitted value to an observable (ex: mergeMap, switchMap...)</p>
</li>
<li>
<p>mapTop: map emissions to constant value.</p>
</li>
<li>
<p>map: apply projection with each value from source.</p>
</li>
<li>
<p>mergeScan: allow to accumulate value over time via merged observables.</p>
</li>
<li>
<p>pluck: map each emitted value from the source Observable to its specified nested property.</p>
</li>
<li>
<p>reduce: reduces the values from source observable to a single value that's emitted when the source completes.</p>
</li>
<li>
<p>scan: reduce over time. It applies an accumulator function to each of the emitted values. scan emits the result for each value, whilst reduce only emits the final result.</p>
</li>
<li>
<p>buffer: collect output values until provided observable emits, emit as array.</p>
</li>
<li>
<p>toArray: collects all of the emitted values, and when the source Observable completes, emits them inside an array.</p>
</li>
<li>
<p>bufferCount: stores emitted values into an array, until the array reaches the provided length.</p>
</li>
<li>
<p>windowWhen: collects values into an Observable (window), which is emitted (and a new one is created) whenever the Observable returned by the provided function emits.</p>
</li>
<li>
<p>windowCount: collects values into an Observable (window) that can contain a maximum of n values.</p>
</li>
<li>
<p>window: collects emitted values into Observables (called windows).</p>
</li>
<li>
<p>interval(time): emits sequential number at the givem time interval</p>
</li>
<li>
<p>delay(time): a simple delay in MS</p>
</li>
<li>
<p>delayWhen(value): to be able to delay or not based on the value input, for instance delayWhen(isLoading) => (isLoading ? of(undefined) : interval(100))</p>
</li>
</ul>
<p>All *Map operators below consist of two parts — producing a stream of observables through mapping and applying combination logic on the inner streams produced by this higher order observable.</p>
<ul>
<li>mergeMap/flatMap: when the inner Observable emits it merges the value(s) of the ‘inner’ Observable into the ‘outer’ Observable.</li>
<li>switchMap: is like mergeMap but when the 'outer' emits it cancels the previous subscription of the 'inner' and subscribes to the new one.</li>
<li>concatMap: is like mergeMap but it keep the order in which the Observables are emitting is maintained.</li>
<li>exhaustMap: is like mergeMap but it ignore new Observables until the current one is still not completed.</li>
</ul>
<p>All <em>All operators below corresponds to the combination logic (the second part of the </em>Map) operators above. Ex: Map operator produces a stream of observables and mergeAll combines values from these observables and so we can easily replace map and mergeAll with the simpler mergeMap. Indeed concatMap uses concatAll under the hood.</p>
<ul>
<li>
<p>concatAll/mergeAll/switchAll</p>
</li>
<li>
<p>PROCESS:</p>
</li>
<li>
<p>map each value from the source/outter obs to a new inner obs</p>
</li>
<li>
<p>automatically subscribe and unsubscribe from the inner obs</p>
</li>
<li>
<p>emits the resulting values to the output observable</p>
</li>
</ul>
<p>choose the appropriate operator based on the use case:</p>
<ul>
<li>concatMap is ideal to process items in sequence while waiting for completion and when the order is important</li>
<li>mergeMap is ideal to process items in parallel and when the order is not important</li>
<li>switchMap is ideal to cancel the previous task and process only the most recent</li>
<li>exhaustMap is ideal for ignoring new observables while the current one is still ongoing</li>
</ul>
<h4>COMBINATION</h4>
<p>They enable us to join information from multiple observables. Order, time, and structure of emitted values are the primary differences among them.</p>
<ul>
<li>combineLatest: it emits an array of value when the list of observables he got all emitted at least a single value. Then when any inner observable emits a value, it emit the last emitted value from each.</li>
<li>zip: emits values as an array like combineLatest but it doesn’t start to emit until each inner observable emits at least one value and emits as long as emitted values can be collected from all inner observables.</li>
<li>forkJoin: emits the last emitted value from each inner observables after they all complete. So it doesn't emit until all the observables are complete, it means it give the values at the end only. If one of the inner observables throws an error, all values are lost except if you catch errors from every single inner observable.</li>
<li>withLatestFrom: Combines the source Observable with other Observables to create an Observable whose values are calculated from the latest values of each, only when the source emits.</li>
<li>merge: combine multiple Observables into one. So if one of the observables emit a value the combined one will emit as well.</li>
<li>concat: subscribe to Observables in order but only when the previous completes, let me know, then move to the next one.</li>
<li>pairWise: let me know when the Observable emits, but also give me the previous value.</li>
<li>partition: splits the source Observable into 2, where one has the values that satisfy a predicate and the other with values that doesn't.</li>
</ul>
<h4>MULTICASTING</h4>
<p>helpful to cache cold observables (transform to hot) such as http requests.</p>
<ul>
<li>share: share source among multiple subscribers so it allows you to avoid multiple executions of the source Observable when there are multiple subscriptions.</li>
<li>shareReplay: similar to share above but it behaves as a BehaviorSubject would and and replay specified number of emissions on subscription. But take care of memory leak because shareReplay does not keep track of a subscriber count by default, it is not able to unsubscribe to the source Observable. Ever. Unless you use the refCount option like this: shareReplay({ bufferSize: 1, refCount: true })</li>
</ul>
<p>Both shareReplay and publishReplay (+ calling connect on it) will make the observable behind it hot.</p>
<ul>
<li>shareReplay: won't stop emitting until it's completed, no matter if there are no subscriptions anymore or not.</li>
<li>publishReplay: will stop after the last subscriber unsubscribes if used together with refCount</li>
</ul>
<h4>CREATION</h4>
<ul>
<li>from: this operator will turn array, promise or iterable into an observable</li>
</ul>
<h4>UTILITY</h4>
<ul>
<li>tap: transparently perform action or side-effects when a stream emits value, or error or complete</li>
<li>finalize: will be called when observable terminates on complete or error</li>
</ul>
<h4>ERROR HANDLING</h4>
<ul>
<li>catchError: allows to catch and replace (with empty) or to re-throw (with throwError) to subscribers</li>
</ul>
<h4>SCHEDULING</h4>
<ul>
<li>Schedulers are a way to control the timing strategy used to execute tasks. It uses behind the scene the Javascript concept of the Event Loop: microtask vs macrotask. Asap Schedules on the micro task queue (like promise). Async Schedules on the macro task queue (like setTimeout). Queue Schedules a task to be executed synchronously after current task. Some operators like startWith, debounceTime and others have an option to choose the schedulers and also one is by default.</li>
<li><a href="https://blog.bitsrc.io/microtask-and-macrotask-a-hands-on-approach-5d77050e2168">https://blog.bitsrc.io/microtask-and-macrotask-a-hands-on-approach-5d77050e2168</a></li>
<li><a href="https://dev.to/this-is-angular/microtask-queue-rxjs-angular-38ah">https://dev.to/this-is-angular/microtask-queue-rxjs-angular-38ah</a></li>
<li><a href="https://blog.strongbrew.io/what-are-schedulers-in-rxjs/">https://blog.strongbrew.io/what-are-schedulers-in-rxjs/</a></li>
</ul>
<h3>MORE OPERATORS</h3>
<ul>
<li><a href="http://reactivex.io/rxjs/manual/overview.html#operators">http://reactivex.io/rxjs/manual/overview.html#operators</a></li>
<li><a href="https://ncjamieson.com/avoiding-switchmap-related-bugs/">https://ncjamieson.com/avoiding-switchmap-related-bugs/</a></li>
<li><a href="https://medium.com/javascript-everyday/behaviorsubject-vs-replaysubject-1-beware-of-edge-cases-b361153d9ccf">https://medium.com/javascript-everyday/behaviorsubject-vs-replaysubject-1-beware-of-edge-cases-b361153d9ccf</a></li>
<li><a href="https://www.freecodecamp.org/news/understand-rxjs-operators-by-eating-a-pizza/">https://www.freecodecamp.org/news/understand-rxjs-operators-by-eating-a-pizza/</a></li>
<li><a href="https://itnext.io/the-magic-of-rxjs-sharing-operators-and-their-differences-3a03d699d255">https://itnext.io/the-magic-of-rxjs-sharing-operators-and-their-differences-3a03d699d255</a></li>
<li><a href="https://scotch.io/tutorials/rxjs-operators-for-dummies-forkjoin-zip-combinelatest-withlatestfrom">https://scotch.io/tutorials/rxjs-operators-for-dummies-forkjoin-zip-combinelatest-withlatestfrom</a></li>
<li><a href="https://stackoverflow.com/questions/41797439/rxjs-observable-combinelatest-vs-observable-forkjoin">https://stackoverflow.com/questions/41797439/rxjs-observable-combinelatest-vs-observable-forkjoin</a></li>
</ul>
<h3>MORE ARTICLES</h3>
<ul>
<li><a href="https://medium.com/angular-in-depth/the-best-way-to-unsubscribe-rxjs-observable-in-the-angular-applications-d8f9aa42f6a0">https://medium.com/angular-in-depth/the-best-way-to-unsubscribe-rxjs-observable-in-the-angular-applications-d8f9aa42f6a0</a></li>
</ul>
<h2>TEST</h2>
<ul>
<li><a href="https://twitter.com/bartosz_wasilew/status/1625762614986022914">https://twitter.com/bartosz_wasilew/status/1625762614986022914</a></li>
<li><a href="https://fireship.io/snippets/testing-rxjs-observables-with-jest/">https://fireship.io/snippets/testing-rxjs-observables-with-jest/</a></li>
</ul>
<pre><code class="language-javascript">// plain it test with no async function will work in case the stream has already the value.
it('plain it exemple', () => {
      let expectedUsers;
      userListComponent.users.subscribe((users: User[]) =>
            expectedUsers = users;
      );
      expect(expectedUsers).toStrictEqual(usersMock);
});

// waitForAsync is dangerous in case your stream has no value the code inside subscribe will never be called. beware dont put 'expect' in the subscribe.
// the perfect use case when your method triggers other calls like HTTP calls or timeouts, which you don't have any control over.
it('WaitForAsync exemple', waitForAsync(() => {
      let expectedUsers;
      userListComponent.users.subscribe((users: User[]) =>
            setTimeout(() = {
            expectedUsers = users;
            }, 2000);
      );
      expect(expectedUsers).toStrictEqual(usersMock);
}));

// Done function useful to control the lifecycle
it('DoneCallback smple exemple', (done: DoneCallback) => {
      userListComponent.users.subscribe((expectedUsers: User[]) ==> {
            expect(expectedUsers).toStrictEqual(usersMock);
            done();
      });
});

// Complex scenario: the observable interval emits 100 then 200 then 300
test('DoneCallback complex example', (done) => {
        let last = 100;
        from([100, 200, 300])
        .subscribe({
            next: val => {
                expect(val).toBe(last)
                last += 100
              },
            complete: () => done(),
            error: () => done.fail
        })
            
});

// Fake Async &#x26; Tick
it('Fake async &#x26; tick', fakeAsync(() => {
      let expectedUsers;
      userListComponent.users.subscribe((users: User[]) =>
            setTimeout(() = {
            expectedUsers = users;
            }, 2000);
      );
      tick (2100);
      expect (expectedUsers).toStrictEqual(usersMock);
}));

// Async/await to test observables with firstValueFrom or to test promise functions
it('first value from', async () => {
      const expectedUsers: User[] = await firstValueFrom(userListComponent.users);
      expect(expectedUsers).toStrictEqual(usersMock);
});

// Test Scheduler (marbles)
it('marbles', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toStrictEqual(expected);
      });
      testScheduler.run(({ expectObservable }) => { 
            expectObservable(userListComponent.users).toBe('(a|)', {
                  a: usersMock,
            });
      });
});
</code></pre>