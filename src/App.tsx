// App.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MainHeader } from '@99Technologies-ai/invoice';
import AppRoutes from './routes';

function App() {
  const navigate = useNavigate();
  const location = useLocation(); // To get the current route

  const handleView = () => {
    navigate('/invoices');
  };

  return (
    <>
      {/* Render the MainHeader if not on the login page */}
      {!(location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup') && <MainHeader onViewInvoices={handleView} />}

      {/* App Routes */}
      <AppRoutes />
    </>
  );
}

export default App;
