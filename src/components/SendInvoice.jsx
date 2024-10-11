import { useNavigate, useLocation } from "react-router-dom";
import { MainHeader, InvoiceSendEmail  } from '@99Technologies-ai/invoice';
import config from '../../config.json';
const SendInvoice = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { invoiceId } = location.state || {};
   
   
      
        const handleView = ()=>{
          console.log("test");
          navigate('/invoices')
        };
        const handleClose = () => {
            console.log("hello")
            // handleCloseTab();
            navigate(`/invoices/view/${invoiceId}`); // Navigate to the desired route
          };
    return (
      <>
    
  <InvoiceSendEmail invoiceId={invoiceId} invoiceApiUrl={config.VITE_APP_API_BASE_URL} onCloseTab={handleClose} onSendEmail={handleClose}/>
  
     
         </>
    );
  };
  
  export default SendInvoice; // Ensure you have a default export
  