import { useState } from 'react'
import { Logo } from './components/Logo'
import { SearchBlock } from './components/SearchBlock'
import { ListToDo } from './components/ListToDo';
import { Task, data } from './components/ListToDo/data';
import { Wrapper } from './components/Wrapper';
import { Counter } from './components/Counter'

import './App.css'

function App() {
   const [toDoList, setToDoList] = useState<Task[]>(data);

   const addToDo = (task: Task): void => {
      const newToDoList = [...toDoList, task]

      setToDoList(newToDoList);
   }

   const deleteToDo = (id: Task['id']): void => {
      const filteredToDoList = toDoList.filter((todo) => todo.id !== id );

      setToDoList(filteredToDoList);
   }

  return (
   <Wrapper>
      <Logo/>
      <SearchBlock addToDo={ addToDo }/>
      <Counter toDoList={ toDoList }/>
      <ListToDo toDoList={ toDoList } deleteToDo={ deleteToDo }/>
   </Wrapper>
  )
}
export default App
