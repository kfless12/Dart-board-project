const Sequelize = require('sequelize');
const { STRING, ARRAY, FLOAT } = Sequelize;
const conn = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/Darts'
);

const express = require('express');
const app = express();
const chalk = require('chalk');
const path = require('path');



app.get('/', /*serve index.html here*/)

let port = 3000
app.listen(port, ()=>{console.log(`${port} connected`)})