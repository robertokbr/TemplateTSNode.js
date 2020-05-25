import { Router } from 'express';
import firstRoute from './firstRoute.routes';

const routes = Router();
routes.use('/', firstRoute);

export default routes;
