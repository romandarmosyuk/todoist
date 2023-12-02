import { useState } from 'react'
import './App.css'
import { Logo } from './components/Logo'
import { SearchBlock } from './components/SearchBlock'
import { ListToDo } from './components/ListToDo';
import { Task, data } from './components/ListToDo/data';

// import { Wrapper } from './components/Wrapper'

function App() {
   const [toDoList, setToDoList] = useState<Task[]>(data);

   const addToDo = (task: Task): void => {
      const newToDoList = [...toDoList, task]

      setToDoList(newToDoList);
   }

  return (
   <>
      <Logo/>
      <SearchBlock addToDo={ addToDo }/>
      <ListToDo toDoList={ toDoList }/>
   </>
  )
}
export default App
