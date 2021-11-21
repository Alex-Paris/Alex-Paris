import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import { Link, useHistory } from 'react-router-dom';

import { useToast } from '../../hooks/context/toast';
import { useStorage } from '../../hooks/context/storage';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background, AnimationContainer } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const { addUser } = useStorage();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Insert a name'),
          email: Yup.string()
            .required('Insert an email')
            .email('Insert a valid email'),
          password: Yup.string().min(6, 'Insert at least 6 words'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        addUser(data);

        history.push('/demos/GoBarber/');

        addToast({
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

        addToast({
          type: 'error',
          title: 'Registration error',
          description: 'An error occurred while registering, try again.',
        });
      }
    },
    [addToast, history, addUser]
  );

  return (
    <Container>
      <Background />

      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Create an account</h1>

            <Input name="name" icon={FiUser} placeholder="Name" />
            <Input name="email" icon={FiMail} placeholder="Email" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Password"
            />

            <Button type="submit">Create account</Button>
          </Form>

          <Link to="/demos/GoBarber/">
            <FiArrowLeft />
            Back to Log in
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
