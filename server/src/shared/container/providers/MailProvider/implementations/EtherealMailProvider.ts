import nodemailer, { Transporter } from 'nodemailer';
import { injectable, inject } from 'tsyringe';
import mailConfig from '@config/mail';

import IMailProvider from '../models/IMailProvider';
import ISendMailDTO from '../dtos/ISendMailDTO';

import IMailTemplateProvider from '../../MailTemplateProvider/models/IMailTemplateProvider';

@injectable()
export default class EtherealMailProvider implements IMailProvider {
  private client: Transporter;

  constructor(
    @inject('MailTemplateProvider')
    private mailTemplateProvider: IMailTemplateProvider
  ) {
    nodemailer.createTestAccount((err, account) => {
      if (err) {
        console.log(
          'EtherealMailProvider.createTestAccount(Ignored): ' + err.message
        );
        return;
      }

      if (!account) {
        console.log(
          'EtherealMailProvider.createTestAccount(Ignored): account test not created'
        );
        return;
      }

      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });

      this.client = transporter;
    });
  }

  public async sendMail({
    to,
    from,
    subject,
    templateData,
  }: ISendMailDTO): Promise<void> {
    const defFrom = mailConfig.defaults.from;
    const defTo = mailConfig.defaults.to;

    const message = await this.client.sendMail({
      from: {
        name: from?.name || defFrom.name,
        address: from?.email || defFrom.email,
      },
      to: {
        name: to?.name || defTo.name,
        address: to?.email || defTo.email,
      },
      subject,
      html: await this.mailTemplateProvider.parse(templateData),
    });

    console.log(
      'EtherealMailProvider.sendMail: Message sent: %s',
      message.messageId
    );
    console.log(
      'EtherealMailProvider.sendMail: Preview URL: %s',
      nodemailer.getTestMessageUrl(message)
    );
  }
}
