// Login.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterComponent } from '@99Technologies-ai/login'; // Adjust the import path as necessary
import config from '../../config.json'; // Adjust the import path as necessary

const Signup = () => {
  const navigate = useNavigate();

  const loginNavigate = async (data) => {
    if(data) {
        navigate('/login')
    }
}

const handleRegister = async (values) => {
    try {
      const registerData = await values; // Handle the Promise from SignupComponent
      if (registerData) {
        // notyf.success('Account Created Successfully!!');
        navigate('/login');
      }
    } catch (error) {
      console.log('Register failed', error);
    //   notyf.error('Registration failed. Please try again.');
    }
  };

  return (
    <div style={{ display: 'grid', minHeight: '100vh',  }}>
             <RegisterComponent url={config.VITE_APP_API_BASE_URL} onSubmit={handleRegister} onNavigate={loginNavigate}/>
    </div>
  );
};

export default Signup;
