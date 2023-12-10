import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";

import cls from './index.module.scss';
import { Task } from "../ListToDo/data";
import plus from '../../../public/plus.png';

interface SearchBlockProps {
   addToDo: (task: Task) => void;
}

export const SearchBlock = ({ addToDo }: SearchBlockProps) => {
   const [value, setValue] = useState('');

   const handleAdd = (): void => {
      addToDo({ id: new Date().valueOf(), task: value, complete: false, isEdit: false });
      setValue('');
   }

   return (
      <div className={ cls.container }>
         <Input value={ value } className={ cls.input } onChange={(evt) => setValue(evt.target.value)}/>
         <Button 
            className={ cls.button }
            onClick={ handleAdd }>
               <div className={ cls.button__box }>
                  <span>Добавить</span>
                  <img src={ plus } alt="plus" />
               </div>
         </Button>
      </div>
   )
}