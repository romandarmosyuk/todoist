import cls from './index.module.scss';
import { Task } from '../ListToDo/data';

interface CounterProps{
   toDoList: Task[];
}

export const Counter = ({toDoList}: CounterProps) => {
   const total = toDoList.length
 
   const totalCompleted = toDoList.filter((el) => el.complete).length
   return (
      <div className={ cls.counter }>
         <span className={ cls.quantity }>Всего</span>
         <div className={ cls.quantity__counter }>
            <span className={ cls.quantity__number }> { total }</span>
         </div>
         <span className={ cls.done }>Выполнено</span>
         <div className={ cls.done__counter }>
            <span className={ cls.done__number }>{ totalCompleted } из { total }</span>
         </div>
         
      </div>
   )
}