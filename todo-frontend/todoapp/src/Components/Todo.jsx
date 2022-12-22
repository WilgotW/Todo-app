import React, { useEffect, useState } from 'react'
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

  const [isChecked, setIsChecked] = useState(false);

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
      //update todo list
      props.getTodos();
    }catch(err){
      console.log(err);
    }
  }

  async function checkTodo(){
    
    try{
      const checkStatus = isChecked ? false : true;
      console.log(checkStatus);
      const response = await fetch(`http://localhost:4000/api/todo/check/${props.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*',
          'userAuth': `${localStorage.getItem("authToken")}`
        }, 
        body : JSON.stringify( {
          checked: checkStatus
        })
      })

      // const data = await response.json();
      console.log(response);

      console.log(isChecked ? "unchecked" : "checked");
      setIsChecked(checkStatus);

      //update todo list
      props.getTodos();
    }catch(err){
      console.log(err);
    }
    
  }

  useEffect(() => {
    setIsChecked(props.checked);
  }, [])

  return (
    <div className='todo'>
      <div style={{textAlign: "center"}}>
        <span className='todo-description'>
          {props.description}
        </span>
      </div>
      <div style={{textAlign: "center"}}>
        <div>
          <Checkbox
            {...label}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
            checked={isChecked}
            defaultChecked={false}
            onChange={() => checkTodo()}
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
