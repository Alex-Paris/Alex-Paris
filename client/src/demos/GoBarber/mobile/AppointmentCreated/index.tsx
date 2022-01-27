import React, { useCallback, useMemo } from 'react';
import { FiCheck } from 'react-icons/fi';
import { format } from 'date-fns';
import enUS from 'date-fns/locale/en-US';

import { useMobileRoute } from '../../../../hooks/context/mobileRoute';

import Button from '../../components/Button';

import { Container } from './styles';

const AppointmentCreated: React.FC = () => {
  const { togglePage } = useMobileRoute();

  const formattedDate = useMemo(() => {
    return format(
      new Date(Date.now()),
      "EEEE', day' dd 'of' MMMM 'of' yyyy 'at' HH:mm'h'",
      { locale: enUS }
    );
  }, []);

  const handleOkPressed = useCallback(() => {
    togglePage('Dashboard');
  }, [togglePage]);

  return (
    <Container>
      <FiCheck size={80} color="#04d361" />

      <strong>Scheduling completed</strong>
      <p>{formattedDate}</p>

      <Button onClick={handleOkPressed}>Ok</Button>
    </Container>
  );
};

export default AppointmentCreated;
