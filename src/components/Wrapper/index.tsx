import { FC } from 'react';
import cls from './index.module.scss';


interface WrapperProps {
   children: React.ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
   return <div className={ cls.wrapper }>{ children }</div>
}