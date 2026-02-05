import { useContext } from 'react';
import { DataContext } from '../App';

const Menu  = () => {
    const { setAppMode } = useContext(DataContext);
    return (
        <div className="menu">
            <h1>Menu Component</h1>
            <button onClick={() => setAppMode("quiz")}>เริ่มทำแบบข้อสอบ</button>  
        </div>
    )
} 

export default Menu;