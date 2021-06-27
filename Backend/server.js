const express = require('express')
const app = express()
const port = 3000

//Configuracion parametros del server

app.get('/', function (req, res) {
  res.send('Server en ejecución ...')
})

app.get('/home', require('./routes') );


// POST API
app.post('/listen', function (req, res) {
  res.send('POST request to the homepage')
})

//Funcion que deja a la escucha el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado correctamente ${port}`);
});
