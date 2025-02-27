import { useState } from 'react'
import './App.css'
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'

function App() {
  const [tasks, setTasks] = useState([{title: "Learn React", description: "Trying to understand React"}]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]); 
  };
  return (
    <>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} />
    </>
  );
  
}

export default App
