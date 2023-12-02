import cls from './index.module.scss';

interface InputProps {
   value: string;
   onChange: React.ChangeEventHandler<HTMLInputElement>;
   placeholder?: string;
}

export const Input = ({value, onChange, placeholder}: InputProps) => {
   return <input type="text" 
            name="input" 
            placeholder= { placeholder ? placeholder : 'что хотим сделать'}
            className={ cls.input } 
            value={ value }
            onChange= { onChange }
         />
}