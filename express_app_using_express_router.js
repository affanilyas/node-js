const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const admintRoutes = require('./routes/Using Express Router/admin');
const shopRoutes = require('./routes/Using Express Router/shop');

app.use(bodyParser.urlencoded({extended: true}));

app.use(shopRoutes);
app.use(admintRoutes);

app.listen(3000);

