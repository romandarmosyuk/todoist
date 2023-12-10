import { Card } from '../Card/index.tsx';
import './data.tsx';
import { Task } from './data.tsx';
import cls from './index.module.scss';

export interface ListToDoProps {
   toDoList: Task[];
   deleteToDo: (task: Task['id']) => void;
   toggleCompleteToDo: (task: Task['id']) => void;
   toggleIsEdit: (task: Task['id']) => void;
}

export const ListToDo = ({ toDoList, deleteToDo, toggleCompleteToDo,toggleIsEdit }: ListToDoProps) => {

   const emptyToDo = toDoList.map((card) => (
      <Card 
         key={card.id} 
         card={card} 
         deleteToDo = {deleteToDo} 
         toggleCompleteToDo={toggleCompleteToDo}
         toggleIsEdit={toggleIsEdit}/>
   ))

   return (
      <div className={ cls.container }>
         {
            toDoList.length ? emptyToDo :
            <div className={ cls.empty }>
               <img className={ cls.image } src="public/Clipboard.png" alt="empty" />
               <div className={ cls.title }>
                  <p>Список задач пуст</p>
                  <p>Добавьте новую задачу!</p>
               </div>
            </div>
         }
         
      </div>
   )
}