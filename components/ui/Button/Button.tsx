import { FC, ReactNode } from 'react';
import style from './Button.module.css';

interface Props {
  children: ReactNode | ReactNode[];
}

const Button: FC<Props> = ({ children }) => {
  return (
    <button className={style.root} type="button">
      {children}
    </button>
  );
};

export default Button;
