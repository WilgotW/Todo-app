import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
        <h1>Todo</h1>
        <div style={{position: "absolute", height: "100%", display: "flex", alignItems: "center"}}>
            <div style={{width: "100px"}}>
                <div>
                    <p>Home</p>
                </div>
                <div>
                    <p>History</p>       
                </div>
            </div>
        </div>
    </div>
  )
}
