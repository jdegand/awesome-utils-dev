<h1>Javascript</h1>
<h2>LIBRARY</h2>
<ul>
<li><a href="https://youmightnotneed.com/">https://youmightnotneed.com/</a></li>
</ul>
<h2>SHORTHANDS</h2>
<ul>
<li><a href="https://morioh.com/p/05414714e685?f=5c21fb01c16e2556b555ab32">https://morioh.com/p/05414714e685?f=5c21fb01c16e2556b555ab32</a></li>
</ul>
<h2>ADVANCED</h2>
<ul>
<li><a href="https://javascript.plainenglish.io/5-most-powerful-advanced-javascript-concepts-9d78cc22287a">https://javascript.plainenglish.io/5-most-powerful-advanced-javascript-concepts-9d78cc22287a</a></li>
</ul>
<h2>OPTIMIZATION</h2>
<ul>
<li><a href="https://romgrk.com/posts/optimizing-javascript">https://romgrk.com/posts/optimizing-javascript</a></li>
<li><a href="https://thenewstack.io/how-to-master-javascript-performance-optimization">https://thenewstack.io/how-to-master-javascript-performance-optimization</a></li>
</ul>
<h2>GARBAGE COLLECTOR</h2>
<ul>
<li><a href="https://jakearchibald.com/2024/garbage-collection-and-closures/">https://jakearchibald.com/2024/garbage-collection-and-closures/</a></li>
</ul>
<h2>CONTEXT / HOISTING</h2>
<ul>
<li><a href="https://tylermcginnis.com/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/">https://tylermcginnis.com/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/</a></li>
<li><a href="https://www.w3schools.com/js/js_hoisting.asp">https://www.w3schools.com/js/js_hoisting.asp</a></li>
</ul>
<p>Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function). Indeed all declarations, both functions and variables, are hoisted to the top of the containing scope, before any part of your code is executed.</p>
<ul>
<li>Functions are hoisted first, and then variables.</li>
<li>Function declarations have priority over variable declarations, but not over variable assignments.</li>
</ul>
<h3>SCOPE</h3>
<p>Scope determines the accessibility (visibility) of variables.</p>
<ul>
<li>Local scope: Variables declared within a JavaScript function, become LOCAL to the function. They can only be accessed from within the function. They are deleted when the function is completed. Variables declared with var and let are quite similar when declared inside a function. They will both have Function Scope.</li>
<li>Global scope: A variable declared outside a function, becomes GLOBAL. A global variable has global scope: All scripts and functions on a web page can access it.  Variables declared with var and let are quite similar when declared outside a block. They will both have Global Scope. In a web browser, global variables are deleted when you close the browser window (or tab).</li>
<li>Block scope: Variables declared with let inside a block {} cannot be accessed from outside the block.</li>
</ul>
<p>With JavaScript, the global scope is the complete JavaScript environment.<br>
In HTML, the global scope is the window object. All global variables belong to the window object. </p>
<h2>THIS / FUNCTIONS BORROWING METHODS</h2>
<ul>
<li>
<p>In other object-oriented programming languages, the this keyword always refers to the current instance of the class. </p>
</li>
<li>
<p>Whereas in JavaScript, the value of this depends on how a function is invoked (used or called). In JavaScript, the this keyword refers to different objects depending on how it is used... <a href="https://www.w3schools.com/js/js_this.asp">https://www.w3schools.com/js/js_this.asp</a></p>
</li>
<li>
<p>In JavaScript, you can use call(), apply(), and bind() methods to couple a function with an object. This way you can call the function on the object as if it belonged to it. In all 3 cases, the first argument is used as the value of this inside the function.</p>
</li>
<li>
<p>.call() - calls the same function with the specified arguments; in others words it allows for a function/method belonging to one object to be assigned and called for a different object.</p>
</li>
<li>
<p>.apply() - calls the same function with the arguments specified in an array; is very similar to call() but the only difference is that the apply method takes arguments as an array instead of separately.</p>
</li>
<li>
<p>.bind() - creates a new function with the same function body, with a preset value of this (the first argument) and returns that function. when the function is called, it has its 'this' keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called. it is not necessary to pass the arguments at the time of <code>bind</code>. we can pass it later at the time of invocation.</p>
</li>
<li>
<p><a href="https://blog.bitsrc.io/understanding-call-bind-and-apply-methods-in-javascript-33dbf3217be">https://blog.bitsrc.io/understanding-call-bind-and-apply-methods-in-javascript-33dbf3217be</a></p>
</li>
<li>
<p><a href="https://medium.com/@adambomb/understand-javascript-more-deeply-by-writing-a-bind-function-8b619b242dcc">https://medium.com/@adambomb/understand-javascript-more-deeply-by-writing-a-bind-function-8b619b242dcc</a></p>
</li>
<li>
<p><a href="https://stackoverflow.com/questions/15677738/whats-the-difference-between-call-apply-and-bind/15677775#15677775">https://stackoverflow.com/questions/15677738/whats-the-difference-between-call-apply-and-bind/15677775#15677775</a></p>
</li>
</ul>
<h3>FUNCTION</h3>
<ul>
<li><a href="https://dev.to/sumusiriwardana/javascript-functions-explain-like-i-m-five-5009">https://dev.to/sumusiriwardana/javascript-functions-explain-like-i-m-five-5009</a></li>
</ul>
<p>A function can be created in 4 ways:</p>
<ul>
<li>function as a declaration</li>
<li>function as an expression</li>
<li>arrow function</li>
</ul>
<h3>PURE FUNCTIONS</h3>
<ul>
<li><a href="https://blog.bitsrc.io/understanding-javascript-mutation-and-pure-functions-7231cc2180d3">https://blog.bitsrc.io/understanding-javascript-mutation-and-pure-functions-7231cc2180d3</a></li>
<li><a href="https://hackernoon.com/javascript-and-functional-programming-pt-3-pure-functions-d572bb52e21c">https://hackernoon.com/javascript-and-functional-programming-pt-3-pure-functions-d572bb52e21c</a></li>
</ul>
<h3>IMMUTABILITY</h3>
<ul>
<li><a href="https://web.dev/structured-clone/">https://web.dev/structured-clone/</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/structuredClone">https://developer.mozilla.org/en-US/docs/Web/API/structuredClone</a></li>
<li><a href="https://ultimatecourses.com/blog/all-about-immutable-arrays-and-objects-in-javascript">https://ultimatecourses.com/blog/all-about-immutable-arrays-and-objects-in-javascript</a></li>
<li><a href="https://dev.to/glebec/four-ways-to-immutability-in-javascript-3b3l">https://dev.to/glebec/four-ways-to-immutability-in-javascript-3b3l</a></li>
<li><a href="https://www.samanthaming.com/tidbits/50-how-to-deep-clone-an-array/">https://www.samanthaming.com/tidbits/50-how-to-deep-clone-an-array/</a></li>
</ul>
<h3>DESTRUCTURING</h3>
<ul>
<li><a href="https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f">https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f</a></li>
</ul>
<h3>ALGORITHM</h3>
<ul>
<li><a href="https://www.oreilly.com/library/view/high-performance-javascript/9781449382308/ch04.html">https://www.oreilly.com/library/view/high-performance-javascript/9781449382308/ch04.html</a></li>
</ul>
<h3>EVENT LOOP</h3>
<p>Being single-threaded, JS uses the concept of Event Loop to create the idea of running multiple tasks asynchronously. JS code only runs in one thread while JS uses Event Loop to run code asynchronously. The JS Engine is composed of a Call Stack, Heap and a Task Queue.</p>
<ul>
<li>There is a microtask and a macrotask queue. A promise gets added to the microtask queue and a setTimeout to the macrotask queue.</li>
<li>When a microtask is finished, the rest of the microtasks queue gets executed until the microtask queue is empty. Then same for macrotasks.</li>
<li>See also SCHEDULING in rxjs that uses this concept to execute the differents functions and operators.</li>
<li><a href="https://blog.bitsrc.io/microtask-and-macrotask-a-hands-on-approach-5d77050e2168">https://blog.bitsrc.io/microtask-and-macrotask-a-hands-on-approach-5d77050e2168</a></li>
<li><a href="https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/">https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/</a></li>
</ul>
<h3>VALUE VS REFERENCE</h3>
<ul>
<li>
<p>The typeof value assigned to a variable decides whether the value is stored with assign-by-value or assign-by-reference </p>
</li>
<li>
<p>On variable assignment, the scalar primitive values (Number, String, Boolean, undefined, null, Symbol) are assigned-by-value and compound values (Object, Array) are assigned-by-reference</p>
</li>
<li>
<p>In JavaScript, scalar primitive values (Number, String, Boolean, undefined, null, Symbol) are immutable and compound values (Object, Array) are mutable</p>
</li>
<li>
<p><a href="https://www.sitepoint.com/how-javascript-references-work">https://www.sitepoint.com/how-javascript-references-work</a></p>
</li>
<li>
<p><a href="https://medium.com/@naveenkarippai/learning-how-references-work-in-javascript-a066a4e15600">https://medium.com/@naveenkarippai/learning-how-references-work-in-javascript-a066a4e15600</a> ***</p>
</li>
<li>
<p><a href="https://medium.com/front-end-weekly/understanding-pass-by-value-and-pass-by-reference-in-javascript-8e2a0806b175">https://medium.com/front-end-weekly/understanding-pass-by-value-and-pass-by-reference-in-javascript-8e2a0806b175</a></p>
</li>
</ul>
<pre><code class="language-javascript">// example assign-by-value
var batman = 7;
var superman = batman;   // assign-by-value
superman++;
console.log(batman);     // 7
console.log(superman);   // 8

