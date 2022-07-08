/* eslint-disable wrap-iife */
/* eslint-disable object-curly-spacing */
/* eslint-disable func-names */
/* eslint-disable import/extensions */
import { config } from 'dotenv';
import app from './app.js';
import sequelize from './database/database.js';
import { createRoles } from './libs/initialSetup.js';

config();

const PORT = process.env.PORT || 8000;
(async function () {
  await sequelize.sync({force: true});
  createRoles();
  app.listen(PORT, () => {
    console.log(`Se esta escuchando el puerto ${PORT}`);
  });
})();
