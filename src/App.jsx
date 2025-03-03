import React from 'react'
import { useState } from 'react'
import Todo from "./Todo"
import "./App.css"

const App = () => {
  const [input,setInput]=useState();
  const [data,setData] = useState([]);
  const Inputdata = (e)=>{
    let item = e.target.value;
    setInput(item)
  }
  const AddTodo = ()=>{
    setData([...data,input]);
    setInput("");
   
  }
  const deleteIndex = (index)=>{
    console.log(index);
    
    const newList = [...data]
    newList.splice(index,1);
    setData(...newList);
  }
  return (
    <div className='todo-container'>
      <div className="todo-input">
        <input type='text' placeholder='enter task' value={input} onChange={Inputdata}/>
        <button onClick={AddTodo}>Add Todo</button>
      </div>
      <div className="todo-list">
        <p>{data.map((curValue,i)=>{
          return(
            <Todo key={i} index={i} item={curValue} deleteItem={deleteIndex}/>
          )
        })}</p>
      </div>
    </div>
  )
}

export default App
