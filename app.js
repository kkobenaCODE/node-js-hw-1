const express = require('express');

const app = express();

app.use('/users', (req,res,next) => {
    res.send("<h1>hello from bitches!!!!!!!</h1>");
})

app.use((req,res, next) => {
    console.log('fdfdf');
    next();
})

app.use((req,res, next) => {
    res.send("<h1>hello from express</h1>");
})


app.listen(3030);
