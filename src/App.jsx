import React from 'react'
import "./App.css"
import { useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";

const App = () => {
  const [item,setItem] = useState([]);
  const[input,setInput]=useState();
  const addtodo =()=>{
    setItem([...item,input])
  }
  console.log(item)
  return ( 
    <div className='todo'>
      <div>
      <h1>Todo List</h1>
      <div className="inputdata">
      <input type='text' placeholder='Add todo' onChange={(e)=>setInput(e.target.value)} value={input}/>
      <button onClick={()=>
      {addtodo(input) 
        setInput("")}} >Add Todo</button>
        </div>
      </div>
      <div className="list">
       {item.map((n,i)=>(

         <li key={i}>{n} <span><RiDeleteBin6Line /></span></li>
       ))}
      </div>
    </div>
  )
}

export default App
