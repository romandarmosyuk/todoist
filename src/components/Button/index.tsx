interface ButtonProps {
   onClick?: () => void;
   children: React.ReactNode;
   className?: string;

}

export const Button = ({ children, className, onClick }: ButtonProps) => {
   return (
      <button className={ `${ className }` }
               onClick={ onClick }
      >{ children }</button>
   )
}