import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';


export default function TodoForm({editing = false}) {
    const navigate = useNavigate();
    const navigatePath = (path) => navigate(`${path}`);

    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState("");

    const [succesMessage, setSuccesMessage] = useState("");
    const [succes, setSucces] = useState(false);

    async function addTodo(ev) {
        ev.preventDefault();

        if(input.length <= 0){
            setSuccesMessage("Enter a todo");
            setSucces(false);
            return;
        }

        setLoading(true);
        try{
            const response = await fetch("http://localhost:4000/api/todo/add", {
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'userAuth': `${localStorage.getItem("authToken")}`
                },
                body : JSON.stringify( {
                    description: input,
                    token: localStorage.getItem("authToken")
                })
            })
            const data = await response.json()
            setSuccesMessage(input);
            setInput("");
            setSucces(true);
        }catch(err){
            console.log(err);
        }
        setLoading(false);
    }
  return (
    <div className='todo-form'>
        <div style={{height: "100px", width: "100%", display: "flex", justifyContent: "center", alignContent: "center", position: "absolute"}}>
            <div style={{height: "100%", display: "flex", alignItems: "center"}}>
                <h1>New Todo</h1>
            </div>
        </div>
        <div style={{height: "700px", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                <TextField
                    id="outlined-multiline-static"
                    onChange={ev => setInput(ev.target.value)}
                    label="Todo"
                    value={input}
                    multiline
                    rows={4}
                />
                <Button variant="contained" onClick={addTodo}>Add Todo</Button>
                <Button variant="outlined" onClick={() => navigatePath('/todos')}>Back</Button>
                
                <div style={{height: "100px", display: "flex", justifyContent: "center"}}>
                    <div className={loading ? "loader" : "invisible"} />
                </div>
                <div style={{height: "20px", display: "flex", justifyContent: "center"}}>
                    {succesMessage.length > 0 &&
                        <>
                            {succes ? 
                                <span style={{color: "green"}}> <b> Added Todo: {succesMessage}</b> </span>
                                :
                                <span style={{color: "red" }}> <b>{succesMessage}</b> </span>
                            }
                        </>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
