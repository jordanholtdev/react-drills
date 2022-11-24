import { useState } from 'react';
import './App.css';

type TCell = {
    row: number;
    col: number;
};

function App() {
    const [grid, setGrid] = useState([
        [1, 5, 4, 7],
        [3, 8, 2, 6],
        [7, 3, 1, 8],
        [6, 2, 4, 5],
    ]);

    const [visibleGrid, setVisibileGrid] = useState(
        new Array(grid.length)
            .fill('')
            .map(() => new Array(grid[0].length).fill(false))
    );

    const [previousClick, setPreviousClick] = useState<TCell | undefined>();

    const handleCardClick = (rowIdx: number, colIdx: number) => {
        if (visibleGrid[rowIdx][colIdx]) return;
        // store clicked number
        const clickedNumber = grid[rowIdx][colIdx];

        // reveal the card
        const newRevealedGrid = [...visibleGrid];
        newRevealedGrid[rowIdx][colIdx] = true;
        // track which card has already been clicked

        if (previousClick) {
            const previousClickedNumber =
                grid[previousClick.row][previousClick.col];
            // second click of the 2 clicks / guesses

            if (previousClickedNumber !== clickedNumber) {
                // if they don't match, hide them
                setTimeout(() => {
                    newRevealedGrid[rowIdx][colIdx] = false;
                    newRevealedGrid[previousClick.row][previousClick.col] =
                        false;
                    // hide the first click
                    setVisibileGrid(newRevealedGrid);
                }, 1000);
            } else {
                // check if all numbers have been revealed, and show alert
                const hasWon = visibleGrid
                    .flat()
                    .every((isRevealed) => isRevealed);
                if (hasWon) {
                    alert('you have won');
                }
            }
            setPreviousClick(undefined);
        } else {
            setPreviousClick({
                row: rowIdx,
                col: colIdx,
            });
        }
    };

    return (
        <div className='App'>
            <div className='wrapper'>
                {grid.map((row, rowIdx) => (
                    <div key={rowIdx} className='grid-row'>
                        {row.map((num, collIdx) => (
                            <div
                                key={collIdx}
                                className='card'
                                onClick={() => handleCardClick(rowIdx, collIdx)}
                            >
                                {visibleGrid[rowIdx][collIdx] ? num : ' '}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
