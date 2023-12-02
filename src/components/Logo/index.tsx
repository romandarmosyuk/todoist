import logo from '../../../public/Romchikdo.png';
import icon from '../../../public/rocket.svg';

import cls from './index.module.scss';

export const Logo = () => {
   return (
      <div className={ cls.logo }>
         <img src={ icon } alt="icon" />
         <img src={ logo } alt="logo" />
      </div>
   )
}