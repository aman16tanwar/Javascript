import { useState, useEffect } from 'react'

import './App.css'

function App() {
const [color,setColor]=useState("green");

useEffect(()=>{
  document.body.style.backgroundColor=color;},[color]);


function changeColor(){
  if (color=="green"){
    setColor("red")
  }
  else if (color=="red"){
    setColor("green")
  }
}


  return (
    <div className="main">
      <button onClick={changeColor} style={{backgroundColor:"white"}}>Change Color</button>

    
    </div>
  )
}

export default App
