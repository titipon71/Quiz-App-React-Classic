import { useContext } from 'react';
import { DataContext } from './../App';
import QuestionsData from "../data/QuestionsData.js";

const Score  = () => {
    const { score, setScore, setAppMode } = useContext(DataContext);
    const restartApp = () => {
        setScore(0);
        setAppMode("menu");
    }

    return (
        <div className="score">
            <h1>สรุปผลคะแนน</h1>
            <h2>{score} / {QuestionsData.length}</h2>
            <button onClick={restartApp}>ทำแบบทดสอบอีกครั้ง</button>
        </div>
    )
} 

export default Score;