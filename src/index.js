import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import { NodeStateProvider } from './provider/node-state-provider';
import { ReactFlowProvider } from 'react-flow-renderer';

ReactDOM.render(
  <React.StrictMode>
    <ReactFlowProvider>
      <NodeStateProvider>
        <App />
      </NodeStateProvider>
    </ReactFlowProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
