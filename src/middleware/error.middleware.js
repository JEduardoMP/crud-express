/*
Uso de next:
1.- Continuar con la ejecucion del siguiente middleware
2.- Mandar un error middleware para el manejo de errores(siempre y cuando tenga un argumento)
*/
/*
Errores en el servidor:
1. 4xx -> Errores producidos por el cliente (una mala peticion)
2. 5xx -> Errores por parte del servidor (error de sintaxis, codigo mal implemetado)
*/

const handleError = (error, req, res, next) => {
  res.status(500).json({
    message: error.message
  });
}

module.exports={
  handleError,
}