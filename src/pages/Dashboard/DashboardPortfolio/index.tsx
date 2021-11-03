import React from 'react';
import {
  UilArrowRight,
  UilAngleRightB,
  UilAngleLeftB,
  // @ts-expect-error: React-Unicons doesnt have @types yet
} from '@iconscout/react-unicons';
import SwiperCore, { Navigation, Pagination, Autoplay, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import {
  NavigationOptions,
  PaginationOptions,
  AutoplayOptions,
} from 'swiper/types';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';

import Button from '../../../components/Button';
import portfolio1Img from '../../../assets/portfolio1.png';

import { Portfolio, PortfolioContainer, PortfolioContent } from './styles';

SwiperCore.use([Navigation, Pagination, Autoplay, Keyboard]);

interface Portfolio {
  title: string;
  description: string;
  image: string;
  link: string;
}

const DashboardPortfolio: React.FC = () => {
  const portfolios: Portfolio[] = [
    {
      title: 'GoBarber',
      description:
        'Website to make appointments with a barber shop, using React, React Native and Node.',
      image: 'D:/ARQUIVOS/PROJETOS/React/Alex-Paris/src/assets/about320.jpg',
      link: 'http://gobarber.alexparis.dev/',
    },
    {
      title: 'Brand Design',
      description:
        'Website adaptable to all devices, with ui components and animated interactions.',
      image: 'D:/ARQUIVOS/PROJETOS/React/Alex-Paris/src/assets/about320.jpg',
      link: '',
    },
    {
      title: 'Online Store',
      description:
        'Website adaptable to all devices, with ui components and animated interactions.',
      image: 'D:/ARQUIVOS/PROJETOS/React/Alex-Paris/src/assets/about320.jpg',
      link: '',
    },
  ];

  const navigationConfig: NavigationOptions = {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  };

  const paginationConfig: PaginationOptions = {
    clickable: true,
  };

  const autoplayConfig: AutoplayOptions = {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  };

  return (
    <Portfolio id="portfolio">
      <h2>Portfolio</h2>
      <span>Most recent work</span>

      <PortfolioContainer>
        <Swiper
          cssMode={true}
          navigation={navigationConfig}
          pagination={paginationConfig}
          keyboard={true}
          loop={true}
          autoplay={autoplayConfig}
          className="mySwiper"
        >
          {portfolios.map((portfolio) => (
            <SwiperSlide key={portfolio.title} className="mySwiperSlide">
              <PortfolioContent>
                <img src={portfolio1Img} />

                <div>
                  <h3>{portfolio.title}</h3>
                  <p>{portfolio.description}</p>
                  <Button isFlex isSmall href={portfolio.link}>
                    Demo
                    <UilArrowRight />
                  </Button>
                </div>
              </PortfolioContent>
            </SwiperSlide>
          ))}
          <UilAngleLeftB className="swiper-button-prev" size="2rem" />
          <UilAngleRightB className="swiper-button-next" size="2rem" />
        </Swiper>
      </PortfolioContainer>
    </Portfolio>
  );
};

export default DashboardPortfolio;
