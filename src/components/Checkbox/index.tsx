import cls from './index.module.scss';

interface CheckboxProps {
   className?: string;
}

export const Checkbox = ( {className}: CheckboxProps) => {
   return (
      <label>
         <input type="checkbox" className={ cls.real + '' + `${ className }`}/>
         <span className={ cls.custom }> </span>
      </label>
      
   )
}