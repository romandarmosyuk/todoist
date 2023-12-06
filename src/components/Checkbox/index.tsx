import cls from './index.module.scss';

interface CheckboxProps {
   className?: string;
}

export const Checkbox = ( {className}: CheckboxProps) => {
   return (
      <>
         <input type="checkbox" className={ `${ className }`}/>
         <span className={ cls.checkbox }> </span>
      </>
      
   )
}