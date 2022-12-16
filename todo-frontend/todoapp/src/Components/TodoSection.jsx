import React from 'react'
import TodoCollection from './TodoCollection'


export default function TodoSection() {
  
  return (
    <div className='todo-section'>
        <h1>Todos</h1>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <TodoCollection />
        </div>
    </div>
  )
}
