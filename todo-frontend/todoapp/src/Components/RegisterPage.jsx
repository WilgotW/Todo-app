import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import resetStates from '../functions/resetStates';

export default function RegisterPage() {
  const navigate = useNavigate();
  const navigatePath = (path) => navigate(`${path}`);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [succes, setSucces] = useState(false);
  const [message, setMessage] = useState("");

  async function register(ev){
    ev.preventDefault();
    try{
      const response = await fetch("http://localhost:4000/api/register", {
        method: 'POST',
        headers : {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*',
        },
        body : JSON.stringify( {
          name: userName,
          email: userEmail,
          password: userPassword
        })
      });

      resetStates(setUserName, setUserEmail, setUserPassword);
      setMessage("Succecfully created new User!");
      setSucces(true)
    }catch(err){
      console.log(err);
      setMessage("Error occurred...");
      setSucces(false);
    }
  }

  return (
    <div style={{height: "700px", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div style={{display: "flex", flexDirection: "column", gap:"15px"}}>
        <TextField id="filled-basic" value={userName} label="Name" variant="filled" onChange={ev => setUserName(ev.target.value)}/>
        <TextField id="filled-basic" value={userEmail} label="Email" variant="filled" onChange={ev => setUserEmail(ev.target.value)}/>
        <TextField id="filled-basic" value={userPassword} label="Password" variant="filled" type="password" onChange={ev => setUserPassword(ev.target.value)}/>
        <Button variant="contained" onClick={register}>Register</Button>
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