// example assign-by-reference
var flash = [8,8,8];
var quicksilver = flash;   // assign-by-reference
quicksilver.push(0);
console.log(flash);        // [8,8,8,0]
console.log(quicksilver);  // [8,8,8,0]
</code></pre>
<h3>ARRAYS</h3>
<ul>
<li>
<p>use forEach/map/filter/reduce FIRST, only when there's an EXCEPTION do use a for loop. Exceptions include break (can't even remember the last time I used one) or async/await.</p>
</li>
<li>
<p>the best way to turn one Array into another is by using map. Array.map walks through each element in an Array, does something to that element, and gives you a new Array back containing the resulting elements.<br>
On the contrary forEach return void so if you modify the current element is doing a mutation on the array, it mutate the original array directly and thus is only the good approach for doing side effect such as writing the dom or doing an api call. You should not use it when you want to generate or build a value to keep using in your JavaScript code.</p>
</li>
<li>
<p><a href="https://dev.to/ibrahima92/15-must-know-javascript-array-methods-in-2020-1kd8">https://dev.to/ibrahima92/15-must-know-javascript-array-methods-in-2020-1kd8</a></p>
</li>
<li>
<p><a href="https://medium.com/hackernoon/3-javascript-performance-mistakes-you-should-stop-doing-ebf84b9de951">https://medium.com/hackernoon/3-javascript-performance-mistakes-you-should-stop-doing-ebf84b9de951</a></p>
</li>
<li>
<p><a href="https://medium.com/dailyjs/passing-arrays-as-function-arguments-c1f3644ecb9c">https://medium.com/dailyjs/passing-arrays-as-function-arguments-c1f3644ecb9c</a></p>
</li>
<li>
<p><a href="https://vgpena.github.io/js-arrays/#">https://vgpena.github.io/js-arrays/#</a></p>
</li>
</ul>
<h3>IMPURE (avoid)</h3>
<pre><code>fill
pop
push
reverse
shift
sort
splice
unshift
reverse
</code></pre>
<h3>OBJECTS</h3>
<p>An object can be created in 4 ways</p>
<ul>
<li>using object literals => let newObject = {};</li>
<li>using new or constructor => let newObject = new Object();</li>
<li>using Object.create() => let newObject = Object.create( Object.prototype );</li>
<li>using a class => let newObject = new User();</li>
</ul>
<h4>OBJECT LITERALS</h4>
<p>In plain English, an object literal is a comma-separated list of name-value pairs inside of curly braces.<br>
Those values can be properties and functions. Here’s a snippet of an object literal with one property and one function.</p>
<ul>
<li><a href="https://medium.com/better-programming/object-literal-in-javascript-d3e0e7d58f3b">https://medium.com/better-programming/object-literal-in-javascript-d3e0e7d58f3b</a></li>
<li><a href="https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals">https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals</a></li>
</ul>
<pre><code class="language-javascript">let greeting = {
    fullname: "Michael Jackson",
    greet: (message, name) => {
        console.log(message + " " + name + "!!");
    }
};
</code></pre>
<h3>MAPS</h3>
<ul>
<li>A Map is an unordered list of key-value pairs where the key and the value can be of any type like string, boolean, number, etc. For better understanding, we take an example of Map and its properties.</li>
<li>In a Weak Map, every key can only be an object and function or symbol in ES2023. It used to store weak object references. Since WeakMap does not create a strong reference to its keys, it will not prevent the object to be garbage collected.</li>
</ul>
<pre><code class="language-javascript">var k1 = {a: 1};
var k2 = {b: 2};

