<h1>TRADINGVIEW PINESCRIPT CODE</h1>
<h2>Generic onliner</h2>
<pre><code class="language-javascript">getPos() => strategy.position_size
isIn() => strategy.position_size != 0
isFlat() => strategy.position_size == 0
isLong() => strategy.position_size > 0
isShort() => strategy.position_size &#x3C; 0
isNotLong() => strategy.position_size &#x3C;= 0
isNotShort() => strategy.position_size >= 0
</code></pre>
<h2>Generic multiline</h2>
<pre><code class="language-javascript">formatBigNumber(num) =>
    var string formattedNum=na
    if num >= 1000000000
        formattedNum := str.tostring(math.round(num/1000000000, 2)) + "B"
    else if num >= 1000000
        formattedNum := str.tostring(math.round(num/1000000, 2)) + "M"
    else if num >= 1000
        formattedNum := str.tostring(math.round(num/1000, 2)) + "K"
    else
        formattedNum := str.tostring(num)
    formattedNum

calcPosSize(riskPerc, usePosSize) =>
    riskEquity  = (riskPerc / 100) * strategy.equity
    atrCurrency = (ta.atr(20) * syminfo.pointvalue)
    posSizeInit = usePosSize ? math.floor(riskEquity / atrCurrency) : 1
    posSize = posSizeInit > 1000000000 ? 1000000000 : posSizeInit &#x3C; 0 ? 1 : posSizeInit
    posSize
</code></pre>
<h2>Exit after x bars in trade</h2>
<pre><code class="language-javascript">exitLongAfterBars = input.int(title="Exit Long After N bars", defval=15, minval=1) 
exitShortAfterBars = input.int(title="Exit Short After N bars", defval=15, minval=1)

condLong = false // add here your logic
condShort = false // add here your logic
condEnterLong = isNotLong() and condLong
condEnterShort = isNotShort() and condShort
condExitLong = isLong() and ta.barssince(condEnterLong) >= exitLongAfterBars -1 
condExitShort = isShort() and ta.barssince(condEnterShort) >= exitShortAfterBars -1
</code></pre>
<h2>Exit after x percent gains in trade</h2>
<pre><code class="language-javascript">exitLongAfterPercents = input.float(title="Close Long After X Percents", defval=3, minval=1)
exitShortAfterPercents = input.float(title="Close Short After X Percents", defval=3, minval=1)

lastEntryPrice = strategy.opentrades.entry_price(strategy.opentrades - 1)
currentPosPercent = isLong() ? ((close - lastEntryPrice) / lastEntryPrice) * 100 : isShort() ? ((lastEntryPrice - close) / close) * 100 : 0
condExitLong = isLong() and currentPosPercent >= exitLongAfterPercents
condExitShort = isShort() and currentPosPercent >= exitShortAfterPercents

// exemple to get the DCA price: https://www.tradingcode.net/tradingview/open-trade-entry-price/
// exemple to get the entry ID (L1 / S1) can be used to get the info of a specific trade
// https://www.tradingcode.net/tradingview/open-order-identifier/
</code></pre>
<h2>Multi time frame calculation</h2>
<pre><code class="language-javascript">// Define custom security function
f_sec(_market, _res, _exp) => request.security(_market, _res, _exp[barstate.isrealtime ? 1 : 0])[barstate.isrealtime ? 0 : 1]

// Get EMA values
ema = ta.ema(close, len)
emaValue1 = f_sec(market, res1, ema)
emaValue2= f_sec(market, res2, ema)
emaValue3 = f_sec(market, res3, ema)
</code></pre>
<h2>Multi time frame DAILY OHLC</h2>
<p>[do,dh,dl] = request.security(syminfo.tickerid, 'D', [open, high, low], lookahead=barmerge.lookahead_on)<br>
plot(dh, title="High", color=color.red,    linewidth=2, trackprice=true)<br>
plot(do, title="Open", color=color.yellow, linewidth=2, trackprice=true)<br>
plot(dl, title="Low",  color=color.green,  linewidth=2, trackprice=true)</p>
<h2>Multi Moving average function</h2>
<pre><code class="language-javascript">maType = input.string('WMA', options = ['EMA','HMA','WMA','SMA','RMA'])

ma(type, source, length) =>
    switch type
        'SMA'   =>    ta.sma(source, length)
        'EMA'   =>    ta.ema(source, length)
        'WMA'   =>    ta.wma(source, length)
        'HMA'   =>    ta.hma(source, length)
        'RMA'   =>    ta.rma(source, length)
</code></pre>
<h2>UDT / User defined types</h2>
<p>all primitives used in User defined types become automatically a series. so if you need a primitive an alternative is to use a caching mechanism to set and get variables, here a library that provides a simple caching solution in pinescript: <a href="https://www.tradingview.com/script/f2ibenEK-cache/">https://www.tradingview.com/script/f2ibenEK-cache/</a></p>
<pre><code class="language-javascript">type TDetail
    int oneThing
    int anotherThing
//
// This has a collection of TDetail objects.
type TMaster
    TDetail details = na
    string another = ''
//
// Some sort of factory function.
createMaster() =>
    TMaster result = TMaster.new(details=TDetail.new(0,0), another = 'OK')
    (result)
//
// Initialize the master object only once.
var TMaster master = createMaster()
test = master.details.anotherThing // /!\ this is a series but we dont want that
test2 = master.another // /!\ this is a series but we dont want that
</code></pre>
<h2>VARIOUS</h2>
<p>// Equity line<br>
plot(title="Equity Line", series=strategy.equity, trackprice=true, display=display.data_window, color=color.red)<br>
// <a href="https://docs.google.com/document/d/1WsYr45NKv93pwGp23fCa36ePvuOS8dhWxAaUTaSYwe0/edit?tab=t.0#heading=h.e6xd5j1f043x">https://docs.google.com/document/d/1WsYr45NKv93pwGp23fCa36ePvuOS8dhWxAaUTaSYwe0/edit?tab=t.0#heading=h.e6xd5j1f043x</a></p>