import { useState } from 'react';

const Form = (props: { onSubmit: Function }) => {
    const [draft, setDraft] = useState('Cook dinner');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSubmit(draft);
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter Todo:
                <input
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                />
            </label>
            <button>Add</button>
        </form>
    );
};

export default Form;
