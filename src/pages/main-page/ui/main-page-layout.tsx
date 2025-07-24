import React from 'react';
import * as cls from './StyleMainPageLayout.module.scss';
import { MainPageLayoutProps } from '../model/main-page-types';

export function MainPageLayout({
  children,
  title,
  circle,
  count,
}: MainPageLayoutProps) {
  return (
    <div className={cls.main}>
      <div className={cls.content}>
        <div className={cls.wrapper}>
          <div className={cls.navigationSection}>
            {title}
            <div>navigation</div>
          </div>
          <div className={cls.circleSection}>
            {count}
            {circle}
          </div>
        </div>
        <div>slider</div>
        <button onClick={() => alert('click')}>clicl</button>
        {children}
      </div>
    </div>
  );
}
