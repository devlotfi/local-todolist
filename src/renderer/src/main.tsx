import './assets/main.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/theme.context';
import AddGroupModal from './components/add-group-modal.component';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AddGroupModal></AddGroupModal>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
