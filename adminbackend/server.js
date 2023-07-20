const express = require('express');
const app = express();
require('./db/conn')

const port = process.env.PORT || 3000;

app.use(express.json());
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');

app.use('/users', userRoutes)

app.use('/products', productRoutes)



app.listen(port);