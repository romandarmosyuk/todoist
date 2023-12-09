import { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import cls from './index.module.scss';
import { Task } from '../ListToDo/data';
import edit from '../../../public/edit.png';
import del from '../../../public/delete.png';
import { Checkbox } from '../Checkbox';

interface CardProps {
   card: Task;
   deleteToDo: (task: Task['id']) => void;
}


export const Card = ({card, deleteToDo}: CardProps) => {
   const [value, setValue] = useState('');
   return (
      <div className={ cls.card }>
         <Checkbox card={card}/>
         <Input 
            value={ value }  
            className={ cls.input } 
            onChange={(evt) => setValue(evt.target.value)} 
            placeholder={ card.task } 
            checked={ card.complete }
         />
         <div className={cls.button__box}>
            <Button className={ cls.button }>
               <img  src={ edit }  alt="edit" />
            </Button>
            <Button 
               className={ cls.button }
               onClick={() => deleteToDo(card.id) }
            >
               <img  src={ del }  alt="delete" />
            </Button>
         </div>
         
      </div>
   )}