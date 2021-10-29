const express = require('express');
const tasksRoutes = require('./routes/tasks.routes');
const { handleError } = require('./middleware/error.middleware');
const cors = require('cors')

const app = express();

/*
- routes -> Se encarga de agrupar las rutas y delega la solicitud/respuesta al controlador
- controllers ->
  1. Se encarga de dar respuesta a la solicitud
  2. Obtener los datos de los servicios
  3. Extraer datos de la solicitud y pasarselos a los servicios
- services ->
  1. Obtener los datos desde una fuente (archivo, db, otro servicio externo)
  2. Regresar los datos hacía el controlador
  3. Tratar los datos con respecto a los parametros definidos en el controlador
*/

// routes -> controllers -> services

app.use(tasksRoutes);
app.use(express.json);
app.use(cors());

// Handle errors
app.use(handleError)

module.exports = app;
