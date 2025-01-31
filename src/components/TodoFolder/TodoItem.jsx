import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/todoSlice.jsx';

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <li>
            <span
                onClick={() => dispatch(toggleTodo(todo.id))}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
                {todo.text}
            </span>
            <button className='deleteBtn' onClick={() => dispatch(deleteTodo(todo.id))}>Ta bort</button>
        </li>
    );
};

export default TodoItem;