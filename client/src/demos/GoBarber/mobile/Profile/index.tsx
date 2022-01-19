import React, { ChangeEvent, useCallback, useRef } from 'react';
import { FiMail, FiLock, FiChevronLeft, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/context/auth';
import { useToast } from '../../hooks/context/toast';
import { useStorage } from '../../hooks/context/storage';
import { useMobileRoute } from '../../../../hooks/context/mobileRoute';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

interface ProfileFormData {
  name: string;
  email: string;
  old_password: string;
  password: string;
  password_confirmation: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { userMobile, updateAuthMobile } = useAuth();
  const { addToast } = useToast();
  const { togglePage } = useMobileRoute();
  const { updateUserMobile, updateUserMobileAvatar } = useStorage();

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
          id: userMobile.id,
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

        const response = updateUserMobile(formData);

        updateAuthMobile(response);

        togglePage('Dashboard');

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
    [addToast, updateUserMobile, updateAuthMobile, userMobile.id, togglePage]
  );

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        try {
          const reader = new FileReader();

          reader.addEventListener('load', () => {
            if (reader.result) {
              console.log('id: ' + userMobile.id);
              const updatedUserMobile = updateUserMobileAvatar(
                userMobile.id,
                reader.result.toString()
              );

              updateAuthMobile(updatedUserMobile);
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
    [addToast, updateUserMobileAvatar, userMobile.id, updateAuthMobile]
  );

  const handleGoBack = useCallback(() => {
    togglePage('Dashboard');
  }, [togglePage]);

  return (
    <Container>
      <Content>
        <button onClick={handleGoBack}>
          <FiChevronLeft size={24} color="#999591" />
        </button>

        <label htmlFor="avatar_mobile">
          <img
            src={
              userMobile.avatar_url
                ? userMobile.avatar_url
                : 'http://cdn.onlinewebfonts.com/svg/img_261106.png'
            }
            alt={userMobile.name}
          />

          <input type="file" id="avatar_mobile" onChange={handleAvatarChange} />
        </label>

        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          initialData={{
            name: userMobile.name,
            email: userMobile.email,
          }}
        >
          <p>My profile</p>

          <Input name="name" icon={FiUser} placeholder="Name" />
          <Input name="email" icon={FiMail} placeholder="Email" />

          <Input
            name="old_password"
            icon={FiLock}
            type="password"
            placeholder="Old Password"
            containerStyle={{ marginTop: 16 }}
          />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="New Password"
          />
          <Input
            name="password_confirmation"
            icon={FiLock}
            type="password"
            placeholder="Confirmation Password"
          />

          <Button type="submit">Confirm changes</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Profile;
