import React, { useCallback, useRef } from 'react';
import { FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory, useLocation } from 'react-router-dom';

import { useToast } from '../../hooks/context/toast';
import { useStorage } from '../../hooks/context/storage';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background, AnimationContainer } from './styles';

interface ResetPasswordFormData {
  password: string;
  password_confirmation: string;
}

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const history = useHistory();
  const search = useLocation().search;
  const { resetUser } = useStorage();

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string().required('Insert a password'),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref('password'), null],
            'Incorrect confirmation'
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { password } = data;
        const token = new URLSearchParams(search).get('token');

        if (!token) {
          throw new Error();
        }

        resetUser(parseInt(token), password);

        history.push('/demos/GoBarber/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Error resetting password',
          description: 'There was an error resetting your password, try again.',
        });
      }
    },
    [addToast, resetUser, history, search]
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Logon</h1>

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="New password"
              autoComplete="new-password"
            />

            <Input
              name="password_confirmation"
              icon={FiLock}
              type="password"
              placeholder="Confirm password"
              autoComplete="confirm-password"
            />

            <Button type="submit">Change password</Button>
          </Form>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
};

export default ResetPassword;