var map = new Map();
var wm = new WeakMap();

map.set(k1, 'k1');
wm.set(k2, 'k2');

k1 = null;
map.forEach(function (val, key) {
    console.log(key, val); // k1 {a: 1}
});

k2 = null;
wm.get(k2); // undefined
</code></pre>
<ul>
<li>js map vs weakmap: removing k1 from the memory (k1 = null) we can still access it inside the map. At the same time removing k2 (k2 = null) key of WeakMap removes it from wm as well by reference.</li>
<li><a href="https://stackoverflow.com/questions/15604168/whats-the-difference-between-es6-map-and-weakmap">https://stackoverflow.com/questions/15604168/whats-the-difference-between-es6-map-and-weakmap</a></li>
</ul>
<h3>ADVANCED</h3>
<ul>
<li>IIFE</li>
<li>Scope</li>
<li>Hoisting </li>
<li>Callstack</li>
<li>Currying</li>
<li>Callbacks</li>
<li>Promises</li>
<li>Closures</li>
<li>Iterators</li>
<li>Generators</li>
<li>Async await</li>
<li>Type coercion</li>
<li>DOM Manipulation</li>
<li>Prototype inheritance </li>
<li>Understanding "this" keyword</li>
<li>apply(), .call() and .bind()</li>
</ul>
<h3>PROMISE: CREATION</h3>
<pre><code>let promise = new Promise(function(resolve, reject) { 
    resolve(123); // immediately give the result: 123
});
</code></pre>
<h2>PROMISE: ASYNC/AWAIT</h2>
<ul>
<li><a href="https://advancedweb.hu/how-to-use-async-functions-with-array-map-in-javascript/">https://advancedweb.hu/how-to-use-async-functions-with-array-map-in-javascript/</a></li>
<li><a href="https://www.youtube.com/watch?v=GH1jUbALOq0">https://www.youtube.com/watch?v=GH1jUbALOq0</a> Javascript return vs return await (Crucial Difference)</li>
</ul>
<pre><code class="language-javascript">const arr = [1, 2, 3];

