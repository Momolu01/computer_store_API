/* eslint-disable object-curly-spacing */
/* eslint-disable func-names */
/* eslint-disable import/extensions */
import { config } from 'dotenv';
import app from './app.js';
import sequelize from './database/database.js';

config();

const PORT = process.env.PORT || 8000;
(async function () {
  await sequelize.authenticate();
  await sequelize.sync({force: true});
  app.listen(PORT, () => {
    console.log(`Se esta escuchando el puerto ${PORT}`);
  });
}());
