const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8000;

app.listen(PORT, () => {
  console.log('Dentro del server')
})

// Middleware built.in (incorporado)
// Codifica los datos que son enviados a través de x-www-urlencode
app.use(express.urlencoded({extended: true})); // Atends petitions on GET, PUT, POST, DELETE
app.use(express.json());
app.use(express.static('publics')); //Indica que el servidor -> servirá archivos estaticos de este directorio

// Middleware third
app.use(morgan('dev'));

// Middleware aplication
app.get('/', (request, response) => {
  console.log(request.query);
  response.send('Hello world!');
  // response.sendFile(path.resolve('index.html'));
}); // Atends petitions by get method

app.get('/task', async (request, response) => {
  try {
    const tasks = await fs.readFile('tasks.json', 'utf8');
    response.json(JSON.parse(tasks));
  } catch (error) {
    console.log(error);
  }
});

app.post('/task', (request, response) => {
  console.log(request.body);
});

app.put('/task/:TaskId', (request, response) => {
  console.log(request.params);
})