import React from 'react';
import ReactDOM from 'react-dom/client';
import { Amplify } from 'aws-amplify';

import App from './App';
import AWS_EXPORTS from './aws-exports';

import './index.css';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(AWS_EXPORTS);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
