import React, { useCallback, useState } from 'react'

import Button from '../../../components/Button'
import Icon, { IconProps } from '../../../components/Unicons'
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
} from './styles'

interface Service {
  title: string
  subtitle: string
  icon: IconProps['icon']
  items: ServiceItem[]
  isOpened?: boolean
}

interface ServiceItem {
  description: string
}

const DashboardServices: React.FC = () => {
  const [services, setServices] = useState<Service[]>([
    {
      title: 'Ui/Ux',
      subtitle: 'Designer',
      icon: 'UilWebGrid',
      items: [
        {
          description: 'I develop the user interface.',
        },
        {
          description: 'I create ux element interactions.',
        },
      ],
    },
    {
      title: 'Frontend',
      subtitle: 'Developer',
      icon: 'UilArrow',
      items: [
        {
          description: 'Web page development.',
        },
        {
          description: 'Desktop Form development.',
        },
        {
          description: 'Mobile development.',
        },
      ],
    },
    {
      title: 'Backend',
      subtitle: 'Developer',
      icon: 'UilServerNetwork',
      items: [
        {
          description: 'I develop the API.',
        },
        {
          description: 'I can integrate external components.',
        },
      ],
    },
    {
      title: 'Game',
      subtitle: 'Developer',
      icon: 'UilTvRetro',
      items: [
        {
          description: 'I can create basic 2D games.tsx.',
        },
        {
          description: 'I can develop to different type of platforms.',
        },
      ],
    },
  ])

  const handleShowServicesList = useCallback(
    (service: Service) => {
      const indexService = services.findIndex((p) => p.title == service.title)

      services[indexService].isOpened = !service.isOpened

      setServices([...services])
    },
    [services],
  )

  return (
    <Services id="services">
      <h2>Services</h2>
      <span>What i offer</span>

      <ServicesContainer>
        {services.map((service) => (
          <ServicesContent key={service.title}>
            <div>
              <ServicesIcon>
                <Icon icon={service.icon} />
              </ServicesIcon>
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
              <Icon icon="UilArrowRight" />
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
                  <Icon icon="UilTimes" />
                </Button>

                <ServicesModalServices>
                  {service.items.map((itemService, index) => (
                    <ServicesModalService key={index}>
                      <ServicesModalIcon>
                        <Icon icon="UilCheckCircle" />
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
  )
}

export default DashboardServices
