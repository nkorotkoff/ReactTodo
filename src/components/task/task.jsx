import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
const StyleTask = styled.div`
   font-family: 'Source Sans Pro', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  height:54px;
  background:grey;
input[type="checkbox"] {
   position: relative;
   width: 1.5em;
   height: 1.5em;
   color:  #363839;
   border: 1px solid #bdc1c6;
   border-radius: 4px;
   appearance: none;
   outline: 0;
   cursor: pointer;
   transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
   &::before {
     position: absolute;
     content: '';
     display: block;
     top: -2px;
    left: 4px;
     width: 8px;
     height: 14px;
     border-style: solid;
     border-color: #fff;
     border-width: 0 2px 2px 0;
     transform: rotate(45deg);
     opacity: 0;
   }
   &:checked {
     color: #fff;
     border-color: #06842c;
     background: #06842c;
     &::before {
       opacity: 1;
     }
     ~ label::before {
       clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
     }
   }
 }
 
 label {
   position: relative;
   cursor: pointer;
   font-size: 1.5em;
   font-weight: 600;
   padding: 0 0.25em 0;
   user-select: none;
   margin-right: 178px;
   &::before {
     position: absolute;
     content: attr(data-content);
     color: #9c9e9f;
     clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
     text-decoration: line-through;
     text-decoration-thickness: 3px;
     text-decoration-color:  #363839;
     transition: clip-path 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
   }
 }
 svg{
    padding: 0 20px;
    cursor:pointer;
 }
   `
   ;
function Task({task,deleteTask,taskM,editTask}) {
    let ref = React.createRef();
   const changeChecked =() =>{
       setTimeout(()=>{ref.current.checked=''},290)
    }
   
   return (
      <StyleTask id={task.index}>
            <input type="checkbox" id={task.index} name="todo" value="todo" ref={ref} onChange={changeChecked}  onClick={()=>{setTimeout(()=>{deleteTask(taskM.index)},300)}}/>
   <label for="todo" data-content={task}>{task}</label>
            <FontAwesomeIcon onClick={()=>{deleteTask(taskM.index)}} icon={faTrash} />
            <FontAwesomeIcon onClick={()=>{editTask(taskM.index)}} icon={faEdit} />
      </StyleTask>
   )
}

export default Task;
