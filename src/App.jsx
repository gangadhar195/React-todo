import React from 'react'
import "./App.css"
import { useState } from 'react'

const App = () => {
  const [item,setItem] = useState([]);

  return (
    <div className='todo'>
      <div>
      <h1>Todo List</h1>
      <input type='text' placeholder='Add todo' onChange={(e)=>setItem(e.target.value)} name=''/>
      <button>Add Todo</button>
      </div>
      <div className="list">
        <li>{item}</li>
      </div>
    </div>
  )
}

export default App
