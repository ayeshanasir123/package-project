

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import { MainHeader, InvoiceHeader, InvoicePaymentSummary, InvoiceDetailList } from '@99Technologies-ai/invoice';
import ViewInvoice from './ViewInvoices'
import config from '../../config.json';  // Assuming config is in the parent folder

const InvoiceHome = () => {
    const navigate = useNavigate(); 
  const handleNewInvoice = () => {
    // alert('New Invoice functionality is handled here!');
    navigate ('/invoices/new')
    // Add logic to handle creating a new invoice
  };

  const handleViewInvoice = (id) => {
    const path = `/invoices/view/${id}`; // Use template literals
    console.log('View Invoice Path:', path); // Log the path
    navigate(`/invoices/view/${id}`); // Navigate to the path
};
const handleView = ()=>{
    navigate('/invoices')
  };

  return (
    <>
      {/* Render components after successful login */}
  
      <InvoiceHeader onNewInvoice={handleNewInvoice} />
      <InvoicePaymentSummary invoiceApiUrl={config.VITE_APP_API_BASE_URL} />
      <InvoiceDetailList onViewInvoice={handleViewInvoice} invoiceApiUrl={config.VITE_APP_API_BASE_URL} />
    </>
  );
};

export default InvoiceHome;
 