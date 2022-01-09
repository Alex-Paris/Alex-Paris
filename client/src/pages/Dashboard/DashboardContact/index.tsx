import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { toast } from 'react-toastify';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import TextArea from '../../../components/TextArea';
import Icon, { IconProps } from '../../../components/Unicons';
import getValidationErrors from '../../../utils/getValidationErrors';

import api from '../../../services/api';

import {
  Contact,
  ContactContainer,
  ContactInformation,
  ContactInputs,
} from './styles';

interface Contacts {
  title: string;
  type: 'phone' | 'email' | 'location';
  contact: string;
  icon: IconProps['icon'];
}

interface ContactMeFormData {
  name: string;
  email: string;
  project: string;
  message: string;
}

const DashboardContact: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);
  const contacts: Contacts[] = [
    {
      title: 'Call Me',
      type: 'phone',
      contact: '+55 18 99784-0983',
      icon: 'UilPhone',
    },
    {
      title: 'Email',
      type: 'email',
      contact: 'me@alexparis.dev',
      icon: 'UilEnvelope',
    },
    {
      title: 'Location',
      type: 'location',
      contact: 'Brazil - Maringá',
      icon: 'UilMapMarker',
    },
  ];

  const handleSubmit = useCallback(async (data: ContactMeFormData) => {
    try {
      setLoading(true);
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Insert a name'),
        email: Yup.string()
          .required('Insert an email')
          .email('Insert a valid email'),
        project: Yup.string().required('Insert a project'),
        message: Yup.string()
          .required('Insert a message')
          .min(10, 'Insert at least 10 words'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await toast
        .promise(api.post('/portfolio/contactme', data), {
          pending: 'Sending your message...',
          success: 'Message Sent! Thank you! 👻',
          error: 'An error has been detected! 🤯 Please, try again later',
        })
        .then(() => {
          formRef.current?.reset(data);
        });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }
    } finally {
      setLoading(false);
    }
  }, []);

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

        <Form ref={formRef} onSubmit={handleSubmit}>
          <ContactInputs>
            <Input name="name" containerHolder="Name" />

            <Input name="email" containerHolder="Email" />
          </ContactInputs>
          <Input name="project" containerHolder="Project" />

          <TextArea name="message" containerHolder="Message" />
          <div>
            <Button isFlex loading={!loading} type="submit">
              Send Message
              <Icon icon="UilMessage" />
            </Button>
            <i> (in maintenance...)</i>
          </div>
        </Form>
      </ContactContainer>
    </Contact>
  );
};

export default DashboardContact;
