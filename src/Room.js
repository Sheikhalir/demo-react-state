import React, {useState} from 'react';

import './Room.css';

function Room() {

    let [islit, setLit] = useState(true);
    let [roomTemp, setTemp] = useState(22);

    
  return (
    <div className= {`room ${islit ? "lit" :"dark"}`}>
      This room is {islit? 'lit' : 'dark'}
        <br/>
        Room Temprature in celsius is {roomTemp}
      
      <br/>
      <button onClick = {()=> setLit(true) } >Light On </button>
      
      <button onClick = {()=> setLit(false) }  >Light Off </button>
      <br/>
      <button onClick = {() =>{
                                console.log('Increase Temparture');
                                setTemp(++roomTemp);
         }}>Increase Temparture
      </button>
      
      <button onClick = {() =>{
                                console.log('Decrease Temparture');
                                setTemp(--roomTemp);
         }}>Decrease Temparture
      </button>

    </div>
  );
}

export default Room;
