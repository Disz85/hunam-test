/**
 * Application entry point
 *
 * Initializes the React application with strict mode, language configuration,
 * and root rendering.
 *
 * @module main
 */

import './index.css';
import './config/language-config';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
