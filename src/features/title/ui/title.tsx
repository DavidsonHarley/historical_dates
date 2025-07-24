import React from 'react';
import * as cls from './StyleTitle.module.scss';
type TitleProps = {
  text: string;
};

export function Title({ text }: TitleProps) {
  return (
    <div className={cls.ctnTitle}>
      <h1 className={cls.title}>{text}</h1>
    </div>
  );
}
