import React from 'react'

const Todo = () => {
  return (
    <div>
      <div className="list">
       {item.map((n,i)=>(

         <li key={i} index={i}>{n} <span onClick={e=>deleteTodo(index)}><RiDeleteBin6Line /></span></li>
       ))}
      </div>
    </div>
  )
}

export default Todo
