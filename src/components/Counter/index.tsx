import { useState } from 'react';
import cls from './index.module.scss';
import { Task } from '../ListToDo/data';

// interface CounterProps{
//    toDoList?: Task[];
//    showCount?: () => number;
// }

export const Counter = () => {
   const [count, setCount] = useState(5)
 

   return (
      <div className={ cls.counter }>
         <span className={ cls.quantity }>Всего</span>
         <div className={ cls.quantity__counter }>
            <span className={ cls.quantity__number }> { count }</span>
         </div>
         <span className={ cls.done }>Выполнено</span>
         <div className={ cls.done__counter }>
            <span className={ cls.done__number }>{ count } из { count }</span>
         </div>
         
      </div>
   )
}