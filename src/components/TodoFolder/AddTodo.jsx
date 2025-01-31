import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <form className='inputBox' onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Lägg till en uppgift..."
            />
            <button className='addBtn' type="submit">Lägg till</button>
        </form>
    );
};

export default AddTodo;