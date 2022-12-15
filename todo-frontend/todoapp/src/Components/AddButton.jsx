import React from 'react'
import { GrAdd } from 'react-icons/gr';
import { IoIosAddCircleOutline } from 'react-icons/io';

export default function AddButton({small = false}) {
  return (
    <li className={small ? 'add-button small' : 'add-button'}>
      {/* <IoIosAddCircleOutline className='add-icon' /> */}
      <GrAdd className={small ? 'add-icon small' : 'add-icon'} />
    </li>
  )
}
