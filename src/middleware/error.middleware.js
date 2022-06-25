/* eslint-disable import/prefer-default-export */
export const errorHandler = (req, res, next) => {
  console.log('error recibido en el middleware para el manejo de errores');
  res.status(500).json({
    message: 'message',
  });
  next();
};
