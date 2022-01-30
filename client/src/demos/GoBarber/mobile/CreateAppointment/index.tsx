import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import useDraggableScroll from 'use-draggable-scroll';
import { FiChevronLeft } from 'react-icons/fi';
import { isAfter, getTime, format } from 'date-fns';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { useAuth } from '../../hooks/context/auth';
import { useStorage } from '../../hooks/context/storage';
import { useMobileRoute } from '../../../../hooks/context/mobileRoute';

import Button from '../../components/Button';

import {
  Container,
  Header,
  HeaderContent,
  Content,
  ProvidersListContainer,
  ProvidersList,
  ProvidersContainer,
  Calendar,
  Schedule,
  ScheduleSection,
  ScheduleSectionContent,
  ScheduleSectionHour,
  ScheduleSectionList,
} from './styles';

interface AvailabilityItem {
  hour: number;
  available: boolean;
}

const CreateAppointment: React.FC = () => {
  const refListProviders = useRef(null);
  const refScheduleMorning = useRef(null);
  const refScheduleAfternoon = useRef(null);
  const mouseListProviders = useDraggableScroll(refListProviders);
  const mouseScheduleMorning = useDraggableScroll(refScheduleMorning);
  const mouseScheduleAfternoon = useDraggableScroll(refScheduleAfternoon);

  const { userMobile } = useAuth();
  const { routeParam, togglePage, sendNotification } = useMobileRoute();
  const { users, appointments, addAppointment } = useStorage();

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date(Date.now()));
  const [selectedHour, setSelectedHour] = useState(0);
  const [selectedProvider, setSelectedProvider] = useState(routeParam);
  const [availability, setAvailability] = useState<AvailabilityItem[]>([]);

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available && !modifiers.disabled) {
      setShowDatePicker(false);
      setSelectedDate(day);
      setSelectedHour(0);
    }
  }, []);

  const handleSelectHour = useCallback((hour: number) => {
    setSelectedHour(hour);
  }, []);

  const handleSelectBarber = useCallback((barberId: string) => {
    setSelectedProvider(barberId);
    setSelectedHour(0);
  }, []);

  const handleToggleDatePicker = useCallback(() => {
    setShowDatePicker((state) => !state);
  }, []);

  const handleCreateAppointment = useCallback(async () => {
    try {
      if (selectedHour === 0) {
        sendNotification({
          type: 'error',
          title: 'Error creating schedule',
          description: 'Select a valid hour time.',
        });
        return;
      }

      const userProvider = users.find((provider) => {
        return provider.id === selectedProvider;
      });

      if (!userProvider) {
        sendNotification({
          type: 'error',
          title: 'Error creating schedule',
          description: 'Barber not found.',
        });
        return;
      }

      const date = new Date(selectedDate);
      date.setHours(selectedHour);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);

      addAppointment({
        date,
        user: userMobile,
        provider: userProvider,
        hourFormatted: format(new Date().setHours(selectedHour), 'HH:00'),
      });

      togglePage('AppointmentCreated');
    } catch (err) {
      sendNotification({
        type: 'error',
        title: 'Error creating schedule',
        description:
          'There was an error trying to create the schedule, please try again.',
      });
    }
  }, [
    users,
    selectedDate,
    selectedHour,
    selectedProvider,
    userMobile,
    addAppointment,
    sendNotification,
    togglePage,
  ]);

  const handleGoBack = useCallback(() => {
    togglePage('Dashboard');
  }, [togglePage]);

  const morningAvailability = useMemo(() => {
    return availability
      .filter(({ hour }) => hour <= 12)
      .map(({ hour, available }) => {
        return {
          hour,
          available,
          hourFormatted: format(new Date().setHours(hour), 'HH:00'),
        };
      });
  }, [availability]);

  const afternoonAvailability = useMemo(() => {
    return availability
      .filter(({ hour }) => hour > 12)
      .map(({ hour, available }) => {
        return {
          hour,
          available,
          hourFormatted: format(new Date().setHours(hour), 'HH:00'),
        };
      });
  }, [availability]);

  useEffect(() => {
    const hourStart = 8;

    const eachHourArray = Array.from(
      { length: 10 },
      (_, index) => index + hourStart
    );

    const currentDate = new Date(Date.now());

    const availability = eachHourArray.map((hour) => {
      const hasAppointmentsInHour = appointments.find((appointment) => {
        const dateSelected = new Date(selectedDate);
        dateSelected.setHours(hour);
        dateSelected.setMinutes(0);
        dateSelected.setSeconds(0);
        dateSelected.setMilliseconds(0);

        const dateAppointment = new Date(appointment.date);
        dateAppointment.setMinutes(0);
        dateAppointment.setSeconds(0);
        dateAppointment.setMilliseconds(0);

        return (
          appointment.provider.id === selectedProvider &&
          getTime(dateAppointment) === getTime(dateSelected)
        );
      });

      const compareDate = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        hour
      );

      return {
        hour,
        available:
          !hasAppointmentsInHour &&
          isAfter(getTime(compareDate), getTime(currentDate)),
      };
    });

    setAvailability(availability);
  }, [selectedDate, selectedProvider, appointments, selectedHour]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <button type="button" onClick={handleGoBack}>
            <FiChevronLeft size={24} color={'#999591'} />
          </button>

          <span>Barbers</span>

          <img
            src={
              userMobile.avatar_url
                ? userMobile.avatar_url
                : 'http://cdn.onlinewebfonts.com/svg/img_261106.png'
            }
            alt={userMobile.name}
          />
        </HeaderContent>
      </Header>

      <Content>
        <ProvidersListContainer
          ref={refListProviders}
          onMouseDown={mouseListProviders.onMouseDown}
        >
          <ProvidersList>
            {users.map((barber) => (
              <ProvidersContainer
                key={barber.id}
                onClick={() => handleSelectBarber(barber.id)}
                selected={barber.id === selectedProvider}
              >
                <img
                  src={
                    barber.avatar_url
                      ? barber.avatar_url
                      : 'http://cdn.onlinewebfonts.com/svg/img_261106.png'
                  }
                  alt={barber.name}
                />

                <strong>{barber.name}</strong>
              </ProvidersContainer>
            ))}
          </ProvidersList>
        </ProvidersListContainer>

        <Calendar>
          <strong>Choose a date</strong>

          <Button onClick={handleToggleDatePicker}>Choose another date</Button>
        </Calendar>

        <Schedule>
          <strong>Choose a time</strong>

          <ScheduleSection>
            <strong>Morning</strong>

            <ScheduleSectionContent
              ref={refScheduleMorning}
              onMouseDown={mouseScheduleMorning.onMouseDown}
            >
              <ScheduleSectionList>
                {morningAvailability.map(
                  ({ hourFormatted, hour, available }) => (
                    <ScheduleSectionHour
                      key={hourFormatted}
                      available={available}
                      selected={selectedHour === hour}
                      onClick={() => available && handleSelectHour(hour)}
                    >
                      <p>{hourFormatted}</p>
                    </ScheduleSectionHour>
                  )
                )}
              </ScheduleSectionList>
            </ScheduleSectionContent>
          </ScheduleSection>

          <ScheduleSection>
            <strong>Afternoon</strong>
            <ScheduleSectionContent
              ref={refScheduleAfternoon}
              onMouseDown={mouseScheduleAfternoon.onMouseDown}
            >
              <ScheduleSectionList>
                {afternoonAvailability.map(
                  ({ hourFormatted, hour, available }) => (
                    <ScheduleSectionHour
                      key={hourFormatted}
                      available={available}
                      selected={selectedHour === hour}
                      onClick={() => available && handleSelectHour(hour)}
                    >
                      <p>{hourFormatted}</p>
                    </ScheduleSectionHour>
                  )
                )}
              </ScheduleSectionList>
            </ScheduleSectionContent>
          </ScheduleSection>
        </Schedule>

        <Button onClick={handleCreateAppointment}>Schedule</Button>

        <Calendar>
          {showDatePicker && (
            <div>
              <DayPicker
                selectedDays={selectedDate}
                onDayClick={handleDateChange}
                disabledDays={[{ daysOfWeek: [0, 6] }, { before: new Date() }]}
                fromMonth={new Date()}
                modifiers={{
                  available: { daysOfWeek: [1, 2, 3, 4, 5] },
                }}
              />
            </div>
          )}
        </Calendar>
      </Content>
    </Container>
  );
};

export default CreateAppointment;
