import { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import cls from './index.module.scss';
import { Task } from '../ListToDo/data';

export const Card = ({task, complete}: Omit<Task, 'id'>) => {
   const [value, setValue] = useState('');
   return (
      <div className={ cls.card }>
         <Input value={value} onChange={(evt) => setValue(evt.target.value)} placeholder={task}/>
         <Button> Редактировать </Button>
         <Button> Удалить </Button>
      </div>
   )}