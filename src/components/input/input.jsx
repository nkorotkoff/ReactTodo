import React from 'react'
import styled from 'styled-components'
const Title = styled.h1`
   color:#7e1701;
   background:#00ffff;
   margin:0;
   width:100%;
`;
const InputStyle = styled.input`
   width:98%;
   height:34px;
`;
const AddTask = styled.button`
      background: white;
    border: 0.1em solid black;
    cursor: pointer;
    font: 600 1rem/1.25 'Montserrat', sans-serif;
    letter-spacing: 0.125em;
    margin: 0.5rem;
    position: absolute;
    width: 149px;
    left: 69%;
    top: 38px;
    height: 38px;
    text-transform: uppercase;
    &:before,
    &:after {
      content: '';
      position: absolute;
      transition: all 0.125s ease-in-out;
    }
`;
    let myRef=React.createRef();
function Input({value,setValue,setTasks,tasks,stateButton,setStateButton,pressedIndex,setPressedIndex}) {
   const inputChange=(word)=>{
      setValue(word)
   }
   const addingTask = (todo)=>{
       if(stateButton=='Add button' && todo!=' ') {
           const setTodo = {
               text: todo,
               index: Math.floor(Math.random() * 1000),
           };
           const newTodo = [setTodo, ...tasks]
           setTasks(newTodo)
           inputChange("")
       }
       if (stateButton=='Edit'){
           setTasks(prev => prev.map(item => (item.index === pressedIndex ? {text:todo,index: Math.floor(Math.random() * 1000),} : item)));
           setStateButton('Add button');
           inputChange("");
           setPressedIndex();
       }

   }

   return (
      <div>
         <header>
            <Title>TO DO List</Title>
         </header>
         <InputStyle placeholder='Enter text' value={value} onChange={()=>{inputChange(myRef.current.value)}} ref={myRef}/>
          <AddTask onClick={()=>{addingTask(value)}}>{stateButton}</AddTask>
      </div>

   )

}
export default Input
