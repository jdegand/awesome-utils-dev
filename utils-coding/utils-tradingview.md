<h1>TRADINGVIEW CHEATSHEET</h1>
<h2>People</h2>
<ul>
<li><a href="https://github.com/alexgrover">https://github.com/alexgrover</a></li>
</ul>
<h2>libraries</h2>
<ul>
<li><a href="https://youtu.be/r8j6Fp2CkzY">https://youtu.be/r8j6Fp2CkzY</a> 5 Useful Libraries for TradingView</li>
<li>Zen Library: <a href="https://www.tradingview.com/script/yUWPxUBt-ZenLibrary">https://www.tradingview.com/script/yUWPxUBt-ZenLibrary</a></li>
<li>Strategy Library: <a href="https://www.tradingview.com/script/mCOgJC67-Strategy">https://www.tradingview.com/script/mCOgJC67-Strategy</a></li>
<li>TA Library: <a href="https://www.tradingview.com/script/BICzyhq0-ta">https://www.tradingview.com/script/BICzyhq0-ta</a></li>
<li>Visible Chart Library: <a href="https://www.tradingview.com/script/j7vCseM2-VisibleChart">https://www.tradingview.com/script/j7vCseM2-VisibleChart</a></li>
<li>Time Library: <a href="https://www.tradingview.com/script/tyeeNU9I-Time">https://www.tradingview.com/script/tyeeNU9I-Time</a></li>
<li>Panda TA: <a href="https://www.tradingview.com/script/knItv1rm/">https://www.tradingview.com/script/knItv1rm/</a></li>
</ul>
<h2>Tools</h2>
<ul>
<li><a href="https://github.com/TreborNamor/TradingView-Machine-Learning-GUI">https://github.com/TreborNamor/TradingView-Machine-Learning-GUI</a></li>
</ul>
<h2>samples</h2>
<ul>
<li><a href="https://courses.theartoftrading.com/pages/pine-script-mastery-code">https://courses.theartoftrading.com/pages/pine-script-mastery-code</a></li>
</ul>
<h2>Important notes</h2>
<ul>
<li>Even with indicator in a different panel than the price chart it's now possible to plot some data in the price chart using the force_overlay feature</li>
<li>When using strategy.entry(...) hedging and scaling is desactivated so when you enter a long position then short will automatically be closed and vice versa. Also you have only one position on the same order ID because scaling is desactivated even if the entry condition is met multiple times only one position is opened</li>
<li>If you want to have the same strategy long and short positons opened at the same time you need to use strategy.order(...) but takes care here to manage the pyramiding because if the entry condition is met multiple times position will be increased</li>
</ul>
<h2>notes links</h2>
<ul>
<li><a href="https://www.tradingcode.net/tradingview/strategy-entry-function/">https://www.tradingcode.net/tradingview/strategy-entry-function/</a></li>
<li><a href="https://www.tradingcode.net/tradingview/strategy-order-function/">https://www.tradingcode.net/tradingview/strategy-order-function/</a></li>
<li><a href="https://www.tradingcode.net/tradingview/pyramiding-strategy-orders/">https://www.tradingcode.net/tradingview/pyramiding-strategy-orders/</a></li>
<li><a href="https://stackoverflow.com/questions/73715428/pine-script-short-position-automatically-closed-when-next-long-position-trigger">https://stackoverflow.com/questions/73715428/pine-script-short-position-automatically-closed-when-next-long-position-trigger</a></li>
<li><a href="https://stackoverflow.com/questions/69677670/pine-script-strategy-with-long-and-short-trades-at-the-same-time">https://stackoverflow.com/questions/69677670/pine-script-strategy-with-long-and-short-trades-at-the-same-time</a></li>
<li><a href="https://stackoverflow.com/questions/69478094/what-is-the-difference-between-strategy-order-and-strategy-entry">https://stackoverflow.com/questions/69478094/what-is-the-difference-between-strategy-order-and-strategy-entry</a></li>
</ul>