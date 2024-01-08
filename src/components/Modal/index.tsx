import cls from './index.module.scss';

interface Popup {
   active: boolean,
   setActive: React.Dispatch<React.SetStateAction<boolean>>,
   children: React.ReactNode;
}

export const Modal = ( {active, setActive, children}: Popup ) => {
   
   return (
      <div className={ active ? `${ cls.modal} ${cls.active}` : `${ cls.modal }` } onClick={() => setActive(false)} >
         <div className={ cls.content } onClick={e => e.stopPropagation()}>
            {children}
         </div>
      </div>
   )
}