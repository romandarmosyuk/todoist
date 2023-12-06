interface InputProps {
   value: string;
   onChange: React.ChangeEventHandler<HTMLInputElement>;
   className?: string;
   placeholder?: string;
   checked?: boolean;
}

export const Input = ({value, onChange, className, placeholder}: InputProps) => {
   return <input type="text" 
            name="input" 
            placeholder= { placeholder ? placeholder : 'Что хотим сделать?'}
            className={ `${className}` } 
            value={ value }
            onChange= { onChange }
         />
}