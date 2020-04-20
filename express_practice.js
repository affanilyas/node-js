const express = require('express');
const app = express();

app.use('/users', (req, res, next) => {
    console.log('users page');
    res.send('<h1>Hello users</h1>');
});

app.use('/', (req, res, next) => {
    console.log('empty');
    res.send('<h1>The homee page</h1>');
}); 

app.use((req, res, next) => {
    console.log('answer for number 2');
    res.send('<h1>Answer for number 2</h1>');
});
 

app.listen(3000);