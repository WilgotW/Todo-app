import React from 'react'
import TodoCollection from './TodoCollection'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function TodoSection() {
  const navigate = useNavigate();
  const navigatePath = (path) => navigate(`${path}`);
  
  function logout(){
    localStorage.removeItem("authToken");
    navigatePath('/')
  }

  return (
    <div className='todo-section'>
        <h1>Todos</h1>
        <div style={{width: "95%", display: "flex", position: "absolute", justifyContent: "right", alignItems: "center", height: "100px"}}>
          <Button variant="contained" color='error' onClick={logout}>Logout</Button>
        </div>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <TodoCollection />
        </div>
    </div>
  )
}
