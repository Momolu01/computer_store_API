/* eslint-disable import/extensions */
import express from 'express';

import { createRoles } from './libs/initialSetup.js';
import routerUsers from './routers/users.routers.js';
// import routerRepairs from './routers/repairs.routers.js';
// import errorHandler from './middleware/error.middleware.js';

const app = express();
createRoles();

app.use(express.json());

app.use('/api/v1/users', routerUsers);
// app.use('/api/v1/repairs', routerRepairs);

// app.use(errorHandler);

export default app;
