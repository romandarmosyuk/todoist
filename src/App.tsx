import { useState } from 'react'
import { Logo } from './components/Logo'
import { SearchBlock } from './components/SearchBlock'
import { ListToDo } from './components/ListToDo';
import { Task, data } from './components/ListToDo/data';
import { Wrapper } from './components/Wrapper';
import { Counter } from './components/Counter'

import cls from './App.module.scss';

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

   const toggleCompleteToDo = (id: Task['id']): void => {
      const mappedToDo = toDoList.map((el) => 
      el.id === id ? {...el, complete: !el.complete} : el);

      setToDoList(mappedToDo);
   }

   const editToDo = (task: Task): void => { 
      const newToDoList = [...toDoList];

      const currentToDo = toDoList.findIndex((todo) => todo.id === task.id)
      newToDoList[currentToDo] = task;

      setToDoList(newToDoList)
   }

  return (
   <Wrapper>
      <div className={ cls.main }>
         <Logo/>
         <SearchBlock addToDo={ addToDo }/>
         <Counter toDoList={ toDoList }/>
         <ListToDo 
            toDoList={ toDoList } 
            deleteToDo={ deleteToDo } 
            toggleCompleteToDo={toggleCompleteToDo}
            editToDo={ editToDo }/>
      </div>
   </Wrapper>
  )
}
export default App
