import React, { useEffect, useState } from 'react'
import AddButton from './AddButton'
import Todo from './Todo';

export default function TodoCollection() {
  const [todos, setTodos] = useState([]);

  async function getTodos(){
    try{
      const response = await fetch("http://localhost:4000/api/todo/getAll", {
        method: 'GET',
        headers : {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*',
        }
      })
      const allTodos = await response.json();
      console.log(await allTodos);
      setTodos(await allTodos);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getTodos();
  }, [])

  return (
    <div style={{width: "fit-content", height: "100%"}}>
      <div className='todo-grid'>
        {todos.length > 0 &&
          <>
            {todos.map(todo => <Todo description={todo.description} id={todo._id} getTodos={getTodos} />)}
          </>
        }
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <AddButton />
        </div>
      </div>
    </div>
  )
}
