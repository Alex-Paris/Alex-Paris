import React from 'react';
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

import Icon from '../../../components/Unicons';
import Button from '../../../components/Button';
import portfolio1Img from '../../../assets/portfolio1.png';
import portfolio2Img from '../../../assets/portfolio2.png';
import portfolio3Img from '../../../assets/portfolio3.png';

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
      image: portfolio1Img,
      link: '/demos/GoBarber/',
    },
    {
      title: 'GithubExplorer',
      description:
        'This website was made to study external API using React. You can get public project informations of Github.',
      image: portfolio2Img,
      link: '/demos/GithubExplorer/',
    },
    {
      title: 'ToDoList',
      description: 'A ToDo List website.',
      image: portfolio3Img,
      link: '/demos/ToDoList/',
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
                <img src={portfolio.image} />

                <div>
                  <h3>{portfolio.title}</h3>
                  <p>{portfolio.description}</p>
                  <Button isFlex isSmall hrefPage={portfolio.link}>
                    Demo
                    <Icon icon="UilArrowRight" />
                  </Button>
                </div>
              </PortfolioContent>
            </SwiperSlide>
          ))}
          <Icon icon="UilAngleLeftB" className="swiper-button-prev" />
          <Icon icon="UilAngleRightB" className="swiper-button-next" />
        </Swiper>
      </PortfolioContainer>
    </Portfolio>
  );
};

export default DashboardPortfolio;
