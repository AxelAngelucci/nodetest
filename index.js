require('dotenv').config();
const express = require('express');
const router = require('./routes/index.routes');
const app = express();
const port = process.env.PORT;

app.use(router);
app.use(morgan('dev'));
app.listen(3000, function(){
    console.log(`Funcionando! en el puerto ${port}`);
});
