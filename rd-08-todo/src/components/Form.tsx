import { useState } from 'react';

const Form = (props: { onSubmit: Function }) => {
    const [draft, setDraft] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (draft.length !== 0) props.onSubmit(draft);
        setDraft('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="+ Add task"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                minLength={2}
                required={true}
            />
            <button>Add</button>
        </form>
    );
};

export default Form;
