import express from 'express';
import routes from './routes';
import logRequest from './middlewares/logRequest';

const app = express();
app.use(express.json());
app.use(logRequest);
app.use(routes);

export default app;
