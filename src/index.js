// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { WorkoutProvider } from './context/WorkoutContext';

ReactDOM.render(
  <WorkoutProvider>
    <App />
  </WorkoutProvider>,
  document.getElementById('root')
);