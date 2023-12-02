import cls from './index.module.scss';

interface ButtonProps {
   onClick?: () => void;
   children: React.ReactNode;
}

export const Button = ({ children, onClick }: ButtonProps) => {
   return (
      <button className={ cls.button }
               onClick={ onClick }
      >{ children }</button>
   )
}