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

    axios.get('http://localhost:3001/users')
      .then(response => {
        const users = response.data;
        const { username, password } = inputs;

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
          setMessage('Login successful!');
        } else {
          setMessage('Invalid username or password');
        }
      })
      .catch(error => {
        console.error('There was an error fetching the user data!', error);
        setMessage('Error connecting to server');
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
