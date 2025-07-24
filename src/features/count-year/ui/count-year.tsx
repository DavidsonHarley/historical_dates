import React from 'react';
import * as cls from './StyleCountYear.module.scss';

export function CountYear() {
  return (
    <div className={cls.ctnCount}>
      <div className={cls.count}>2015</div>
      <div className={cls.count}>2022</div>
    </div>
  );
}
