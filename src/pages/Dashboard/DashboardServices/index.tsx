import React, { ReactElement, useCallback, useState } from 'react';
import {
  UilWebGrid,
  UilArrowRight,
  UilTimes,
  UilCheckCircle,
  UilArrow,
  UilPen,
  // @ts-expect-error: React-Unicons doesnt have @types yet
} from '@iconscout/react-unicons';

import Button from '../../../components/Button';

import {
  Services,
  ServicesContainer,
  ServicesContent,
  ServicesIcon,
  ServicesModal,
  ServicesModalContent,
  ServicesModalIcon,
  ServicesModalService,
  ServicesModalServices,
} from './styles';

interface Service {
  title: string;
  subtitle: string;
  icon: ReactElement;
  items: ServiceItem[];
  isOpened?: boolean;
}

interface ServiceItem {
  description: string;
}

const DashboardServices: React.FC = () => {
  const [services, setServices] = useState<Service[]>([
    {
      title: 'Ui/Ux',
      subtitle: 'Designer',
      icon: <UilWebGrid size="1.5rem" />,
      items: [
        {
          description: 'I develop the user interface.',
        },
        {
          description: 'Web page development.',
        },
        {
          description: 'I create ux element interactions.',
        },
        {
          description: 'I position your company brand.',
        },
      ],
    },
    {
      title: 'Frontend',
      subtitle: 'Developer',
      icon: <UilArrow size="1.5rem" />,
      items: [
        {
          description: 'I develop the user interface.',
        },
        {
          description: 'Web page development.',
        },
        {
          description: 'I create ux element interactions.',
        },
        {
          description: 'I position your company brand.',
        },
      ],
    },
    {
      title: 'Branding',
      subtitle: 'Designer',
      icon: <UilPen size="1.5rem" />,
      items: [
        {
          description: 'I develop the user interface.',
        },
        {
          description: 'Web page development.',
        },
        {
          description: 'I create ux element interactions.',
        },
        {
          description: 'I position your company brand.',
        },
      ],
    },
  ]);

  const handleShowServicesList = useCallback(
    (service: Service) => {
      const indexService = services.findIndex((p) => p.title == service.title);

      services[indexService].isOpened = !service.isOpened;

      setServices([...services]);
    },
    [services]
  );

  return (
    <Services id="services">
      <h2>Services</h2>
      <span>What i offer</span>

      <ServicesContainer>
        {services.map((service) => (
          <ServicesContent key={service.title}>
            <div>
              <ServicesIcon>{service.icon}</ServicesIcon>
              <h3>
                {service.title} <br /> {service.subtitle}
              </h3>
            </div>

            <Button
              isFlex
              isSimple
              isLink
              onClick={() => handleShowServicesList(service)}
            >
              View More
              <UilArrowRight />
            </Button>

            <ServicesModal isOpened={service.isOpened}>
              <ServicesModalContent>
                <h4>
                  {service.title} <br /> {service.subtitle}
                </h4>
                <Button
                  isSimple
                  onClick={() => handleShowServicesList(service)}
                >
                  <UilTimes size="1.5rem" />
                </Button>

                <ServicesModalServices>
                  {service.items.map((itemService) => (
                    <ServicesModalService key="">
                      <ServicesModalIcon>
                        <UilCheckCircle />
                      </ServicesModalIcon>
                      <p>{itemService.description}</p>
                    </ServicesModalService>
                  ))}
                </ServicesModalServices>
              </ServicesModalContent>
            </ServicesModal>
          </ServicesContent>
        ))}
      </ServicesContainer>
    </Services>
  );
};

export default DashboardServices;
