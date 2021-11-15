import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ContactMeService from '@modules/portfolio/services/ContactMeService';

export default class ContactMeController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, project, message } = request.body;

    const contactMe = container.resolve(ContactMeService);

    await contactMe.execute({
      name,
      email,
      project,
      message,
    });

    return response.status(204).json();
  }
}
