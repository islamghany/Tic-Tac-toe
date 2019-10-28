import React,{useState} from 'react'

const Game=({handleScore,score})=> {
    const [field , setField] =useState('X');
    let m = new Map();
     m.set('O','X');
     m.set('X','O');
    const fullCell=(cell)=>{
      if(!score[cell]){
          
        handleScore(cell,field);
        setField(m.get(field));
      }
    }
    
    return (
        <div className="game">
         <table>
            <tr>
            <th onClick={()=>{
               fullCell('tl')
            }}>{score.tl}</th>
            <th  onClick={()=>{
               fullCell('tc')
            }}>{score.tc}</th>
            <th  onClick={()=>{
               fullCell('tr')
             }}>{score.tr}</th>
            </tr> 
            <tr>
            <th onClick={()=>{
               fullCell('ml')
            }}>{score.ml}</th>
            <th  onClick={()=>{
               fullCell('mc')
            }}>{score.mc}</th>
            <th  onClick={()=>{
               fullCell('mr')
             }}>{score.mr}</th>
            </tr> 
            <tr>
            <th onClick={()=>{
               fullCell('bl')
            }}>{score.bl}</th>
            <th  onClick={()=>{
               fullCell('bc')
            }}>{score.bc}</th>
            <th  onClick={()=>{
               fullCell('br')
             }}>{score.br}</th>
            
            </tr> 
        </table>
        </div>
    )
}

export default Game
