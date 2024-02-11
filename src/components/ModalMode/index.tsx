import { Button } from "../Button";
import { Task } from "../ListToDo/data";
import { Modal } from "../Modal";

import cls from './index.module.scss';

interface ModalModeProps {
   deleteToDo: (task: Task['id']) => void;
   modalClose: () => void;
   active: boolean,
   setActive: React.Dispatch<React.SetStateAction<boolean>>,
   card: Task;
}

export const ModalMode = ({deleteToDo, modalClose, active, setActive, card}: ModalModeProps) => {
   return (
      <Modal active={active} setActive={setActive}>
         <span className={ cls.popupTitle }>Вы точно хотите удалить текущую задачу?</span>
         <div className={ cls.popupBtn }>
            <Button className={ `${cls.buttonPopup}  ${ cls.buttonRed}` } onClick={() => deleteToDo()}>
               <span>Да!</span> 
            </Button>
            <Button className={ `${cls.buttonPopup} ${cls.buttonBlue}` } onClick={() => modalClose()}>
               <span>Отмена</span> 
            </Button>
         </div>
      </Modal>
   )
}