import React from 'react';
import { useNavigate , useParams} from 'react-router-dom';
import { MainHeader, InvoiceEdit } from '@99Technologies-ai/invoice';
import config from '../../config.json';
const CreateForm = () => {
  const navigate = useNavigate(); 
  const { id } = useParams();

  const handleNewInvoice = () => {
    alert('New Invoice functionality is handled here!');
    // Add logic to handle creating a new invoice
  };

  const handleViewInvoice = (id) => {
    const path = `/invoices/view/${id}`; // Use template literals
    console.log('View Invoice Path:', path); // Log the path
    navigate(path); // Navigate to the path
  };

  const handleView = () => {
    navigate('/invoices');
  };
  const handleClose = ()=>{
    console.log("test");
    navigate('/invoices')
  };
  const onHandleFormSubmit = async (data)=>{
    console.log("test");
    navigate('/invoices')
  };
 

  return (
    <>
      {/* Render components after successful login */}
     
      <InvoiceEdit  invoiceId={id} invoiceApiUrl={config.VITE_APP_API_BASE_URL}  onCloseTab ={handleClose} onInvoiceCreate = {onHandleFormSubmit}/>      {/* Add additional UI or components for creating/viewing invoices here */}
     {/* Assuming you have some way to trigger handleViewInvoice */}
    </>
  );
};

export default CreateForm;
