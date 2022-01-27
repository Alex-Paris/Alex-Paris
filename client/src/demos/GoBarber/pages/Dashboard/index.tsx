import React, { useCallback, useMemo, useState } from 'react';
import { FiClock, FiPower } from 'react-icons/fi';
import { isToday, format, getTime } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { useAuth } from '../../hooks/context/auth';
import { useStorage } from '../../hooks/context/storage';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

interface Appointment {
  id: string;
  date: string;
  hourFormatted: string;
  user: {
    name: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const { appointments } = useStorage();

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available && !modifiers.disabled) {
      setSelectedDate(day);
    }
  }, []);

  const selectedDateAsText = useMemo(() => {
    return format(selectedDate, "'Day' dd 'of' MMMM", {
      locale: enUS,
    });
  }, [selectedDate]);

  const selectedWeekDay = useMemo(() => {
    return format(selectedDate, 'cccc', { locale: enUS });
  }, [selectedDate]);

  const morningAppointments = useMemo(() => {
    return appointments.filter((appointment) => {
      const dateAppointment = new Date(appointment.date);
      dateAppointment.setMinutes(0);
      dateAppointment.setSeconds(0);
      dateAppointment.setMilliseconds(0);

      const dateSelected = new Date(selectedDate);
      dateSelected.setHours(dateAppointment.getHours());
      dateSelected.setMinutes(0);
      dateSelected.setSeconds(0);
      dateSelected.setMilliseconds(0);

      return (
        appointment.provider.id === user.id &&
        getTime(dateAppointment) === getTime(dateSelected) &&
        dateAppointment.getHours() <= 12
      );
    });
  }, [appointments, selectedDate, user.id]);

  const afternoonAppointments = useMemo(() => {
    return appointments.filter((appointment) => {
      const dateAppointment = new Date(appointment.date);
      dateAppointment.setMinutes(0);
      dateAppointment.setSeconds(0);
      dateAppointment.setMilliseconds(0);

      const dateSelected = new Date(selectedDate);
      dateSelected.setHours(dateAppointment.getHours());
      dateSelected.setMinutes(0);
      dateSelected.setSeconds(0);
      dateSelected.setMilliseconds(0);

      return (
        appointment.provider.id === user.id &&
        getTime(dateAppointment) === getTime(dateSelected) &&
        dateAppointment.getHours() > 12
      );
    });
  }, [appointments, selectedDate, user.id]);

  const nextAppointment = useMemo(() => {
    const test = appointments.find((appointment) => {
      return (
        appointment.provider.id === user.id &&
        isToday(new Date(appointment.date))
      );
    });
    console.log(test);
    return test;
  }, [appointments, user.id]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img
              src={
                user.avatar_url
                  ? user.avatar_url
                  : 'http://cdn.onlinewebfonts.com/svg/img_261106.png'
              }
              alt={user.name}
            />
            <div>
              <span>Welcome,</span>
              <Link to="/demos/GoBarber/profile">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Appointments</h1>
          <p>
            {isToday(selectedDate) && <span>Today</span>}
            <span>{selectedDateAsText}</span>
            <span>{selectedWeekDay}</span>
          </p>

          {isToday(selectedDate) && nextAppointment && (
            <NextAppointment>
              <strong>Next appointment</strong>
              <div>
                <img
                  src={
                    !nextAppointment.user.avatar_url
                      ? 'https://www.da.dk/globalassets/medarbejdere/sbg.jpg'
                      : nextAppointment.user.avatar_url
                  }
                  alt={nextAppointment.user.name}
                />

                <strong>{nextAppointment.user.name}</strong>
                <span>
                  <FiClock />
                  {nextAppointment.hourFormatted}
                </span>
              </div>
            </NextAppointment>
          )}

          <Section>
            <strong>Morning</strong>

            {morningAppointments.length === 0 && (
              <p>No appointments in this period</p>
            )}

            {morningAppointments.map((appointment) => (
              <Appointment key={appointment.id}>
                <span>
                  <FiClock />
                  {appointment.hourFormatted}
                </span>

                <div>
                  <img
                    src={
                      !appointment.user.avatar_url
                        ? 'https://www.da.dk/globalassets/medarbejdere/sbg.jpg'
                        : appointment.user.avatar_url
                    }
                    alt={appointment.user.name}
                  />

                  <strong>{appointment.user.name}</strong>
                </div>
              </Appointment>
            ))}
          </Section>

          <Section>
            <strong>Evening</strong>

            {afternoonAppointments.length === 0 && (
              <p>No appointments in this period</p>
            )}

            {afternoonAppointments.map((appointment) => (
              <Appointment key={appointment.id}>
                <span>
                  <FiClock />
                  {appointment.hourFormatted}
                </span>

                <div>
                  <img
                    src={
                      !appointment.user.avatar_url
                        ? 'https://www.da.dk/globalassets/medarbejdere/sbg.jpg'
                        : appointment.user.avatar_url
                    }
                    alt={appointment.user.name}
                  />

                  <strong>{appointment.user.name}</strong>
                </div>
              </Appointment>
            ))}
          </Section>
        </Schedule>
        <Calendar>
          <DayPicker
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }, { before: new Date() }]}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            selectedDays={selectedDate}
            onDayClick={handleDateChange}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
