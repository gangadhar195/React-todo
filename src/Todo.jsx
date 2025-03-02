import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";

const Todo = ({list,deletetodo,index}) => {
  
  return (
    <div>
      <div className="list">
        <li>{list}
            <span onClick={()=>{
                deletetodo(index)}}
                ><RiDeleteBin6Line /></span>
        </li>
      </div>
    </div>
  )
}

export default Todo
