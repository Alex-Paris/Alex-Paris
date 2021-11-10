import React from 'react';
import {
  UilPhone,
  UilEnvelope,
  UilMapMarker,
  UilMessage,
  // @ts-expect-error: React-Unicons doesnt have @types yet
} from '@iconscout/react-unicons';

import Button from '../../../components/Button';

import {
  Contact,
  ContactContainer,
  ContactContent,
  ContactForm,
  ContactInformation,
  ContactInputs,
} from './styles';

const DashboardContact: React.FC = () => {
  return (
    <Contact id="contact">
      <h2>Contact Me</h2>
      <span>Get in touch</span>

      <ContactContainer>
        <div>
          <ContactInformation>
            <UilPhone size="2rem" />

            <div>
              <h3>Call Me</h3>
              <span>+55 18 99784-0983</span>
            </div>
          </ContactInformation>

          <ContactInformation>
            <UilEnvelope size="2rem" />

            <div>
              <h3>Email</h3>
              <span>alex_paris28@hotmail.com</span>
            </div>
          </ContactInformation>

          <ContactInformation>
            <UilMapMarker size="2rem" />

            <div>
              <h3>Location</h3>
              <span>Brazil - Maringá</span>
            </div>
          </ContactInformation>
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
              <UilMessage />
            </Button>
          </div>
        </ContactForm>
      </ContactContainer>
    </Contact>
  );
};

export default DashboardContact;
