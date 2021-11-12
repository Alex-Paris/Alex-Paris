const size = {
  mobile: '320px',
  tablet: '568px',
  laptop: '768px',
  desktop: '1440px',
};

export const device = {
  mobileMin: `(min-width: ${size.mobile})`,
  mobileMax: `(max-width: ${size.tablet})`,
  tabletMin: `(min-width: ${size.tablet})`,
  tabletMax: `(max-width: ${size.laptop})`,
  laptopMin: `(min-width: ${size.laptop})`,
  laptopMax: `(max-width: ${size.desktop})`,
};