// SYNC MAP (RUN IN SERIES)
const syncRes = arr.map((i) => {
    return i + 1;
});
console.log(syncRes);
// 2,3,4

// VS ASYNC MAP (RUN IN PARALLEL)
const asyncRes = await Promise.all(arr.map(async (i) => {
    await sleep(10);
    return i + 1;
}));
console.log(asyncRes);
// 2,3,4

// SYNC/ASYNC FOR OF WITH INDEX (RUN IN SERIES)
for (const [index, item] of someArray.entries()) { await or not }

// 
// ERROR HANDLING
// return without await if you want to let the caller handle the error
// return with await if you want to handle the error locally
myLocalFunc() {
    try {
        return await fetch('http://myapi');
    } catch (error) {
        console.log('local error', error);
    }
}
</code></pre>
<h2>OBSERVER API</h2>
<ul>
<li><a href="https://indepth.dev/observer-apis-in-javascript-part-i/">https://indepth.dev/observer-apis-in-javascript-part-i/</a></li>
<li><a href="https://indepth.dev/observer-apis-in-javascript-part-ii">https://indepth.dev/observer-apis-in-javascript-part-ii</a></li>
</ul>
<h2>PROXY</h2>
<p>Proxies provide a unique way to modify or improve the behavior of existing objects at the lowest level. However, it is not perfect. There are limits. For example, it is not possible to do a comparison (===)with the original object. The proxy is a wrapper around an object, which forwards operations on it to the object, possibly trapping some of them. It can wrap any type of object, including classes and functions. Proxies can catch many operators, such as new (with construct), in (with has), delete (with deleteProperty), etc. One of the most obvious use case is when you can't modify the existing object because it's an external library or a generated code then you can use the proxy to modify or extend this part of the code.</p>
<ul>
<li><a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Proxy">https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Proxy</a></li>
<li><a href="https://www.javascripttutorial.net/javascript-proxy/">https://www.javascripttutorial.net/javascript-proxy/</a></li>
<li><a href="https://www.slideshare.net/BrendanEich/metaprog-5303821">https://www.slideshare.net/BrendanEich/metaprog-5303821</a></li>
<li><a href="https://fr.javascript.info/proxy">https://fr.javascript.info/proxy</a></li>
</ul>
<h2>EXAMPLES</h2>
<h3>OBJECTS</h3>
<p>Useful object methods: keys, values, and entries.</p>
<pre><code class="language-javascript">const data = {
    name: 'Pierre',
    age: 32
}

