const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRoutes = require('./routes/Adding a 404 Error Page/admin');
const shopRoutes = require('./routes/Adding a 404 Error Page/shop');

app.use(bodyParser.urlencoded({extended: true}));
app.use(adminRoutes);
app.use(shopRoutes);
app.use((req, res, next) => {
    res.status(404).send('<h1>Page Not Found!');
});
app.listen(3000);

