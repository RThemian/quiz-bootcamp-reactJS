import React, {useState, useContext} from 'react';
import './App.css';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import {QuizContext} from './Helpers/Contexts';

function App() {

  //quiz app has 3 states: menu, question, end score
  // initial state is menu
  const [gameState, setGameState] = useState("menu");
  //if gameState is menu, display MainMenu component

  //create context variable AKA global state

  const [score, setScore] = useState(0);
console.log("GAMESTATE", gameState)




  return (
    <div className="App">
      {" "}
      <h1>Quiz App</h1>
    
      <QuizContext.Provider value ={{ gameState, setGameState, score, setScore }} >
      {gameState === "menu" && <MainMenu />}
      {gameState === "quiz" && <Quiz />}
      {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
     
      
    </div>
  );
}

export default App;
