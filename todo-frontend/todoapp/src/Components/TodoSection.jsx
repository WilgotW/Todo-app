import React from 'react'
import { GrAdd } from 'react-icons/gr';
import { IoIosAddCircleOutline } from 'react-icons/io';


export default function TodoSection() {
  return (
    <div className='todo-section'>
        <h1>Todos</h1>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <li className='add-button'>
                {/* <IoIosAddCircleOutline className='add-icon' /> */}
                <GrAdd className='add-icon' />
            </li>
        </div>
    </div>
  )
}
