import React from 'react';
import { MainPageLayout } from '../ui/main-page-layout';
import { Title } from '@/features/title';
import { Circle } from '@/features/circle';
import { CountYear } from '@/features/count-year';

export function MainPage() {
  return (
    <MainPageLayout
      title={<Title text="Исторические даты" />}
      circle={<Circle />}
      count={<CountYear />}
    />
  );
}
