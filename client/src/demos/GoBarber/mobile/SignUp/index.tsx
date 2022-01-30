import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { useStorage } from '../../hooks/context/storage';
import { useMobileRoute } from '../../../../hooks/context/mobileRoute';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, CreateAccountButton } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addUserMobile } = useStorage();
  const { togglePage, sendNotification } = useMobileRoute();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Insert a name'),
          email: Yup.string()
            .required('Insert an email')
            .email('Insert a valid email'),
          password: Yup.string().min(6, 'Need at least 6 digits'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        addUserMobile(data);

        togglePage('SignIn');

        sendNotification({
          type: 'success',
          title: 'Registration performed!',
          description: 'You can now login to GoBarber!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        sendNotification({
          type: 'error',
          title: 'Registration error',
          description: 'An error occurred while registering, try again.',
        });
      }
    },
    [addUserMobile, sendNotification, togglePage]
  );

  const signInPage = useCallback(() => {
    togglePage('SignIn');
  }, [togglePage]);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Create your account</h1>

          <Input name="name" icon={FiUser} placeholder="Name" />

          <Input name="email" icon={FiMail} placeholder="Email" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
            autoComplete="password"
          />

          <Button type="submit">Create</Button>
        </Form>

        <CreateAccountButton>
          <Link onClick={signInPage} to="#">
            <FiArrowLeft />
            Back to login
          </Link>
        </CreateAccountButton>
      </Content>
    </Container>
  );
};

export default SignUp;
