import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import resetStates from '../functions/resetStates';

export default function LoginPage() {
  const navigate = useNavigate();
  const navigatePath = (path) => navigate(`${path}`);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [succes, setSucces] = useState(false);
  const [message, setMessage] = useState("");

  async function login(ev){
    ev.preventDefault();
    try{
      const response = await fetch("http://localhost:4000/api/login", {
        method: 'POST',
        headers : {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify( {
          email: userEmail,
          password: userPassword
        })
      });
      const data = await response.json();
      
      if(response.status == 200){
        localStorage.setItem("authToken", data);
        console.log(localStorage.getItem("authToken"));
      }

      resetStates(setUserEmail, setUserPassword);
      setMessage("Logged In!");
      setSucces(true)
    }catch(err){
      console.log(err);
      setMessage("Error occurred...");
      setSucces(false);
    }
  }

  return (
    <div style={{height: "600px", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div style={{display: "flex", flexDirection: "column", gap:"15px"}}>
        <TextField id="filled-basic" label="Email" variant="filled" onChange={ev => setUserEmail(ev.target.value)}/>
        <TextField id="filled-basic" label="Password" variant="filled" type="password" onChange={ev => setUserPassword(ev.target.value)}/>
        <Button variant="contained" onClick={ev => login(ev)}>Login</Button>
        <Button variant="outlined" onClick={() => navigatePath("/")}>Back</Button>

        <div style={{height: "50px", alignItems: "center", display: "flex", justifyContent: "center"}}>
          
          {message.length > 0 &&
            <span style={{color: succes ? "green" : "red"}}>{message}</span>
          }

        </div>
      </div>
    </div>
  )
}
