import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";

import cls from './index.module.scss';
import { Task } from "../ListToDo/data";

interface SearchBlockProps {
   addToDo: (task: Task) => void;
}

export const SearchBlock = ({ addToDo }: SearchBlockProps) => {
   const [value, setValue] = useState('');

   const handleAdd = () => {
      addToDo({ id: new Date().valueOf(), task: value, complete: false });
      setValue('');
   }

   // const deleteToDo = (id: Task['id']): void => {
   //    const filteredToDoList = toDoList.filter((todo) => todo.id !== id );

   //    settoDoList(newtoDoList);
   // }

   return (
      <div className={ cls.container }>
         <Input value={value} onChange={(evt) => setValue(evt.target.value)}/>
         <Button 
            onClick={handleAdd}>
               Добавить
         </Button>
      </div>
   )
}