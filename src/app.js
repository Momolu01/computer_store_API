/* eslint-disable import/extensions */
import express from 'express';

import routerUsers from './routers/users.routers.js';
import errorHandler from './middleware/error.middleware.js';

const app = express();

app.use(express.json());

app.use(routerUsers);

app.use(errorHandler);

export default app;
