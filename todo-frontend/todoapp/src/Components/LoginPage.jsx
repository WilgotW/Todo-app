import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const navigatePath = (path) => navigate(`${path}`);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{height: "600px", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div style={{display: "flex", flexDirection: "column", gap:"15px"}}>
        <TextField id="filled-basic" label="Email" variant="filled" onChange={ev => setEmail(ev.target.value)}/>
        <TextField id="filled-basic" label="Password" variant="filled" type="password" onChange={ev => setPassword(ev.target.value)}/>
        <Button variant="contained">Login</Button>
        <Button variant="outlined" onClick={() => navigatePath("/")}>Back</Button>
      </div>
    </div>
  )
}
