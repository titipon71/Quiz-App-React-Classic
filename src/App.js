// import logo from './logo.svg';
import './App.css';
import { useState , createContext } from 'react';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import Score from './components/Score';

export const DataContext =  createContext();

function App() {
  const [appMode , setAppMode] = useState("menu");
      const [score, setScore] = useState(0);

  return (

    <DataContext.Provider value={{appMode ,setAppMode, score, setScore}}>
    <div className='App'>
      <h1>Web Development Quiz</h1>
      {appMode === "menu" && <Menu />}
      {appMode === "quiz" && <Quiz />}
      {appMode === "score" && <Score />}
    </div>
    </DataContext.Provider>
  );
}

export default App;
