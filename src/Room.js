import React, {useState} from 'react';



function Room() {

    let [islit, setLit] = useState(true);
    let [age, setAge] = useState(23);

    
  return (
    <div>
      This room is {islit? 'lit' : 'dark'}
        <br/>
        Age: {age}
        <br/>
      <button onClick = {()=> setLit(!islit) } >Toggle Button </button>
      <br/>
      <button onClick = {() =>{
                                console.log('Increase Age by arrow funcion');
                                setAge(++age);
         }}>Increase Age
      </button>

    </div>
  );
}

export default Room;