import React, { useEffect, useState } from 'react'
import AddButton from './AddButton'
import Todo from './Todo';

export default function TodoCollection() {
  const [todos, setTodos] = useState([]);

  async function getTodos(){
    try{
      const response = await fetch("http://localhost:4000/api/todo/getAll", {
        method: 'POST',
          headers : {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'userAuth': `${localStorage.getItem("authToken")}`
          },
          body : JSON.stringify( {
            token: localStorage.getItem("authToken")
          })
      })
      const allTodos = await response.json();
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
            {todos.map(todo => <Todo key={todo._id} description={todo.description} id={todo._id} getTodos={getTodos} checked={todo.checked}/>)}
          </>
        }
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <AddButton />
        </div>
      </div>
    </div>
  )
}
