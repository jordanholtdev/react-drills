import { useState } from 'react';

const SearchBar = (props: { onSubmit: Function }) => {
    const [term, setTerm] = useState('cats');

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSubmit(term);
    };
    return (
        <div>
            <form onSubmit={onFormSubmit} id='search' role='search'>
                <label form='search-image'>Image Search: </label>
                <input
                    name='search'
                    id='search-input'
                    spellCheck='false'
                    type='search'
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                ></input>
            </form>
        </div>
    );
};

export default SearchBar;
