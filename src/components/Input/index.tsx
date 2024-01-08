interface InputProps {
   value: string;
   onChange: React.ChangeEventHandler<HTMLInputElement>;
   className?: string;
   autoFocus?: React.HTMLAttributes<HTMLInputElement>;
}

export const Input = ({value, onChange, className}: InputProps) => {
   return <input type="text" 
            name="input" 
            placeholder= 'Что хотим сделать?'
            className={ `${className}` } 
            value={ value }
            onChange= { onChange }
            // autoFocus
         />
}