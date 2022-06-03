import { FC, ReactNode } from 'react';
import style from './Marquee.module.css';

interface Props {
  children: ReactNode[];
}

const Marquee: FC<Props> = ({ children }) => {
  return (
    <div className={style.root}>
      <div className={style.container}>{children}</div>
    </div>
  );
};

export default Marquee;