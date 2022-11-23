import { useState } from 'react';
import { fetchRhymes } from './api/fetchRhymes';
import { useGetRhymes } from './hooks/useGetRhymes';
import './App.css';

function App() {
    const [word, setWord] = useState('');
    const { isLoading, rhymeList, getRhymes } = useGetRhymes();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        getRhymes(word);
    };

    const handleRhymeClick = (newWord) => {
        setWord(newWord);
        getRhymes(word);
    };
    return (
        <div className='App'>
            <h1>Word Rhyme</h1>
            <p id='input-desc'>
                Enter a word to search for words that "perfectly" rhyme.
            </p>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor='word-input'>
                    Word:
                    <input
                        type='text'
                        id='word-input'
                        aria-describedby='input-desc'
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                </label>
                <button>Submit</button>
            </form>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <ul>
                    {rhymeList.map((rhyme, idx) => (
                        <li
                            onClick={() => handleRhymeClick(rhyme.word)}
                            key={idx}
                        >
                            {rhyme.word}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default App;
