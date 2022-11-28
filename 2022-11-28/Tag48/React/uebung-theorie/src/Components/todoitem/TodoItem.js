import "./TodoItem.css";

function TodoItem(props) {
    return(
        <div>
            <span>{props.desciption}</span>
            <input type="checkbox" checked={props.done} />
            <span>: {props.importance}</span>
        </div>
    )
}

export default TodoItem;