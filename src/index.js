import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(<App />);
} else {
  console.error('Root element with id "root" not found in the document.');
}
