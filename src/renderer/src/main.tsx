import './assets/main.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/theme.context';
import AddGroupModal from './components/add-group-modal.component';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <AddGroupModal></AddGroupModal>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
