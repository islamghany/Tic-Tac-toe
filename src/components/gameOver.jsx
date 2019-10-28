import React from 'react'

function GameOver({winner,newGame}) {
    return (
        <div className="container" id="mod">
            <div className="container__model">
                <h1 className="heading font-lg mont capitalize" style={{
                    color:winner.color
                }}>
                   {winner.state}
                </h1>
                <p className="font-md rele capitalize"><span style={{
                    color:winner.color
                }}>{winner.name}</span> {winner.text}</p>
                <button className="btn btn--contained-success circle" onClick={()=>newGame()}>
                    Play one More
                </button>
            </div>
        </div>
    )
}

export default GameOver
