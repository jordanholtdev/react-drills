import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [incrementAmount, setIncrementAmount] = useState(50)

    const increment = () => {
        setCount(count + incrementAmount)
    }

    const descrement = () => {
        setCount(count - incrementAmount)
    }

    const handleIncrementAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const num = Number(e.target.value)
        setIncrementAmount(num)
    }

    const handleReset = () => {
        setCount(0)
        setIncrementAmount(50)
    }

    return (
        <div className="App">
            <h1>Counter Application</h1>
            <p>Application that counts by a specified value.</p>
            <div>
                <label htmlFor="incrementRange">
                    Increment/decrement amount:
                </label>
                <input
                    type="range"
                    min={1}
                    max={100}
                    onChange={handleIncrementAmount}
                    step={1}
                    id="incrementRange"
                    value={incrementAmount}
                />
            </div>
            <p>{incrementAmount}</p>
            <button onClick={descrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
            <p>{count}</p>
            <button onClick={handleReset}>Reset Counter</button>
        </div>
    )
}

export default App
