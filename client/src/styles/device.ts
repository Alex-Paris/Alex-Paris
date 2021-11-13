export const size = {
  mobile: 320,
  tablet: 568,
  laptop: 768,
  desktop: 1024,
};

export const device = {
  mobileMin: `(min-width: ${size.mobile}px)`,
  mobileMax: `(max-width: ${size.tablet}px)`,
  tabletMin: `(min-width: ${size.tablet}px)`,
  tabletMax: `(max-width: ${size.laptop}px)`,
  laptopMin: `(min-width: ${size.laptop}px)`,
  laptopMax: `(max-width: ${size.desktop}px)`,
  desktopMin: `(min-width: ${size.desktop}px)`,
};
