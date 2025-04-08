const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

const products = [
  {
    id: 1,
    name: "Women's Casual wear",
    image: '/photo/16.png',
    price: 500,
    category: 'Casual',
    delivery: 'Free Delivery'
  },
  {
    id: 2,
    name: "Women's Casual wear",
    image: '/photo/17.png',
    price: 300,
    category: 'Casual',
    delivery: 'Free Delivery'
  },
  {
    id: 3,
    name: "Women's Casual wear",
    image: '/photo/18.png',
    price: 400,
    category: 'Casual',
    delivery: 'Free Delivery'
  },
  {
    id: 4,
    name: "Women's Party wear",
    image: '/photo/19.png',
    price: 1000,
    category: 'Party',
    delivery: 'Free Delivery'
  },
  {
    id: 5,
    name: "Women's Party wear",
    image: '/photo/20.png',
    price: 1000,
    category: 'Party',
    delivery: 'Free Delivery'
  },
  {
    id: 6,
    name: "Women's Casual wear",
    image: '/photo/21.png',
    price: 600,
    category: 'Casual',
    delivery: 'Free Delivery'
  },
  {
    id: 7,
    name: "Women's Party wear Lehnga",
    image: '/photo/22.png',
    price: 1000,
    category: 'Party',
    delivery: 'Free Delivery'
  },
  {
    id: 8,
    name: "Women's Party wear Gown",
    image: '/photo/23.png',
    price: 1500,
    category: 'Party',
    delivery: 'Free Delivery'
  }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
