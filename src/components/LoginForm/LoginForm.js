import React, { useState } from 'react';

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
        // Handle the login response in this block
        if (data.accessToken) {
          // Login successful, save the access token and perform any necessary actions
          const accessToken = data.accessToken;
          // For example, you can save the token to local storage or state
          localStorage.setItem('accessToken', accessToken);
        } else {
          // Login failed, handle the error, e.g., show an error message
          setError('Login failed. Please check your credentials.');
        }
      })
      .catch((error) => {
        // Handle network or request error, e.g., show an error message
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
