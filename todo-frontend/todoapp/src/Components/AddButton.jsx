import React from 'react'
import { GrAdd } from 'react-icons/gr';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


export default function AddButton({small = false}) {
  const navigate = useNavigate();
  const navigatePath = (path) => navigate(`${path}`);
  
  return (
    // <<li onClick={() => navigatePath("/add")} className={small ? 'add-button small' : 'add-button'}>
    //   {/* <IoIosAddCircleOutline className='add-icon' /> */}
    //   <GrAdd className={small ? 'add-icon small' : 'add-icon'} />
    // </li>>
    <Fab onClick={() => navigatePath("/add")} color="primary" aria-label="add">
      <AddIcon />
    </Fab>
    
  )
}
