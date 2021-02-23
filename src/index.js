import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import { NodeStateProvider } from './provider/node-state-provider';

ReactDOM.render(
  <React.StrictMode>
    <NodeStateProvider>
      <App />
    </NodeStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
