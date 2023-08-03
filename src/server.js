//Importar a biblioteca Express.js
const express = require('express');
const mysql = require('mysql');

//criar uma instancia do express
const app = express ();

const dbconfig = {
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'crm',
    port: 3306,
};

const connection = mysql.createConnection(dbconfig);

connection.connect ((err) => {
    if (err){
        console.log('Erro aoconectar ao banco de daods', err);
        return;
    }
    console.log('Concectado ao banco de dados!');
});

//definir uma tora para a pagina inicial
app.get('/',(req, res)=>{
    //fazendo consulta ao banco de dados
    const query = 'SELECT * FROM usuarios';

    connection.query(query,(err, result)=> {
        if (err){
            console.error('Erro na consulta:', err);
            res.status(500), send('Erro na consulta ao banco de dados');
            return;
        }

        //processar os resultados da consulta
        console.log('resultado da consulta:');
        console.log(result);

        //enviar a resposta ao cliente
        res.send(result);
    });
});

//iniciar o servidor e executar na porta 3000
app.listen(3000,()=>{
    console.log('servidor rodando na porta 3000');
});

