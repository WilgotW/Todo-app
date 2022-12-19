import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    const navigatePath = (path) => navigate(`${path}`);

    const [loggedIn, setLoggedIn] = useState(false);

    function checkIfLoggedIn(){
        console.log(localStorage.getItem("authToken"))
        if(localStorage.getItem("authToken")){
            console.log("logged In!");
            console.log(localStorage.getItem("authToken"));
            setLoggedIn(true);
        }else{
            setLoggedIn(false);
        }
    }

    useEffect(() => {
        checkIfLoggedIn();
    }, [])

    return (
        <div>
            <div style={{height: "200px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <h1>Todo App</h1>
            </div>
            <div style={{height: "100px", display: "flex", justifyContent:"center", alignItems: "center"}}>
                <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                    {loggedIn ?
                        
                        <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                            <span>Logged In!</span>
                            <Button variant="contained" onClick={() => navigatePath('/todos')}>My Todos</Button>
                        </div>
                        :
                        <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                            <Button variant="contained" onClick={() => navigatePath('/login')}>Login</Button>
                            <Button variant="outlined" onClick={() => navigatePath('/register')}>Register</Button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
