import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    const navigatePath = (path) => navigate(`${path}`);
    return (
        <div>
            <div style={{height: "200px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <h1>Todo App</h1>
            </div>
            <div style={{height: "100px", display: "flex", justifyContent:"center", alignItems: "center"}}>
                <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                    <Button variant="contained" onClick={() => navigatePath('/login')}>Login</Button>
                    <Button variant="outlined" onClick={() => navigatePath('/register')}>Register</Button>
                </div>
            </div>
        </div>
    )
}
