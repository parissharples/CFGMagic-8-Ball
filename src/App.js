import React, { useState } from 'react';
import './App.css';

const answers = [
  "It is certain",
  "Without a doubt",
  "You may rely on it",
  "Yes definitely",
  "It is decidedly so",
  "As I see it, yes",
  "Most likely",
  "Yes",
  "Outlook good",
  "Signs point to yes",
  "Reply hazy try again",
  "Better not tell you now",
  "Ask again later",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "Outlook not so good",
  "My sources say no",
  "Very doubtful",
  "My reply is no"
];

function App() {
  const [answer, setAnswer] = useState("");

  const shakeBall = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    setAnswer(answers[randomIndex]);
  };

  return (
    <div className="App">
      <h1>Magic 8 Ball</h1>
      <button onClick={shakeBall}>Shake the ball!</button>
      {answer && (
        <div className="answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default App;