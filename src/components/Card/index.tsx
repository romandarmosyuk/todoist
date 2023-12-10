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
   toggleCompleteToDo: (task: Task['id']) => void;
   toggleIsEdit: (task: Task['id']) => void;
}


export const Card = ({card, deleteToDo, toggleCompleteToDo, toggleIsEdit}: CardProps) => {
   const [value, setValue] = useState(card.task);
   return (
      <div className={ cls.card }>
         <Checkbox checked={card.complete} onChange={ ()=>{toggleCompleteToDo(card.id)}}/>
         {card.isEdit ? 
         (<Input 
            value={ value }  
            className={ cls.title } 
            onChange={(evt) => setValue(evt.target.value)} 
            // placeholder={ card.task } 
            checked={ card.complete }
         />)
            :
         <span className={ cls.title }>{ card.task }</span>
      }
         
         <div className={cls.button__box}>
            <Button 
               className={ cls.button }
               onClick={() => toggleIsEdit(card.id)}>
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