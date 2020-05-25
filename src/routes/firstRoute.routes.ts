import { Router } from 'express';

const firstRoute = Router();

firstRoute.get('/', (request, response) =>
  response.json({ message: 'hello Template' }),
);

export default firstRoute;
