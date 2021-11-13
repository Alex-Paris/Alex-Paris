import { device } from './device';

export const HeaderHeight = '3rem';

//Colors definition
export const HueColor = '250'; //Purple 250 - Green 142 - Blue 230 - Pink 340

//Font typography
export const BodyFont = '"Poppins", serins';
export const BigFontSize = `
  font-size: 3rem;

  @media ${device.tabletMax} {
    font-size: 2rem;
  }
`;
export const H1FontSize = `
  font-size: 2.25rem;

  @media ${device.tabletMax} {
    font-size: 1.5rem;
  }
`;
export const H2FontSize = `
  font-size: 1.5rem;

  @media ${device.tabletMax} {
    font-size: 1.25rem;
  }
`;
export const H3FontSize = `
  font-size: 1.25rem;

  @media ${device.tabletMax} {
    font-size: 1.125rem;
  }
`;
export const NormalFontSize = `
  font-size: 1rem;

  @media ${device.tabletMax} {
    font-size: .938rem;
  }
`;
export const SmallFontSize = `
  font-size: .875rem;

  @media ${device.tabletMax} {
    font-size: .813rem;
  }
`;
export const SmallerFontSize = `
  font-size: .813rem;

  @media ${device.tabletMax} {
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

  @media ${device.mobileMax} {
    margin-left: ${Mb1};
    margin-right: ${Mb1};
  }

  @media ${device.laptopMin} {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Grid = `
  display: grid;
  gap: 1.5rem;
`;

export const Section = `
  padding: 2rem 0 4rem;

  @media ${device.laptopMin} {
    padding: 6rem 0 2rem;
  }
`;

export const SectionTitle = `
  ${H1FontSize}
  text-align: center;
`;

export const SectionSubtitle = `
  ${SmallFontSize}
  display: block;
  margin-bottom: ${Mb3};
  text-align: center;

  @media ${device.laptopMin} {
    margin-bottom: 4rem;
  }
`;
