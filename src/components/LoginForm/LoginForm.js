import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userCredentials = {
      email: email,
      password: password,
    };

    
    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userCredentials),
    })
      .then((response) => response.json())
      .then((data) => {
        
        if (data.accessToken) {
          
          const accessToken = data.accessToken;
          
          localStorage.setItem('accessToken', accessToken);
        } else {
          
          setError('Login failed. Please check your credentials.');
        }
      })
      .catch((error) => {
        
        setError('An error occurred. Please try again later.');
      });
  };
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
