const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Welcome Route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the E-Commerce API!', docs: '/health, /products, /metrics' });
});

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date(), uptime: process.uptime() });
});

// Metrics for Prometheus
app.get('/metrics', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send(`api_requests_total ${process.uptime().toFixed(0)}\napi_uptime_seconds ${process.uptime()}`);
});

// Routes
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');

app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;
