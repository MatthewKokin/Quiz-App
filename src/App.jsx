import { useState, useEffect } from 'react';
import './App.css';
import Quiz from './Quiz/Quiz.jsx';
import Start from './Start/Start.jsx';

function App() {
  //-------------------Ititialising the quiz-------------------//
  const [isStarted, setIsStarted] = useState(false)
  const [quizData, setQuizData] = useState(null)
  
  function toggle(){
    setIsStarted(oldState => !oldState)  
  }
  //-----------------------------------------------------------//

  useEffect(() => {
    if (isStarted) {
      fetch('https://opentdb.com/api.php?amount=4&difficulty=easy&type=multiple')
        .then(res => res.json())
        .then(data => {
          console.log(data.results)
          return setQuizData(data.results)});
    }
  }, [isStarted]);

  return (
    !isStarted? <Start handleStartClick={toggle}/>: <Quiz quizData={quizData} />
  )
}

export default App;
