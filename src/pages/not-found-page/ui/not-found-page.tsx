import React from 'react';
import { useNavigate } from 'react-router-dom';

export function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>404</h1>
      <button onClick={() => navigate('/')}>back</button>
    </div>
  );
}
