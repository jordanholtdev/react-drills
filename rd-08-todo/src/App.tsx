import React, { useState } from 'react';
import Form from './components/Form';
import TodoCard from './components/TodoCard';
import './App.css';

function App() {
    const [todos, setTodos] = useState(['feed cat']);
    const [completedTodos, setCompletedTodos] = useState(Array);

    const onTodoSubmit = (draft: string) => {
        setTodos([...todos, draft]);
    };

    const markComplete = (done: string) => {
        const updatedCompleteTodos = todos.filter((item) => item !== done);
        setCompletedTodos([...completedTodos, done]);
        setTodos([...updatedCompleteTodos]);
    };

    const markIncomplete = (notDone: string) => {
        // write incomplete logic
        console.log('marked incomplete');
        const updatedTodos = completedTodos.filter((item) => item !== notDone);
    };

    return (
        <div className="App">
            <h1>To Do App</h1>
            <h3>To Dos</h3>
            <ul>
                {todos.map((todo, todoIdx) => (
                    <TodoCard
                        todoItem={todo}
                        key={todoIdx}
                        isComplete={markComplete}
                        status={false}
                    />
                ))}
            </ul>
            <Form onSubmit={onTodoSubmit} />
            {completedTodos.length !== 0 ? (
                <div>
                    <h3>Completed Tasks:</h3>
                    <ul>
                        {completedTodos.map((complete: any, i) => (
                            <TodoCard
                                todoItem={complete}
                                key={i}
                                isComplete={markIncomplete}
                                status={true}
                            />
                        ))}
                    </ul>
                </div>
            ) : null}
        </div>
    );
}

export default App;
