import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ContactMeController from '../controllers/ContactMeController';

const contactRouter = Router();
const contactMeController = new ContactMeController();

contactRouter.post(
  '/contactme',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      project: Joi.string(),
      message: Joi.string().required().min(10),
    },
  }),
  contactMeController.create
);

export default contactRouter;
