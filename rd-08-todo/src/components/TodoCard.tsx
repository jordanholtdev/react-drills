import '../App.css';

const TodoCard = (props: { todoItem: String; isComplete: Function, status: boolean }) => {
    return (
        <li>
            <div className="card">
                <input
                    type={'radio'}
                    onClick={(e) => props.isComplete(props.todoItem)}
                    value="complete"
                    defaultChecked={props.status}
                />
                <p>{props.todoItem}</p>
            </div>
        </li>
    );
};

export default TodoCard;
