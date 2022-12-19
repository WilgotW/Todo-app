import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import {RiDeleteBin6Line} from 'react-icons/ri'
import IconButton from '@mui/material/IconButton';
import {AiOutlineEdit} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

export default function Todo(props) {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const navigate = useNavigate();
  const navigatePath = (path) => navigate(`${path}`);

  async function deleteById(){
    try{
      const response = await fetch(`http://localhost:4000/api/todo/remove/${props.id}`, {
        method: 'DELETE',
        headers : {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*',
          'userAuth': `${localStorage.getItem("authToken")}`
        }
      })
      console.log(response);
      props.getTodos();
    }catch(err){
      console.log(err);
    }
  }

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
        <div>
          <Checkbox
            {...label}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
          />
          <IconButton color="error" aria-label="upload picture" component="label" onClick={deleteById}>
            <RiDeleteBin6Line style={{height: "22px", width: "22px"}} />
          </IconButton>
          <IconButton color="success" aria-label="upload picture" component="label">
            <AiOutlineEdit style={{height: "22px", width: "22px"}} onClick={() => navigatePath(`/edit/${props.id}`)}/>
          </IconButton>
        </div>
      </div>
    </div>
  )
}
