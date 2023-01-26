import './App.css';
import React from 'react';

const Login = () => {
  return (
    <div className="App">
      <div className='login'>
        <h1>Login</h1>
        <input type="text" placeholder="Username..."/>
        <input type="password" placeholder="Password..."/>
        <button> Login</button>
      </div>
    </div>
  );
}

export default Login;