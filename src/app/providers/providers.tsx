import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from '../routers';

export function Providers() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
