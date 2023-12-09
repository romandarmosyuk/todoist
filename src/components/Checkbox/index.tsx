import { useState } from 'react';
import { Task } from '../ListToDo/data';
import cls from './index.module.scss';

interface CheckboxProps {
   card: Task;
}

export const Checkbox = ( {card}: CheckboxProps) => {
   const [isChecked, setIsChecked] = useState(card.complete)

   const checkHandler = () => {
      setIsChecked(!isChecked)

   }

   card.complete = isChecked;
   console.log(card)

   return (
      <label >
         <input type="checkbox" defaultChecked={ isChecked } onClick={ checkHandler } className={ cls.real }/>
         <span  className={ `${cls.custom} ${ isChecked ? cls.active : ''}` }> </span>
      </label>
      
   )
}