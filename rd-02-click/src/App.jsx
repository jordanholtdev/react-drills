import { useState } from 'react';
import './App.css';

function App() {
    const [positions, setPos] = useState([]);
    const [poppedPos, setPoppedPos] = useState([]);

    const handleUserClick = (event) => {
        setPos([
            ...positions,
            { clientY: event.clientY, clientX: event.clientX },
        ]);
    };

    const handleUndo = () => {
        const newPoints = [...positions];
        const poppedPoint = newPoints.pop();
        if (!positions) return;
        setPoppedPos([...poppedPos, poppedPoint]);
        setPos(newPoints);
    };

    const handleRedo = () => {
        const newPopped = [...poppedPos];
        const newPos = [...positions];
        const poppedPoint = newPopped.pop();
        if (!poppedPoint) return;
        newPos.push(poppedPoint);
        setPos(newPos);
        setPoppedPos(newPopped);
    };
    return (
        <>
            <button disabled={positions.length === 0} onClick={handleUndo}>
                undo
            </button>
            <button disabled={poppedPos.length === 0} onClick={handleRedo}>
                redo
            </button>
            <div onClick={(e) => handleUserClick(e)} className='App'>
                {positions.map((pos, posIdx) => (
                    <div
                        key={posIdx}
                        className='circle'
                        style={{
                            top: pos.clientY - 10,
                            left: pos.clientX - 10,
                        }}
                    ></div>
                ))}
            </div>
        </>
    );
}

export default App;
