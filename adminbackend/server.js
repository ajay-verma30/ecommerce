const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
app.use('/users', userRoutes)

app.use('/products', productRoutes)



app.listen(port);