const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const router = express.Router();

// Mock User Database
const users = [];

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { id: users.length + 1, email, password: hashedPassword };
  users.push(user);
  res.status(201).json({ message: 'User registered successfully', userId: user.id });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'supersecretkey', { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;
