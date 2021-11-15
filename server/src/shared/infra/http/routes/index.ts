import { Router } from 'express';

import contactRouter from '@modules/portfolio/infra/http/routes/contact.routes';

const routes = Router();

routes.use('/portfolio', contactRouter);

export default routes;
