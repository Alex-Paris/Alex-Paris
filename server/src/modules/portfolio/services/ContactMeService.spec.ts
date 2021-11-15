import AppError from '@shared/errors/AppError';

import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';
import ContactMeService from './ContactMeService';

let fakeMailProvider: FakeMailProvider;
let contactMe: ContactMeService;

describe('ContactMe', () => {
  beforeEach(() => {
    fakeMailProvider = new FakeMailProvider();

    contactMe = new ContactMeService(fakeMailProvider);
  });

  it('should be able to contact me', async () => {
    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

    await contactMe.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      project: 'Test',
      message: 'Need a hand',
    });

    expect(sendMail).toHaveBeenCalled();
  });
});
