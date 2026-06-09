const express = require('express');
const router = express.Router();

const products = [
  { id: 1, name: 'Laptop', price: 999.99, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop' },
  { id: 2, name: 'Smartphone', price: 699.99, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop' },
  { id: 3, name: 'Headphones', price: 199.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop' },
];

router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
