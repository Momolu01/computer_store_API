import express from 'express';

import routerUsers from './routers/users.routers.js';
import routerAuth from './routers/auth.routers.js';
import initialSetup from './libs/initialSetup.js';
import routerRepairs from './routers/repairs.routers.js';
// import errorHandler from './middleware/error.middleware.js';

const app = express();

app.use(express.json());

initialSetup();
app.use('/api/v1/', routerAuth);
app.use('/api/v1/users', routerUsers);
app.use('/api/v1/repairs', routerRepairs);

// app.use((err, req, res) => {
//   console.log(err.stack);
//   res.status(500).send('Something is broke');
// });

export default app;
