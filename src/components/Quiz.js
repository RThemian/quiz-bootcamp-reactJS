import React, {useState, useContext} from 'react';
import {Questions} from "../Helpers/QuestionBank";
import {QuizContext} from '../Helpers/Contexts';


//for reach question: display prompt, then options, then button to next question
function Quiz() {


const { score, setScore, gameState, setGameState } = useContext(QuizContext);

const [currQuestion, setCurrQuestion] = useState(0);
//option chosen variable to hold onto 

const [optionChosen, setOptionChosen] = useState("");
console.log("OPTION", optionChosen);

const nextQuestion = () => {
  
  if (Questions[currQuestion].answer === optionChosen) {
    setScore(score + 1);
  }
  setCurrQuestion(currQuestion + 1);
}

const finishQuiz = () => {
  if (Questions[currQuestion].answer === optionChosen) {
    setScore(score + 1);
  }
  setGameState("endScreen");

}






  return (
    <div className = "Quiz" >
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className='options'>
        <h4>Running Score {score ? score : 0}</h4>
        <button id = "btn" onClick ={(event) => 
          setOptionChosen("A")
      }> 
          {Questions[currQuestion].optionA}{" "} </button>
        <button id = "btn" onClick ={() => setOptionChosen("B")}> 
          {Questions[currQuestion].optionB}{" "} </button>
        <button id = "btn" onClick ={() => setOptionChosen("C")}> 
          {Questions[currQuestion].optionC}{" "} </button>
        <button id = "btn" onClick ={() => setOptionChosen("D")}> 
          {Questions[currQuestion].optionD}{" "} </button>

      {currQuestion == Questions.length - 1 ? (
        <button onClick = {finishQuiz}>Finish Quiz</button> ) 
        : ( <button onClick = {nextQuestion}>Next Question</button> ) 
    }

        
      </div>
    </div>
  )
}

export default Quiz