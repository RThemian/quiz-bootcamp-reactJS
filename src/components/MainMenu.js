import React, {useContext} from 'react';
import {QuizContext} from '../Helpers/Contexts';
import "../App.css";


function MainMenu() {

//click button to change gameState to quiz mode
//so state must accessible to all children components

const {gameState, setGameState} = useContext(QuizContext);

  return (
    <div className = "Menu">
        <button onClick = {() => {setGameState("quiz")}} >Start Quiz</button>
    </div>
  )
}

export default MainMenu