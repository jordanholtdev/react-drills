import React, { useState } from 'react';
import Form from './components/Form';
import TodoCard from './components/TodoCard';
import './App.css';

function App() {
    const [todos, setTodos] = useState(['feed cat']);
    const [completedTodos, setCompletedTodos] = useState(Array<string>);

    const onTodoSubmit = (draft: string) => {
        setTodos([...todos, draft]);
    };

    // logic to mark a task complete
    const markComplete = (done: string) => {
        const updatedCompleteTodos = todos.filter((item) => item !== done);
        setCompletedTodos([...completedTodos, done]);
        setTodos([...updatedCompleteTodos]);
    };

    // logic to mark a task incomplete
    const markIncomplete = (notDone: string) => {
        console.log('marked incomplete');
        const updatedTodos: string[] = completedTodos.filter(
            (item) => item !== notDone
        );
        setTodos([...todos, notDone]);
        setCompletedTodos([...updatedTodos]);
    };

    return (
        <div className="App">
            <h1>To Do Application</h1>
            <p>Add to dos and keep track of their progress.</p>
            <Form onSubmit={onTodoSubmit} />
            <h3>To Dos</h3>
            <ul>
                {todos.map((todo, todoIdx) => (
                    <TodoCard
                        todoItem={todo}
                        key={todoIdx}
                        isComplete={markComplete}
                        taskStatus={"Mark complete"}
                        cardStyle={"incomplete"}
                    />
                ))}
            </ul>
            {completedTodos.length !== 0 ? (
                <div>
                    <h3>Completed Tasks:</h3>
                    <ul>
                        {completedTodos.map((complete: any, i) => (
                            <TodoCard
                                todoItem={complete}
                                key={i}
                                isComplete={markIncomplete}
                                taskStatus={"Mark incomplete"}
                                cardStyle={"complete"}
                            />
                        ))}
                    </ul>
                </div>
            ) : null}
        </div>
    );
}

export default App;
