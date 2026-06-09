const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const orders = [];

router.post('/', auth, (req, res) => {
  const { items, total } = req.body;
  const order = {
    id: orders.length + 1,
    userId: req.user.id,
    items,
    total,
    date: new Date()
  };
  orders.push(order);
  res.status(201).json(order);
});

router.get('/', auth, (req, res) => {
  const userOrders = orders.filter(o => o.userId === req.user.id);
  res.json(userOrders);
});

module.exports = router;
