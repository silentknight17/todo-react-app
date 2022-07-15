import React, { Component } from 'react';

const ToDoList = (props) =>{

    


    return (
        <>
          <div className='todo_style'>
          <button className='cancel'
          onClick={()=>{
            props.onSelect(props.id)
          }}
          > X </button>
          <li>{props.text}</li>
          </div>
          

        </>
    
    )
}

export default ToDoList;