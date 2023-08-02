//Importar a biblioteca Express.js
const express = require('express');

//criar uma instancia do express
const app = express ();

//definir uma tora para a pagina inicial
app.get('/',(req, res)=>{
    res.send('ola mundo!');
});

//iniciar o servidor e executar na porta 3000
app.listen(3000,()=>{
    console.log('servidor rodando na porta 3000');
});