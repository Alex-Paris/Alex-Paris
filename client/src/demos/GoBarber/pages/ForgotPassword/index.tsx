import React, { useCallback, useRef, useState } from 'react';
import { FiLogIn, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { useToast } from '../../hooks/context/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Content,
  Background,
  AnimationContainer,
  FakeMail,
  FakeMailContent,
} from './styles';
import { useStorage } from '../../hooks/context/storage';

interface ForgotPasswordFormData {
  email: string;
}

interface MailProps {
  open: boolean;
  link: string;
  name: string;
}

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [mail, setMail] = useState<MailProps>();
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const { forgotUser } = useStorage();

  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Insert an email')
            .email('Insert a valid email'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { id, name } = forgotUser(data.email);

        setMail({
          open: true,
          link: `/demos/GoBarber/reset-password?token=${id}`,
          name,
        });

        addToast({
          type: 'success',
          title: 'Recovery mail sended',
          description:
            'We send you an email to confirm password recovery, check your inbox ',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Password recovery error',
          description:
            'An error occurred while trying to perform password recovery, try again.',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, forgotUser]
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Recovery Password</h1>

            <Input name="email" icon={FiMail} placeholder="Email" />

            <Button loading={loading} type="submit">
              Recover
            </Button>
          </Form>

          <Link to="/demos/GoBarber/">
            <FiLogIn />
            Back to login
          </Link>

          <FakeMail isOpened={mail?.open}>
            <FakeMailContent>
              <h4>Fake Mail Recovery Password:</h4>
              <h3>&quot;</h3>
              <p>Hello, {mail?.name}</p>
              <p>
                It appears that a password change for your account has been
                requested.
              </p>
              <p>
                If that was you, then click on the link below to choose a new
                one. password:
              </p>
              <p>
                <Link to={mail?.link || ''}>Reset my password</Link>
              </p>
              <p>If was not you, then simple discard this email!</p>
              <p>
                Thank you!
                <br />
                <strong>Team GoBarber</strong>
              </p>
              <h3>&quot;</h3>
            </FakeMailContent>
          </FakeMail>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
};

export default ForgotPassword;
