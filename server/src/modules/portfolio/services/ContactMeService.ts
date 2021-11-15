import { injectable, inject } from 'tsyringe';
import path from 'path';

import AppError from '@shared/errors/AppError';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';

interface IRequestDTO {
  name: string;
  email: string;
  project: string;
  message: string;
}

@injectable()
class ContactMeService {
  constructor(
    @inject('MailProvider')
    private mailProvider: IMailProvider
  ) {}

  public async execute({
    name,
    email,
    project,
    message,
  }: IRequestDTO): Promise<void> {
    const contactMeTemplate = path.resolve(
      __dirname,
      '..',
      'views',
      'contact_me.hbs'
    );

    await this.mailProvider.sendMail({
      subject: '[Portfolio | Alex Paris] Contacted by: ' + name,
      templateData: {
        file: contactMeTemplate,
        variables: {
          name,
          email,
          project,
          message,
        },
      },
    });
  }
}

export default ContactMeService;