// Give me the keys in an array
Object.keys(data);
// ['name', 'age']

// Give me the values in an array
Object.values(data);
// ['Pierre', 32]

// Give me the keys and the values in an array (converts an object → array)
const a = Object.entries(data)
// [['name', 'Pierre'], ['age', 32]]

// Give me the key-value pairs in an object. (converts an array → object)
const b = Object.fromEntries(a);
// { name: 'Pierre', age: 32 }

// Filter object properties by key in ES6 (solution 1)
const allowed = ['name'];
const filtered = Object.fromEntries(
   Object.entries(data).filter(([key, val])=> allowed.includes(key))
);
// { name: 'Pierre' }
// Filter object properties by key in ES6  (solution 1)
const filtered = allowed
  .reduce((obj, key) => ({ ...obj, [key]: data[key] }), {});
// { name: 'Pierre' }
</code></pre>
<h3>MERGE</h3>
<p>You can create a new object with condition based on others objects </p>
<pre><code class="language-javascript">const data = {
    ...(myVar1 &#x26;&#x26; { myProperty1: myVar1}),
    ...(myVar2 &#x26;&#x26; { myProperty1: myVar2}),
}
</code></pre>
<h3>DEFINITION</h3>
<ul>
<li>nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. Best practices to use it instead of (||) to provide default value because of the fasly potential issue (eg. '' or 0).</li>
<li>logical nullish assignment (x ??= y) operator only assigns if x is nullish (null or undefined).</li>
<li>logical OR assignment (x ||= y) operator only assigns if x is falsy.</li>
<li>optional chaining operator (?.) permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain. Instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined.</li>
<li>typeof operator returns a string indicating the type of the unevaluated operand; there is only 3 combination possible: "number", "string", "boolean", "object", "function" and "undefined".</li>
<li>non-null assertion operator (myExpr!;) tell the Typescript compiler explicitly that an expression has value other than null or undefined</li>
</ul>
<h3>MEASURE</h3>
<p>console.time('test1');<br>
console.timeEnd('test2);</p>
<h3>EVOLUTION</h3>
<h4>2023</h4>
<ul>
<li><a href="https://github.com/tc39/proposal-temporal">https://github.com/tc39/proposal-temporal</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with</a></li>
</ul>