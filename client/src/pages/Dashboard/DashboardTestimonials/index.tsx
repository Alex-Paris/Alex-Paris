import React, { useMemo } from 'react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import {
  PaginationOptions,
  AutoplayOptions,
  SwiperOptions,
} from 'swiper/types';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';

import aboutImg from '../../../assets/about320.jpg';
import Icon from '../../../components/Unicons';

import {
  Testimonials,
  TestimonialsContainer,
  TestimonialsContent,
  TestimonialsData,
  TestimonialsDescription,
  TestimonialsHeader,
} from './styles';

SwiperCore.use([Pagination, Autoplay]);

interface Testimonial {
  name: string;
  type: string;
  description: string;
  stars: number;
  starsElement?: JSX.Element[];
}

const DashboardTestimonials: React.FC = () => {
  const testimonials = useMemo(() => {
    const testimonials: Testimonial[] = [
      {
        name: 'Sara Smith',
        type: 'Client',
        stars: 5,
        description:
          'I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.',
      },
      {
        name: 'Matt Robinson',
        type: 'Client',
        stars: 5,
        description:
          'I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.',
      },
      {
        name: 'Raul Harris',
        type: 'Client',
        stars: 5,
        description:
          'I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.',
      },
    ];

    testimonials.map((testimonial) => {
      testimonial.starsElement = [];

      for (let i = 0; i < testimonial.stars; i++) {
        testimonial.starsElement.push(<Icon key={i} icon="UilStar" />);
      }
    });

    return testimonials;
  }, []);

  const breakpointConfig: SwiperOptions = {
    breakpoints: {
      568: {
        slidesPerView: 2,
      },
    },
  };

  const paginationConfig: PaginationOptions = {
    clickable: true,
    dynamicBullets: true,
  };

  const autoplayConfig: AutoplayOptions = {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  };

  return (
    <Testimonials id="testimonials">
      <h2>Testimonial</h2>
      <span>My client saying</span>

      <TestimonialsContainer>
        <Swiper
          pagination={paginationConfig}
          loop={true}
          grabCursor={true}
          autoplay={autoplayConfig}
          spaceBetween={48}
          className="mySwiper"
          {...breakpointConfig}
        >
          <div>
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name}>
                <TestimonialsContent>
                  <TestimonialsData>
                    <TestimonialsHeader>
                      <img src={aboutImg} />

                      <div>
                        <h3>{testimonial.name}</h3>
                        <span>{testimonial.type}</span>
                      </div>
                    </TestimonialsHeader>

                    <div>{testimonial.starsElement}</div>
                  </TestimonialsData>
                  <TestimonialsDescription>
                    {testimonial.description}
                  </TestimonialsDescription>
                </TestimonialsContent>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </TestimonialsContainer>
    </Testimonials>
  );
};

export default DashboardTestimonials;
