import React, { useState } from "react";
import axios from 'axios';
import "./login-style.css"; // Import the CSS file

function Login() {
  const [inputs, setInputs] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3001/login', {
      username: inputs.username,
      password: inputs.password
    })
    .then(response => {
      setMessage(response.data);
    })
    .catch(error => {
      if (error.response && error.response.status === 401) {
        setMessage('Invalid username or password');
      } else {
        console.error('There was an error connecting to the server!', error);
        setMessage('Error connecting to server');
      }
    });
  }

  return (
    <div>
      <h1>LOGIN FORM</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
          <input 
            type="text" 
            name="username" 
            value={inputs.username || ""} 
            onChange={handleChange}
          />
        </label>
        <label>Enter your Password:
          <input 
            type="password" 
            name="password" 
            value={inputs.password || ""} 
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
