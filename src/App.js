import React, { useState } from &#39;react&#39;;
import &#39;./App.css&#39;;
import &#39;./paris style.css&#39;
const answers = [
&quot;It is certain&quot;,
&quot;Without a doubt&quot;,
&quot;You may rely on it&quot;,
&quot;Yes definitely&quot;,
&quot;It is decidedly so&quot;,
&quot;As I see it, yes&quot;,
&quot;Most likely&quot;,
&quot;Yes&quot;,
&quot;Outlook good&quot;,
&quot;Signs point to yes&quot;,
&quot;Reply hazy try again&quot;,
&quot;Better not tell you now&quot;,
&quot;Ask again later&quot;,
&quot;Cannot predict now&quot;,
&quot;Concentrate and ask again&quot;,
&quot;Don&#39;t count on it&quot;,
&quot;Outlook not so good&quot;,
&quot;My sources say no&quot;,
&quot;Very doubtful&quot;,
&quot;My reply is no&quot;
];
function App() {
const [answer, setAnswer] = useState(&quot;Shake the ball!&quot;);
const shakeBall = () =&gt; {
const randomIndex = Math.floor(Math.random() * answers.length);
setAnswer(answers[randomIndex]);
};
return (
&lt;div className=&quot;App&quot;&gt;
&lt;h1&gt;Magic 8 Ball&lt;/h1&gt;
&lt;button onClick={shakeBall}&gt;
{answer &amp;&amp; (
&lt;div className=&quot;answer&quot;&gt;
{answer}
&lt;/div&gt;
)}
&lt;/button&gt;
&lt;/div&gt;
);
}
export default App;
