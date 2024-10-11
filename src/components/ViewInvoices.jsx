// src/components/ViewInvoice.jsx

import React from 'react';
import {
  Box,
} from '@mui/material';
import { MainHeader, InvoiceList, InvoiceView } from '@99Technologies-ai/invoice';
import { useNavigate, useParams } from "react-router-dom";
import config from '../../config.json'; 
const ViewInvoices = () => {
  const navigate = useNavigate();
  const { id } = useParams();
    const handleNewInvoice = () => {
        navigate('/invoices/new');
       
      };
      const handleViewInvoice = (id) => {
        console.log(id);
         navigate(`/invoices/view/${id}`);
        // window.open(`/invoices/view/${id}`);
      };
      const handleEditForm = (id) => {
        console.log(id);
        navigate(`/invoices/edit/${id}`);
      
      };
      const handleView = ()=>{
        console.log("test");
        navigate('/invoices')
      };
      const handleSendEmail = (id)=>{
      navigate('/invoices/send-email', { state: { invoiceId: id } });
      };
  return (
    <>
   
    <Box display="flex" >
<InvoiceList invoiceApiUrl={config.VITE_APP_API_BASE_URL} onNewInvoice={handleNewInvoice} onViewInvoice={handleViewInvoice} />

    <InvoiceView invoiceId={id}  invoiceApiUrl={config.VITE_APP_API_BASE_URL} onEditInvoice ={handleEditForm} onSendInvoice = {handleSendEmail}/>
    </Box>
       </>
  );
};

export default ViewInvoices; // Ensure you have a default export
