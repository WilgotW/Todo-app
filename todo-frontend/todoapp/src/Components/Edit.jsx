import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from 'react-router-dom';

export default function Edit() {
    const navigate = useNavigate();
    const navigatePath = (path) => navigate(`${path}`);
    let { id } = useParams();

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
            const response = await fetch(`http://localhost:4000/api/todo/update/${id}`, {
                method: 'PUT',
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
                <h1>Edit Todo</h1>
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
                <Button variant="contained" onClick={addTodo}>Edit Todo</Button>
                <Button variant="outlined" onClick={() => navigatePath('/todos')}>Back</Button>
                
                <div style={{height: "100px", display: "flex", justifyContent: "center"}}>
                    <div className={loading ? "loader" : "invisible"} />
                </div>
                <div style={{height: "20px", display: "flex", justifyContent: "center"}}>
                    {succesMessage.length > 0 &&
                        <>
                            {succes ? 
                                <span style={{color: "green"}}> <b> Edited Todo: {succesMessage}</b> </span>
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
