import './App.css';
import Task from './components/task';
import TaskForm from './components/taskForm';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([])

  const addTask = newTask => {
    setTasks(currentTask => ([...currentTask, newTask]))
  }

  const removeTask = id => {
    let left = tasks.slice(0,id)
    let right = tasks.slice(id+1)

    setTasks(left.concat(right))

  }

  return (
    <div className="App">
    <TaskForm addFunction = {addTask} />

  {
    tasks.map((t, i)=> {
      return(
        <Task key={i} id={i} removeFunction={removeTask} task={t.kTask}/>
      )
    })
  }
    

    </div>
  );
}

export default App;
