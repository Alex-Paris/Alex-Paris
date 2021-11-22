import React, { ChangeEvent, useCallback, useRef } from 'react';
import { FiMail, FiUser, FiLock, FiCamera, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/context/auth';
import { useToast } from '../../hooks/context/toast';
import { useStorage } from '../../hooks/context/storage';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AvatarInput } from './styles';

interface ProfileFormData {
  name: string;
  email: string;
  old_password: string;
  password: string;
  password_confirmation: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const { user, updateAuth } = useAuth();
  const { updateUser, updateUserAvatar } = useStorage();

  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Insert a name'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Insert a valid email'),
          old_password: Yup.string(),
          password: Yup.string().when('old_password', {
            is: '',
            then: Yup.string(),
            otherwise: Yup.string().min(6, 'Insert at least 6 words'),
          }),
          password_confirmation: Yup.string().when('old_password', {
            is: '',
            then: Yup.string(),
            otherwise: Yup.string().oneOf(
              [Yup.ref('password'), null],
              'Incorrect confirmation'
            ),
          }),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { name, email, old_password, password, password_confirmation } =
          data;

        const formData = {
          name,
          email,
          ...(old_password
            ? {
                old_password,
                password,
                password_confirmation,
              }
            : {}),
        };

        const response = updateUser(formData);

        updateAuth(response);

        history.push('/demos/GoBarber/dashboard');

        addToast({
          type: 'success',
          title: 'Updated profile!',
          description:
            'Your profile information has been updated successfully!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Update error',
          description:
            'An error occurred while updating the profile, try again.',
        });
      }
    },
    [addToast, history, updateUser, updateAuth]
  );

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        try {
          const reader = new FileReader();

          reader.addEventListener('load', () => {
            if (reader.result) {
              const updatedUser = updateUserAvatar(
                user.id,
                reader.result.toString()
              );

              updateAuth(updatedUser);
            }
          });

          reader.readAsDataURL(e.target.files[0]);

          addToast({
            type: 'success',
            title: 'Avatar updated!',
          });
        } catch {
          addToast({
            type: 'error',
            title: 'Update avatar error',
            description:
              'An error occurred while updating the avatar, try again.',
          });
        }
      }
    },
    [addToast, updateUserAvatar, user.id, updateAuth]
  );

  return (
    <Container>
      <header>
        <div>
          <Link to="/demos/GoBarber/dashboard">
            <FiArrowLeft />
          </Link>
        </div>
      </header>

      <Content>
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          initialData={{
            name: user.name,
            email: user.email,
          }}
        >
          <AvatarInput>
            <img
              src={
                user.avatar_url
                  ? user.avatar_url
                  : 'http://cdn.onlinewebfonts.com/svg/img_261106.png'
              }
              alt={user.name}
            />
            <label htmlFor="avatar">
              <FiCamera />

              <input type="file" id="avatar" onChange={handleAvatarChange} />
            </label>
          </AvatarInput>

          <h1>Meu perfil</h1>

          <Input name="name" icon={FiUser} placeholder="Name" />
          <Input name="email" icon={FiMail} placeholder="Email" />

          <Input
            containerStyle={{ marginTop: 24 }}
            name="old_password"
            icon={FiLock}
            type="password"
            placeholder="Actual password"
          />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="New password"
          />

          <Input
            name="password_confirmation"
            icon={FiLock}
            type="password"
            placeholder="Confirmation password"
          />

          <Button type="submit">Confirm changes</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Profile;
