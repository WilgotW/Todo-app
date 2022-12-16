import React from 'react'

export default function Todo(props) {
  return (
    <div className='todo'>
      <div style={{textAlign: "center"}}>
        <span className='todo-description'>
          {props.description}
        </span>
      </div>
      <div style={{textAlign: "center"}}>
        <span className='todo-description'>
          {props.id}
        </span>
      </div>
    </div>
  )
}
