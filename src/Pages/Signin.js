import React, { useState } from "react";
import axios from 'axios';
import "./signin-style.css"

function Signin() {
  const [inputs, setInputs] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      username: inputs.username,
      password: inputs.password
    };

    axios.post('http://localhost:3001/users', user)
      .then(response => {
        setMessage('User added successfully');
      })
      .catch(error => {
        console.error('There was an error adding the user!', error);
        setMessage('Error adding user');
      });
  }

  return (
    <div>
      <h1>SIGN-IN FORM</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
          <input 
            type="text" 
            name="username" 
            value={inputs.username || ""} 
            onChange={handleChange}
          />
        </label>
        <label>Enter your age:
          <input 
            type="number" 
            name="age" 
            value={inputs.age || ""} 
            onChange={handleChange}
          />
        </label>
        <label>Enter your email:
          <input 
            type="email" 
            name="email" 
            value={inputs.email || ""} 
            onChange={handleChange}
          />
        </label>
        <label>Enter your password:
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

export default Signin;
