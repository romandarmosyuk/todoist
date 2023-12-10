import cls from './index.module.scss';

interface CheckboxProps {
   checked: boolean;
   onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Checkbox = ({ checked, onChange }: CheckboxProps) => {
   return (
      <label >
         <input 
            type="checkbox" 
            checked={ checked } 
            onChange={ onChange } 
            className={ cls.real }/>
         <span  className={ `${cls.custom} ${ checked ? cls.active : ''}` }> </span>
      </label>
      
   )
}