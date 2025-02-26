import React from 'react'
import "./App.css"
import { useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import Todo from './Todo';

const App = () => {
  const [item,setItem] = useState([]);
  const[input,setInput]=useState();
  const addtodo =()=>{
    setItem([...item,input])
  }

  const deleteTodo = (key)=>{
    let newTodoList = [...item];
    newTodoList.slice(key,1)
    setItem([...newTodoList])
    
  }
  // console.log(item)
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

         <li key={i} index={i}>{n} <span onClick={()=>deleteTodo(index)}><RiDeleteBin6Line /></span></li>
       ))}
      </div>
    </div>
  )
}

export default App
