import { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import cls from './index.module.scss';
import { Task } from '../ListToDo/data';
import edit from '../../../public/edit.png';
import del from '../../../public/delete.png';
import { Checkbox } from '../Checkbox';
import { Modal } from '../Modal';

interface CardProps {
   card: Task;
   deleteToDo: (task: Task['id']) => void;
   toggleCompleteToDo: (task: Task['id']) => void;
   editToDo: (task: Task) => void;
}


export const Card = (props: CardProps) => {

   const {card, deleteToDo, toggleCompleteToDo, editToDo} = props;

   const [value, setValue] = useState(card.task);

   const [modalActive, setModalActive] = useState(false);

   return (
         <div className={ cls.card }>
            <Checkbox checked={card.complete} onChange={ ()=> toggleCompleteToDo(card.id) }/>
            {card.isEdit ? 
            (<Input 
               value={ value }  
               className={ cls.title } 
               onChange={(evt) => setValue(evt.target.value)} 
            />)
               :
            <span className={ card.complete ? `${cls.title} ${cls.titleChecked}` : `${cls.title}`  }>{ card.task }</span>
         }
            
            <div className={cls.button__box}>
               {card.isEdit ? ( 
                  <Button 
                     className={ cls.button }
                     onClick={() => editToDo({...card, task: value, isEdit: false})}>
                        <span className={ cls.save }>Save</span>
                  </Button>
               ) : (
                  <Button 
                     className={ cls.button }
                     onClick={() => editToDo({...card, isEdit: true})}>
                     <img  src={ edit }  alt="edit" />
                  </Button>
               )
            
            }
               <Button 
                  className={ cls.button }
                  onClick={() => setModalActive(true) }
               >
                  <img  src={ del }  alt="delete" />
               </Button>
               <Modal active={modalActive} setActive={setModalActive}>
                  <span className={ cls.popupTitle }>Вы точно хотите удалить
 текущую задачу?</span>
                  <div className={ cls.popupBtn }>
                     <Button className={ `${cls.buttonPopup}  ${ cls.buttonRed}` } onClick={() => deleteToDo(card.id)}>
                       <span>Да!</span> 
                     </Button>
                     <Button className={ `${cls.buttonPopup} ${cls.buttonBlue}` } onClick={() => setModalActive(false)}>
                       <span>Отмена</span> 
                     </Button>
                  </div>
               </Modal>
            </div>  
         </div>
         
   )}