const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const dbFilePath = './db.json';

app.get('/users', (req, res) => {
  fs.readFile(dbFilePath, (err, data) => {
    if (err) {
      res.status(500).send('Error reading database file');
      return;
    }
    res.json(JSON.parse(data).users);
  });
});

app.post('/users', (req, res) => {
  const newUser = {
    username: req.body.username,
    password: req.body.password
  };

  fs.readFile(dbFilePath, (err, data) => {
    if (err) {
      res.status(500).send('Error reading database file');
      return;
    }
    const db = JSON.parse(data);
    db.users.push(newUser);

    fs.writeFile(dbFilePath, JSON.stringify(db, null, 2), (err) => {
      if (err) {
        res.status(500).send('Error writing to database file');
        return;
      }
      res.status(200).send('User added successfully');
    });
  });
});

app.delete('/users', (req, res) => {
  const { username, password } = req.body;

  fs.readFile(dbFilePath, (err, data) => {
    if (err) {
      res.status(500).send('Error reading database file');
      return;
    }
    let db = JSON.parse(data);
    const userIndex = db.users.findIndex(user => user.username === username && user.password === password);

    if (userIndex === -1) {
      res.status(404).send('User not found');
      return;
    }

    db.users.splice(userIndex, 1);

    fs.writeFile(dbFilePath, JSON.stringify(db, null, 2), (err) => {
      if (err) {
        res.status(500).send('Error writing to database file');
        return;
      }
      res.status(200).send('User deleted successfully');
    });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
