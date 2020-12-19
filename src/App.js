import './App.css';
import React from 'react';
import Input from './components/input/input';
import Tasks from './components/tasks/tasks';
function App() {
  const [value,setValue] = React.useState();
  const [tasks,setTasks] = React.useState([]);
  const [stateButton,setStateButton]=React.useState('Add button');
    const [pressedIndex,setPressedIndex]=React.useState();
  console.log(tasks)
  return (
    <div className="App">
      <Input setValue={setValue} value={value} setTasks={setTasks} tasks={tasks} stateButton={stateButton} pressedIndex={pressedIndex} setStateButton={setStateButton} setPressedIndex={setPressedIndex}/>
      <Tasks tasks={tasks} setTasks={setTasks} setValue={setValue} setStateButton={setStateButton} setPressedIndex={setPressedIndex}/>
      <button onClick={()=>{setTasks([])}}>Clear</button>
    </div>
  );
}

export default App;