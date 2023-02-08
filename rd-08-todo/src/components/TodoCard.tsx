import { useState } from 'react';
import '../App.css';

const TodoCard = (props: { todoItem: String; isComplete: Function, taskStatus: String, cardStyle: String }) => {
    const handleOnClick = () => {
        props.isComplete(props.todoItem);
    };
    return (
        <li>
            <div className={`card ${props.cardStyle}`}>
                <p>{props.todoItem}</p>
                <button onClick={handleOnClick}>{props.taskStatus}</button>
            </div>
        </li>
    );
};

export default TodoCard;
