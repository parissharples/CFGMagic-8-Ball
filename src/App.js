import React, { useState, useEffect } from 'react';
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
  const [answer, setAnswer] = useState('Shake the ball!');
  const [question, setQuestion] = useState('');
  const [playSound, setPlaySound] = useState(false);

  const shakeBall = () => {
    if (question === '') {
      setPlaySound(true);
      return;
    }
    const randomIndex = Math.floor(Math.random() * answers.length);
    const answer = answers[randomIndex];
    setAnswer(answer);
  };

  useEffect(() => {
    if (playSound) {
      const alertSound = document.getElementById('alert');
      alertSound.play();
      setPlaySound(false);
    }
  }, [playSound]);

  return (
    <div className='App'>
      <div className='boxyBox'></div>

      <h1>Magic 8 Ball</h1>
      <p>Ask a yes or no question and click the button to get your answer!</p>
      <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
      <button onClick={shakeBall} disabled={!question}>
        {answer && (
          <div className='answer'>
            {answer}
          </div>
        )}
      </button>
      <div className='boxyBox'></div>

      <audio id="alert" src="https://drive.google.com/file/d/1lheLqs5kYt4T0Y9NYjEBr6XCV7IdIGmY/view?usp=share_link"></audio>
    </div>
  );
}

export default App;
