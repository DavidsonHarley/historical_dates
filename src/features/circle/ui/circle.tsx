import React, { useRef, useState } from 'react';
import * as cls from './StyleCircle.module.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
export function Circle() {
  const circleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [delayedCount, setDelayedCount] = useState<number>(0);
  useGSAP(() => {
    gsap.to(circleRef.current, { rotation: '+=360' });
  }, [delayedCount]);
  return (
    <>
      <div className={cls.ctnCircle} ref={containerRef}>
        <div className={cls.circle} ref={circleRef}></div>
      </div>
      <button onClick={() => setDelayedCount(delayedCount + 1)}>click</button>
    </>
  );
}
