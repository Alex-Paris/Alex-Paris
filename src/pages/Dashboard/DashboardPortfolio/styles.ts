import styled from 'styled-components';

import {
  Section,
  Container,
  SectionTitle,
  SectionSubtitle,
  Grid,
  H3FontSize,
  Mb05,
  Mb075,
  FirstColor,
} from '../../../styles/variables';

export const Portfolio = styled.section`
  ${/*inherithed*/ Section}

  > h2 {
    ${SectionTitle}
  }

  > span {
    ${SectionSubtitle}
  }
`;

export const PortfolioContainer = styled.div`
  ${/*inherithed*/ Container}

  overflow: initial;

  .mySwiper {
    width: 100%;
    height: 100%;
    padding-bottom: 2.5rem;

    .swiper-button-next {
      right: -0.5rem;
    }

    .swiper-button-prev {
      left: -0.5rem;
    }

    .swiper-button-next,
    .swiper-button-prev {
      color: ${FirstColor};
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
      content: '';
    }

    .swiper-button-next,
    .swiper-button-prev,
    .swiper-pagination-bullet {
      outline: none;
    }

    .swiper-pagination-bullet-active {
      background-color: ${FirstColor};
    }

    /* .mySwiperSlide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;

      > img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }*/
  }
`;

export const PortfolioContent = styled.div`
  ${/*inherithed*/ Grid}

  padding: 0 1.5rem;

  > img {
    width: 265px;
    border-radius: 0.5rem;
    justify-self: center;
  }

  > div {
    > h3 {
      ${H3FontSize}
      margin-bottom: ${Mb05};
    }

    > p {
      margin-bottom: ${Mb075};
    }

    > button {
      svg {
        transition: 0.2s;
      }

      &:hover {
        svg {
          transform: translateX(0.35rem);
        }
      }
    }
  }
`;