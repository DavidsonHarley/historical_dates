import React, { useRef, useState } from 'react';
import * as cls from './StyleCircle.module.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { DATA_CIRCLE, DataCircleType } from '../lib/data-circle';

interface PositionedElementProps {
  angle: number;
  children?: React.ReactNode;
}

const PositionedElement = ({ angle, children }: PositionedElementProps) => {
  const radius = 265;
  const angleInRadians = (angle * Math.PI) / 180;

  const x = radius * Math.cos(angleInRadians);
  const y = radius * Math.sin(angleInRadians);

  return (
    <div
      className={cls.positionedElement}
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
      }}
    >
      {children}
    </div>
  );
};

export function Circle() {
  const [delayedCount, setDelayedCount] = useState<number>(0);
  const circleRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.to(circleRef.current, { rotation: '+=120' });
  }, [delayedCount]);
  return (
    <>
      <div className={cls.ctnCircle}>
        <div className={cls.circleContainer} ref={circleRef}>
          <div className={cls.circle}></div>
          {DATA_CIRCLE.map((item: DataCircleType) => (
            <PositionedElement key={item.id} angle={item.angle}>
              <div className={cls.marker}></div>
            </PositionedElement>
          ))}
        </div>
      </div>
      <button onClick={() => setDelayedCount(delayedCount + 1)}>click</button>
    </>
  );
}
