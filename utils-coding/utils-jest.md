<h1>Jest</h1>
<h1>Books</h1>
<ul>
<li><a href="https://jesthandbook.com/">https://jesthandbook.com/</a></li>
</ul>
<h2>Mocks</h2>
<ul>
<li>if you need a dumb dependency injected by your file under test then use a partial pattern so you mock only myFunction if you need it. example: const mockedMyService: Partial = { myFunction = jest.fn() }; so now you can create a spy on myFunction and then do assertion on it. example myFunctionSpy = jest.spyOn(mockedMyService, 'myFunction') and finally expect(myFunctionSpy).toHaveBeenCalledTimes(1).</li>
<li>if you want to keep the original function implementation and be aware if the function is called then you can use jest.spyOn on a real function instead of jest.fn() function.</li>
<li>with jest.fn() you can also replace the original function implementation using different ways: mockImplementation, mockReturnValue, mockReturnValueOnce, mock...</li>
</ul>
<h2>Mocks</h2>
<ul>
<li>Jest has an auto-mock function, it seems right to use this: jest.mock only with static class or with external dependencies compiled in ESM. Indeed the big dris method is more verbose, harder to maintain and slower compared to a simple partial empty objects.</li>
</ul>
<pre><code class="language-javascript">jest.mock('./static-helper');
jest.mock('swiper', () => ({ use: jest.fn() })); // if you don't need anything back
jest.mock('swiper', () => ({ use: jest.fn().mockReturnValue(true) })); // to mock a plain function
jest.mock('swiper', () => ({ use: jest.fn().mockResolvedValue(true) })); // to mock a promise function
</code></pre>
<ul>
<li>This automock function described above (jest.mock('lib/module')) can be very useful with barrel import because else jest will load everything from the barrel file; so instead with this you mock the dependencies imported by the file inside your module. but you still need to define manually the mocked service using jest.MockedClass + functions prototype used with jest.fn()</li>
</ul>
<pre><code class="language-javascript">const MockedStaticHelper = StaticHelper as jest.MockedClass&#x3C;typeof StaticHelper>;
MockedStaticHelper.displayThing = jest.fn().mockReturnValue(true);
</code></pre>
<ul>
<li>You can also spy specific function of a static class like singleton using jest.spyOn(MyAPI.api(), 'myFeature').mockAndReturnValue(myMockedFeature)</li>
<li>You can also mock entire libraries by mapping in the jest preset to a file, see jest.preset.js:</li>
<li>Mock files: <a href="https://stackoverflow.com/questions/49685265/jest-mock-user-module-in-all-test-files">https://stackoverflow.com/questions/49685265/jest-mock-user-module-in-all-test-files</a></li>
<li>Mock mores: <a href="https://www.lucasamos.dev/articles/jestselectivemocking">https://www.lucasamos.dev/articles/jestselectivemocking</a></li>
</ul>
<p>You can also mock to return different results on each call using mockReturnValueOnce</p>
<pre><code class="language-javascript">myMock
  .mockReturnValueOnce(10) // return 10 on the first call
  .mockReturnValueOnce('x') // return 'x' on the second call
  .mockReturnValue(true); // return true anytime after that
</code></pre>
<p>If you need more options you can use jest-when to return specific response based on the function parameter</p>
<pre><code class="language-javascript">when(fn).calledWith(1).mockReturnValue('yay!')
</code></pre>
<p>Another case is the Selective mocking or module functions:</p>
<pre><code class="language-javascript">import { functionOne, functionTwo } from '../src/functions';

jest.mock('../src/functions', () => {
  const originalModule = jest.requireActual('../src/functions');

  return {
    __esModule: true,
    ...originalModule,
    functionTwo: jest.fn(() => 'functionTwo mocked implementation'),
  };
});

test('function one', () => {
  expect(functionOne()).toEqual('functionOne original implementation');
});

test('function two', () => {
  expect(functionTwo()).toEqual('functionTwo mocked implementation');
});
</code></pre>
<h2>Expect</h2>
<p>example to check the arguments that the mock has been called with</p>
<pre><code class="language-javascript">expect(mock).toHaveBeenNthCalledWith(1, '1st call args'); // called with '1st call args' the first time 
expect(mock).toHaveBeenNthCalledWith(2, '2nd call arg 1', '2nd call arg 2'); // called with '2nd call arg 1' and '2nd call arg 2' the second time
</code></pre>
<p>exemple how to check that an object contains a property with another object</p>
<pre><code class="language-javascript">expect(state.active.active).toEqual(true)
expect(state.active.data).toEqual(expect.any(Array))
expect(state.active.ID).toEqual(expect.any(String))
expect(state).toEqual(expect.objectContaining({ myProp: expect.any(Object)}))
expect(state.active).toMatchObject({
    active: true,
    data: expect.any(Array),
    ID: expect.any(String)
});
</code></pre>
<h2>Articles</h2>
<ul>
<li><a href="https://github.com/facebook/jest/issues/936">https://github.com/facebook/jest/issues/936</a></li>
<li><a href="https://www.emgoto.com/mocking-with-jest/">https://www.emgoto.com/mocking-with-jest/</a></li>
<li><a href="https://www.automasean.blog/js-testing-practices/">https://www.automasean.blog/js-testing-practices/</a></li>
<li><a href="https://codewithhugo.com/jest-mock-spy-module-import/">https://codewithhugo.com/jest-mock-spy-module-import/</a></li>
<li><a href="https://generic-ui.com/blog/mocking-dependencies-in-angular">https://generic-ui.com/blog/mocking-dependencies-in-angular</a></li>
<li><a href="https://indepth.dev/posts/1240/create-your-angular-unit-test-spies-automagically">https://indepth.dev/posts/1240/create-your-angular-unit-test-spies-automagically</a></li>
<li><a href="https://ordina-jworks.github.io/testing/2018/08/03/testing-angular-with-jest.html">https://ordina-jworks.github.io/testing/2018/08/03/testing-angular-with-jest.html</a></li>
<li><a href="https://www.strv.com/blog/quickest-simplest-way-mocking-module-dependencies-jest-engineering">https://www.strv.com/blog/quickest-simplest-way-mocking-module-dependencies-jest-engineering</a></li>
</ul>
<h3>Barrel</h3>
<ul>
<li>
<p><a href="https://github.com/nrwl/nx/pull/12764">https://github.com/nrwl/nx/pull/12764</a></p>
</li>
<li>
<p><a href="https://github.com/facebook/jest/issues/11234">https://github.com/facebook/jest/issues/11234</a></p>
</li>
<li>
<p><a href="https://github.com/gilamran/fast-jest-with-esbuild">https://github.com/gilamran/fast-jest-with-esbuild</a></p>
</li>
<li>
<p><a href="https://github.com/dsmalik/ts-barrel-import-transformer">https://github.com/dsmalik/ts-barrel-import-transformer</a></p>
</li>
<li>
<p><a href="https://stackoverflow.com/questions/63853066/lazy-load-imports-from-barrel-file-in-jest">https://stackoverflow.com/questions/63853066/lazy-load-imports-from-barrel-file-in-jest</a></p>
</li>
<li>
<p>use esbuild to merge all the tests of the lib into a file</p>
</li>
<li>
<p>use a jest transformer to convert to file import</p>
</li>
<li>
<p>use a mock generation script to map to the correct file</p>
</li>
<li>
<p>map case by case manually to the right file (only necessary)</p>
</li>
<li>
<p>use a secondary entry points for jest (link index-jest in jest.preset)</p>
</li>
<li>
<p>use NX_BATCH_MODE true to run test in batch</p>
</li>
</ul>