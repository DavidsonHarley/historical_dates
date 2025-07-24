import React from 'react';
import { MainPage } from '@/pages/main-page/compose/main-page';
import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from '@/pages/not-found-page';


export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export const App = () => {
  return <AppRouter />;
};
