import React from 'react';

import Button from '../../../components/Button';
import Icon, { IconProps } from '../../../components/Unicons';

import {
  Contact,
  ContactContainer,
  ContactContent,
  ContactForm,
  ContactInformation,
  ContactInputs,
} from './styles';

interface Contacts {
  title: string;
  type: 'phone' | 'email' | 'location';
  contact: string;
  icon: IconProps['icon'];
}

const DashboardContact: React.FC = () => {
  const contacts: Contacts[] = [
    {
      title: 'Call Me',
      type: 'phone',
      contact: '+55 18 1111-2222',
      icon: 'UilPhone',
    },
    {
      title: 'Email',
      type: 'email',
      contact: 'alex_limpaNarisZ@hotmail.com',
      icon: 'UilEnvelope',
    },
    {
      title: 'Location',
      type: 'location',
      contact: 'Brazil - Maringá',
      icon: 'UilMapMarker',
    },
  ];

  return (
    <Contact id="contactme">
      <h2>Contact Me</h2>
      <span>Get in touch</span>

      <ContactContainer>
        <div>
          {contacts.map((contact) => (
            <ContactInformation key={contact.contact}>
              <Icon icon={contact.icon} />

              <div>
                <h3>{contact.title}</h3>
                <span>{contact.contact}</span>
              </div>
            </ContactInformation>
          ))}
        </div>

        <ContactForm>
          <ContactInputs>
            <ContactContent>
              <label htmlFor="">Name</label>
              <input type="text" />
            </ContactContent>

            <ContactContent>
              <label htmlFor="">Email</label>
              <input type="email" />
            </ContactContent>
          </ContactInputs>
          <ContactContent>
            <label htmlFor="">Project</label>
            <input type="text" />
          </ContactContent>

          <ContactContent>
            <label htmlFor="">Message</label>
            <textarea cols={0} rows={7} />
          </ContactContent>

          <div>
            <Button isFlex>
              Send Message
              <Icon icon="UilMessage" />
            </Button>
          </div>
        </ContactForm>
      </ContactContainer>
    </Contact>
  );
};

export default DashboardContact;
