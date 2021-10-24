import styled from 'styled-components';
import { device } from './device';

export const HeaderHeight = '3rem';

//Colors definition
export const HueColor = '250'; //Purple 250 - Green 142 - Blue 230 - Pink 340

export const FirstColor = `hsl(${HueColor}, 69%, 61%)`;
export const FirstColorSecond = `hsl(${HueColor}, 69%, 61%)`;
export const FirstColorAlt = `hsl(${HueColor}, 57%, 53%)`;
export const FirstColorLighter = `hsl(${HueColor}, 92%, 85%)`;
export const TitleColor = `hsl(${HueColor}, 8%, 15%)`;
export const TextColor = `hsl(${HueColor}, 8%, 45%)`;
export const TextColorLight = `hsl(${HueColor}, 8%, 65%)`;
export const InputColor = `hsl(${HueColor}, 70%, 96%)`;
export const BodyColor = `hsl(${HueColor}, 60%, 99%)`;
export const ContainerColor = '#FFF';

//Font typography
export const BodyFont = '"Poppins", serins';
export const BigFontSize = `
  font-size: 3rem;

  @media ${device.laptop} {
    font-size: 2rem;
  }
`;
export const H1FontSize = `
  font-size: 2.25rem;

  @media ${device.laptop} {
    font-size: 1.5rem;
  }
`;
export const H2FontSize = `
  font-size: 1.5rem;

  @media ${device.laptop} {
    font-size: 1.25rem;
  }
`;
export const H3FontSize = `
  font-size: 1.25rem;

  @media ${device.laptop} {
    font-size: 1.125rem;
  }
`;
export const NormalFontSize = `
  font-size: 1rem;

  @media ${device.laptop} {
    font-size: .938rem;
  }
`;
export const SmallFontSize = `
  font-size: .875rem;

  @media ${device.laptop} {
    font-size: .813rem;
  }
`;
export const SmallerFontSize = `
  font-size: .813rem;

  @media ${device.laptop} {
    font-size: .75rem;
  }
`;

//Font weight
export const FontMedium = 500;
export const FontSemiBold = 600;

//Margenes Bottom
export const Mb025 = '.25rem';
export const Mb05 = '.5rem';
export const Mb075 = '.75rem';
export const Mb1 = '1rem';
export const Mb15 = '1.5rem';
export const Mb2 = '2rem';
export const Mb25 = '2.5rem';
export const Mb3 = '3rem';

//Z index
export const ZToolTip = 10;
export const ZFixed = 100;
export const ZModal = 1000;

//Reusable CSS Classes
export const Container = `
  max-width: 768px;
  margin-left: ${Mb15};
  margin-right: ${Mb15};
`;

export const Grid = `
  display: grid;
  gap: 1.5rem;
`;

export const Section = styled.section`
  padding: 2rem 0 4rem;

  title {
    font-size: ${H1FontSize};
  }

  subtitle {
    display: block;
    font-size: ${SmallFontSize};
    margin-bottom: ${Mb3};
  }

  title,
  subtitle {
    text-align: center;
  }
`;
