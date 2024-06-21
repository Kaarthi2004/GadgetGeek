import React, { useState } from "react";
import axios from 'axios';
import "./login-style.css"; // Import the CSS file

function DeleteUser() {
  const [inputs, setInputs] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.delete('http://localhost:3001/users', { data: inputs })
      .then(response => {
        setMessage('User deleted successfully');
      })
      .catch(error => {
        console.error('There was an error deleting the user!', error);
        setMessage('Error deleting user');
      });
  }

  return (
    <div>
      <h1>DELETE USER</h1>
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
  )
}

export default DeleteUser;
