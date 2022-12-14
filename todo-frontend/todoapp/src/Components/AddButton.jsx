import React from 'react'
import { GrAdd } from 'react-icons/gr';
import { IoIosAddCircleOutline } from 'react-icons/io';

export default function AddButton() {
  return (
    <li className='add-button'>
        {/* <IoIosAddCircleOutline className='add-icon' /> */}
        <GrAdd className='add-icon' />
    </li>
  )
}
