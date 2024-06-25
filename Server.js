const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://rangakaarthi:mongomaanavan@website.tngsj.mongodb.net/DB-1', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
});

const User = mongoose.model('users', userSchema);

// Endpoint to add a new user
app.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send('User added successfully');
  } catch (error) {
    res.status(400).send('Error adding user');
  }
});

// Endpoint to authenticate a user
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
      res.status(200).send('Login successful!');
    } else {
      res.status(401).send('Invalid username or password');
    }
  } catch (error) {
    res.status(500).send('Error connecting to server');
  }
});

// Endpoint to delete a user
app.delete('/users', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOneAndDelete({ username, password });
    if (user) {
      res.status(200).send('User deleted successfully');
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send('Error deleting user');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
