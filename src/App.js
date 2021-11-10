import React, { useState, useEffect } from 'react';
import './App.css';
import StartPage from './components/StartPage';
import Question from './components/Question';
import quizData from './data/quiz.json';
import FinalPage from './components/FinalPage';

let interval;

const App = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if(step === 3){
      clearInterval(interval);
    }
  }, [step])

  const quizStart = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000)
  }

  const resetClick = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000)
  }

  return (
    <div className="App">
      {step === 1 && <StartPage onStart={quizStart} />}
      {step === 2 && <Question 
        data={quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 3 && <FinalPage 
        results={answers}
        data={quizData.data}
        onReset={resetClick}
        time={time}
      />}
    </div>
  );
}

export default App;
