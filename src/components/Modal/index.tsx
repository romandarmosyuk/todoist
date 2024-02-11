import { createPortal } from 'react-dom';
import cls from './index.module.scss';

interface Popup {
   active: boolean,
   setActive: React.Dispatch<React.SetStateAction<boolean>>,
   children: React.ReactNode;
}

export const Modal = ( {active, setActive, children}: Popup ) => {

const modalElement = document.getElementById('modal') || document.body

// if (!active) return null 

   return (
      createPortal(
         <div className={ active ? `${ cls.modal} ${cls.active}` : `${ cls.modal }` } onClick={() => setActive(false)} >
            <div className={ cls.content } onClick={evt => evt.stopPropagation()}>
               {children}
            </div>
         </div>, modalElement
      )
   )
}