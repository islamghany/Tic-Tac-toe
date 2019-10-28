import React from 'react'

const User=({user})=> {
    return (
        <div className="first t" >
           <h1 className="heading font-lg bang capitalize" 
           style={{
               color:user.color
           }}
           >{user.name}</h1>
           <p className="font-sm inco font-md capitalize">score: {user.score}</p>
        </div>
    )
}

export default User
