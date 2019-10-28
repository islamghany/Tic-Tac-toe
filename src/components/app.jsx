import React,{useState,useEffect} from 'react'
import User from './user/user'
import Game from './game'
import GameOver from './gameOver';
import { SliderPicker } from "react-color";
const App=()=> {
    const emp={tl:'',tc:'',tr:'',ml:'',mc:'',mr:'',bl:'',bc:'',br:''};
    const [user1,setUser1] = useState({name:'player 1',color:'#DF0045',score:0});
    const [user2,setUser2] = useState({name:'player 2',color:'#15038C',score:0});
    const [scores,setScores] = useState({...emp});
    const [win,setWin] =useState({name:'',state:'',text:'',color:''});
    const [count,setCount]=useState(0);
    const [data,setdata]=useState({
        name1:user1.name,
        name2:user2.name,
        color1:user1.color,
        color2:user2.color
    });
    const [empty,setEmpty]=useState(false)     
    let winner=new Map();
    winner.set('X',user1.name);
    winner.set('O',user2.name);
    const endGame=(winner)=>{
     var modal= document.querySelector('#mod');
             if(winner ==='X'){
                 setUser1({
                     ...user1,
                    score:user1.score+1
                 });
                setWin({
                    name:user1.name,
                    state:'winner winner checken dinner',
                    text:'has won this round',
                    color:user1.color 
                })
               
             }
             else if(winner === 'O'){
                setUser2({
                    ...user2,
                   score:user2.score+1
                });
                setWin({
                    name:user2.name,
                    state:'winner winner checken dinner',
                    text:'has won this round',
                    color:user2.color 
                })
               
             }
             else{
                setWin({
                    name:'',
                    state:'Draw',
                    text:'this round has ended with a tie',
                    color:"#23d160" 
                })
             }
            
             modal.classList.add('wobble');   
     }
    const handleScore=(el,value)=>{
        if(!scores[el]){
     setScores({
         ...scores,
         [el]:value
     }
     )
    }
    
    }
    const newGame=()=>{
       setUser1({
           ...user1,
           score:0,
       });
       setUser2({
        ...user2,
        score:0,
    });
        setScores({...emp})
        setCount(0);
    }
    useEffect(()=>{
        setCount(count+1);
        if(scores.tl && scores.tl === scores.tc && scores.tl === scores.tr) endGame(scores.tl);
        else if(scores.tl && scores.tl === scores.ml && scores.tl === scores.bl) endGame(scores.tl);
        else if(scores.tl && scores.tl === scores.mc && scores.tl === scores.br) endGame(scores.tl);
    
        else if(scores.tc && scores.tc === scores.mc && scores.tc === scores.bc) endGame(scores.tc);
        else if(scores.ml && scores.ml === scores.mc && scores.mc === scores.mr) endGame(scores.mc);
        else if(scores.bl && scores.bl === scores.bc && scores.bc === scores.br) endGame(scores.bc);

        else if(scores.tr && scores.tr === scores.mr && scores.tr === scores.br) endGame(scores.tr);
        else if(scores.tr && scores.tr === scores.mc && scores.bl === scores.tr) endGame(scores.tr);
        else if (count===9) endGame('T'); 
    },[scores]);

    const newRound=()=>{
        var modal= document.querySelector('#mod');
        modal.classList.remove('wobble');
        setScores({...emp});
        setCount(0);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
      //  console.log(data.name1);
        if(!data.name1 || !data.name2 || data.name1.length >10 || data.name2.length>10){
            setEmpty(true);
        }
        else{
            setUser1({
                ...user1,
                name:data.name1,
                color:data.color1
            })
            setUser2({
                ...user2,
                name:data.name2,
                color:data.color2
            })
            setEmpty(false);
            var modal= document.querySelector('#mod2');
            modal.classList.remove('wobble');
        }
    }
    return (
       <div className="layout" style={{
        background: `linear-gradient(219deg,rgba(246,246,246,.02) 0,rgba(246,246,246,.02) 20%,rgba(225,225,225,.02) 20%,rgba(225,225,225,.02) 40%,rgba(136,136,136,.02) 40%,rgba(136,136,136,.02) 60%,rgba(216,216,216,.02) 60%,rgba(216,216,216,.02) 80%,rgba(35,35,35,.02) 80%,rgba(35,35,35,.02) 100%),linear-gradient(299deg,rgba(213,213,213,.02) 0,rgba(213,213,213,.02) 20%,rgba(150,150,150,.02) 20%,rgba(150,150,150,.02) 40%,rgba(161,161,161,.02) 40%,rgba(161,161,161,.02) 60%,rgba(186,186,186,.02) 60%,rgba(186,186,186,.02) 80%,rgba(28,28,28,.02) 80%,rgba(28,28,28,.02) 100%),linear-gradient(50deg,rgba(157,157,157,.02) 0,rgba(157,157,157,.02) 16.667%,rgba(147,147,147,.02) 16.667%,rgba(147,147,147,.02) 33.334%,rgba(42,42,42,.02) 33.334%,rgba(42,42,42,.02) 50.001%,rgba(214,214,214,.02) 50.001%,rgba(214,214,214,.02) 66.668%,rgba(34,34,34,.02) 66.668%,rgba(34,34,34,.02) 83.335%,rgba(211,211,211,.02) 83.335%,rgba(211,211,211,.02) 100.002%),linear-gradient(278deg,rgba(79,79,79,.03) 0,rgba(79,79,79,.03) 20%,rgba(217,217,217,.03) 20%,rgba(217,217,217,.03) 40%,rgba(5,5,5,.03) 40%,rgba(5,5,5,.03) 60%,rgba(200,200,200,.03) 60%,rgba(200,200,200,.03) 80%,rgba(125,125,125,.03) 80%,rgba(125,125,125,.03) 100%),linear-gradient(274deg,rgba(235,235,235,.03) 0,rgba(235,235,235,.03) 12.5%,rgba(100,100,100,.03) 12.5%,rgba(100,100,100,.03) 25%,rgba(44,44,44,.03) 25%,rgba(44,44,44,.03) 37.5%,rgba(228,228,228,.03) 37.5%,rgba(228,228,228,.03) 50%,rgba(36,36,36,.03) 50%,rgba(36,36,36,.03) 62.5%,rgba(72,72,72,.03) 62.5%,rgba(72,72,72,.03) 75%,rgba(30,30,30,.03) 75%,rgba(30,30,30,.03) 87.5%,rgba(109,109,109,.03) 87.5%,rgba(109,109,109,.03) 100%),linear-gradient(90deg,${user1.color},${user2.color})`

       }}>

           <GameOver winner={win} newGame={newRound}/>
           <div className ="scores">
           <User user={user1}/>
           <h1 className="heading upper font-hg bang" className="middle" style={{fontSize:'7rem', color:user1.color}}>V<span style={{color:user2.color}}>S</span></h1>
           <User user={user2} />
           </div>   
           <Game score={scores} handleScore={handleScore} />
           >
           <div class="head">
               <button className="btn btn--wave-white circle" onClick={newRound}>new round</button>
               <button className="btn btn--wave-white circle" onClick={newGame}>restart the whole game</button>
               <button className="btn btn--wave-white circle" onClick={()=>{
                   document.querySelector('#mod2').classList.add('wobble');
               }}>settings</button>
           </div>
           <div className="container cont2" id="mod2">
              <div className="container__settings">
                  <form onSubmit={handleSubmit}>
                     
                 <div className="form">
                 <h1 className="heading mont font-md">User 1</h1>
                     <div className="form__container">
                         <label htmlFor="name1" className="form__label">Name</label>
                         <input type="text" className="form__input" id="name1"
                          value={data.name1} onChange={(e)=>{
                              setdata({
                                  ...data,
                                  name1:e.target.value
                              })
                          }} name="name1"/>
                           <label  className="form__label">Color</label>
                          <SliderPicker
                color={data.color1}
                onChange={(e)=>{
                    setdata({
                        ...data,
                        color1:e.hex
                    })
                }}
              />
                     </div>
                 </div>
                 <hr />
                 <div className="form">
                 <h1 className="heading mont font-md">User 2</h1>
                     <div className="form__container">
                         <label htmlFor="name1" className="form__label">Name</label>
                         <input type="text" className="form__input" id="name1"
                          value={data.name2} onChange={(e)=>{
                              setdata({
                                  ...data,
                                  name2:e.target.value
                              })
                          }} name="name2"/>
                                    <label  className="form__label">Color</label>
                          <SliderPicker
                color={data.color2}
                onChange={(e)=>{
                    setdata({
                        ...data,
                        color2:e.hex
                    })
                }}
              />
                     </div>
                 </div>
                 {empty && <p class="rele font-ty upper" >name fields must be not empty
                      and the field length dose not exceded 10 charcteres.
                 </p>}
                 <div className="submit">
                 <button className="btn btn--contained-success circle">submit</button>
                 <span className="btn btn--contained-dark circle"
                 onClick={()=>{
                    var modal= document.querySelector('#mod2');
                    modal.classList.remove('wobble');
                 }}
                 >cancel</span>
                 </div>
                  </form>
              </div>
           </div>
       </div>
    )
}

export default App
