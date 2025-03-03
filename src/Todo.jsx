import React from 'react'

const Todo = (props) => {
  return (
    <div>
      <div className="list">
        <li>{props.item}
          <spam onClick={e=>{
            props.deleteItem(props.index)
          }}>DEL</spam>
        </li>
      </div>
    </div>
  )
}

export default Todo
