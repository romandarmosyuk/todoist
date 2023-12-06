import { Card } from '../Card/index.tsx';
import './data.tsx';
import { Task } from './data.tsx';
import cls from './index.module.scss';

export interface ListToDoProps {
   toDoList: Task[];
   deleteToDo: (task: Task['id']) => void;
}

export const ListToDo = ({ toDoList, deleteToDo }: ListToDoProps) => {
   return (
      <div className={ cls.container }>
         {toDoList.map(({ id, task, complete }) => (
            <Card key={id} task={task} complete={complete} />
         ))}
      </div>
   )
}