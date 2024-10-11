// AppRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InvoiceHome from './components/ManageInvoices';
import ViewInvoice from './components/ViewInvoices';
import CreateForm from './components/CreateInvoice';
import EditInvoices from './components/EditInvoices';
import SendInvoice from './components/SendInvoice';
import Login from './components/Login'; // Import the new Login component
import Signup from './components/Signup';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} /> {/* Use the new Login component */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/invoices" element={<InvoiceHome />} />
      <Route path="/invoices/view/:id" element={<ViewInvoice />} />
      <Route path="/invoices/new" element={<CreateForm />} />
      <Route path="/invoices/edit/:id" element={<EditInvoices />} />
      <Route path="/invoices/send-email" element={<SendInvoice />} />
    </Routes>
  );
};

export default AppRoutes;
