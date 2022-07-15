import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState} from 'react'
import ToDoList from './ToDOList';


function App() {

  const[inputList,setinputList]=React.useState("");
  
  //To store the items in the array form
  const [Items,setItems]=React.useState([]);
   
  const itemEvent =(event)=>{
   setinputList(event.target.value);
  }
  
  const listOfItems=()=>{
     setItems((oldItems)=>{
      return [...oldItems,inputList];
     });
     setinputList("");
  };

  const deleteItems=(id)=>{
    console.log("Deleted!");

    setItems((oldItems)=>{
      return oldItems.filter((arraElem,index)=>{
        return index!==id;
      })
    })
} 


  return (
    <>
     <div className="main_div">
        <div className="center_div">
          <br/>
          <h1>ToDo List</h1>
          <br/>
          <input value={inputList} type="text" placeholder="Add a Item" onChange={itemEvent}>
          </input>
          <button className="add" onClick={listOfItems}> + </button>
 
          <ol>
           {/* <li> {inputList} </li>*/}

           {Items.map((itemval,index)=>{
           return <ToDoList 
             key={index}
             id={index}
             text={itemval}
             onSelect={deleteItems}
            />
           })}
            
          </ol>
        </div>
     
     </div>
    </>
    
  );
}

export default App;
