import { Card } from '../Card/index.tsx';
import './data.tsx';
import { Task } from './data.tsx';
import cls from './index.module.scss';

interface ListToDoProps {
   toDoList: Task[];
}

export const ListToDo = ({ toDoList }: ListToDoProps) => {
   return (
      <div className={ cls.container }>
         {toDoList.map(({ id, task, complete }) => (
            <Card key={ id } task={task} complete={complete}/>
         ))}
      </div>
   )
}