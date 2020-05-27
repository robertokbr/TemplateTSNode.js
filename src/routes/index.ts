import { Router } from 'express';
import repository from './repository.routes';

const routes = Router();
routes.use('/repository', repository);

export default routes;
