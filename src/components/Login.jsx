// Login.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginComponent } from '@99Technologies-ai/login'; // Adjust the import path as necessary
import config from '../../config.json'; // Adjust the import path as necessary

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    try {
      const loginData = await values; // Assuming values returns login data
    //   alert('Login Successful!'); // Optional alert
      navigate("/invoices"); // Navigate to the invoices page on successful login
    } catch (error) {
      console.log('Login failed', error);
    }
  };
  const registerNavigate = async (data) => {
    console.log("test");
    if(data) {
      console.log("test");
        navigate('/signup')
    }
}

  return (
    <div style={{ display: 'grid', minHeight: '100vh',  }}>
      <LoginComponent 
        url={config.VITE_APP_API_AUTH_BASE_URL} 
        onSubmit={handleLogin} 
        onNavigate={registerNavigate}
      />
    </div>
  );
};

export default Login;
