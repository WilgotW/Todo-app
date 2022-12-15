import React, { useState } from 'react'
import AddButton from './AddButton'
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

export default function TodoForm() {
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState("");

    async function addTodo(ev) {
        ev.preventDefault();
        try{
            const response = await fetch("http://localhost:4000/api/todo/add", {
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin':'*',
                },
                body : JSON.stringify( {
                    description: input
                })
            })
            console.log(response);
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div className='todo-form'>
        <div style={{height: "100px", width: "100%", display: "flex", justifyContent: "center", alignContent: "center", position: "absolute"}}>
            <div style={{height: "100%", display: "flex", alignItems: "center"}}>
                <h1>New Todo</h1>
            </div>
            <div style={{display:"flex", justifyContent: "right", width: "90%", position: "absolute", height: "100px", alignItems: "center"}}>
                <Button variant="outlined" href="#outlined-buttons">
                    X
                </Button>
            </div>
        </div>
        <div style={{height: "700px", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                <TextField
                    id="outlined-multiline-static"
                    onChange={ev => setInput(ev.target.value)}
                    label="Todo"
                    multiline
                    rows={4}
                />
                <Button variant="contained" onClick={addTodo}>Add Todo</Button>
                
                <div style={{display: "flex", justifyContent: "center"}}>
                    <div className={loading ? "loader" : "invisible"} />
                </div>
            </div>
        </div>
    </div>
  )
}