import React from 'react'

export default function Todo({description}) {
  return (
    <div className='todo'>
        <span className='todo-description'>
            {description}
        </span>
    </div>
  )
}
