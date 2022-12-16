import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function AddButton({small = false}) {
  const navigate = useNavigate();
  const navigatePath = (path) => navigate(`${path}`);
  
  const [addHovering, setAddHovering] = useState(false);

  return (
    <div style={{display: "flex", flexDirection: "column", width: "150px", gap: "15px", marginTop: "40px"}}>
      <div style={{width: "100%", justifyContent: "center"}}>
        <Fab onClick={() => navigatePath("/add")} color="primary" aria-label="add" onMouseEnter={() => setAddHovering(true)} onMouseLeave={() => setAddHovering(false)}>
          <AddIcon />
        </Fab>
      </div>
      {addHovering && <span className='add-todo-text'>Add Todo</span>}
    </div>
  )
}
