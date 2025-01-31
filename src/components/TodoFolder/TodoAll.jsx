import TodoList from './TodoList.jsx';
import AddTodo from './AddTodo.jsx';

function TodoAll() {
    return (
        <div className="app-container">
            <div className="app">
                <h1>To-Do List</h1>
                <AddTodo />
                <TodoList />
            </div>
        </div>
    );
}

export default TodoAll;