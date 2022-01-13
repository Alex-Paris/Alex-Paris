import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/context/auth';
import { useToast } from '../../hooks/context/toast';
import { useMobileRoute } from '../../../../hooks/context/mobileRoute';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, CreateAccountButton } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signInMobile } = useAuth();
  const { addToast } = useToast();
  const { togglePage } = useMobileRoute();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Insert an email')
            .email('Insert a valid email'),
          password: Yup.string().required('Required password'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signInMobile({
          email: data.email,
          password: data.password,
        });

        togglePage('Dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Authentication error',
          description: 'There was an error logging in, check the credentials.',
        });
      }
    },
    [signInMobile, addToast, togglePage]
  );

  const forgotPage = useCallback(() => {
    togglePage('Dashboard');
  }, [togglePage]);

  const createAccountPage = useCallback(() => {
    togglePage('SignUp');
  }, [togglePage]);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Login - Client</h1>

          <Input name="email" icon={FiMail} placeholder="Email" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
            autoComplete="password"
          />

          <Button type="submit">Log in</Button>

          <Link onClick={forgotPage} to="#">
            Forgot my password
          </Link>
        </Form>

        <CreateAccountButton>
          <Link onClick={createAccountPage} to="#">
            <FiLogIn />
            Create an account
          </Link>
        </CreateAccountButton>
      </Content>
    </Container>
  );
};

export default SignIn;
