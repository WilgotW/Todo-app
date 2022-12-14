import React, { useState } from 'react'
import AddButton from './AddButton'
import Todo from './Todo';

const testTodos = [
    {description: "hejehej", id:"131034"},
    {description: "hejsdsdasdehej", id:"131dasdas034"},
    {description: "heasdasdasjehej", id:"13103asdas4"}
];

export default function TodoCollection() {
    const [todos, setTodos] = useState(testTodos);
  return (
    <div style={{width: "fit-content", height: "100%"}}>
        <div className='todo-grid'>
            {todos.map(todo => <Todo description={todo.description} />)}
            <AddButton />
        </div>
    </div>
  )
}
