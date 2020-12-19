import React from 'react'
import styled from 'styled-components'
import Task from '../task/task';

const StyleDiv=styled.div`
   width:100%;
   background:#7e7b01;
   min-height:350px;
   border:1px solid #7a7a85;
   position: relative;
`;
function Tasks({tasks,setTasks,setValue,setStateButton,setPressedIndex}) {
   const deleteTask = (todoIndex)=>{

      const removerArr = [...tasks].filter(todo=>
         todo.index !== todoIndex
      )
      setTasks(removerArr)
   };
   const editTask = (todoIndex)=>{
      setPressedIndex(todoIndex);
      setStateButton('Edit');
         tasks.map(item=>{
            if(item.index==todoIndex){
               setValue(item.text);
            }
         })
     /* setTasks(prev => prev.map(item => (item.id === todoIndex ? newValue : item)))*/
   }
   return (
     <StyleDiv>
      {tasks.map((task,index)=>(
         <Task deleteTask={deleteTask} editTask={editTask} taskM = {task} key={index} task={task.text}></Task>
      ))}
     </StyleDiv>
   )
}

export default Tasks;
