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
} from '../../../styles/variables';
import { device } from '../../../styles/device';

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

      @media ${device.desktopMin} {
        right: -3.5rem;
      }
    }

    .swiper-button-prev {
      left: -0.5rem;

      @media ${device.desktopMin} {
        left: -3.5rem;
      }
    }

    .swiper-button-next,
    .swiper-button-prev {
      color: ${(props) => props.theme.colors.primary};

      @media ${device.desktopMin} {
        width: 3.5rem;
        height: 3.5rem;
      }
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
      background-color: ${(props) => props.theme.colors.primary};
    }

    .swiper-horizontal > .swiper-pagination-bullet {
      @media ${device.desktopMin} {
        bottom: -4.5rem;
      }
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

    @media ${device.laptopMin} {
      width: 320px;
    }
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
        width: 2rem;
        height: 2rem;
        transition: 0.2s;
      }

      &:hover {
        svg {
          transform: translateX(0.35rem);
        }
      }
    }
  }

  @media ${device.tabletMin} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.laptopMin} {
    align-items: center;
  }

  @media ${device.desktopMin} {
    column-gap: 5rem;
  }
`;
