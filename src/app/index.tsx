import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { Providers } from './providers';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Root element with id 'root' not found");
}

const root = ReactDOM.createRoot(rootElement);

root.render(<Providers />);
