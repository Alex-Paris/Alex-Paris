import React, { ReactElement, SVGAttributes } from 'react';
import {
  UilGraduationCap,
  UilBriefcaseAlt,
  UilCalendarAlt,
  UilDownloadAlt,
  UilLinkedinAlt,
  UilExternalLinkAlt,
  UilDribbble,
  UilGithubAlt,
  UilMessage,
  UilMouseAlt,
  UilArrowDown,
  UilBracketsCurly,
  UilServerNetwork,
  UilSwatchbook,
  UilWebGrid,
  UilPen,
  UilArrow,
  UilAngleDown,
  UilArrowRight,
  UilArrowLeft,
  UilTimes,
  UilCheckCircle,
  UilAngleLeftB,
  UilAngleRightB,
  UilStar,
  UilPhone,
  UilEnvelope,
  UilMapMarker,
  UilFacebookF,
  UilInstagram,
  UilTwitterAlt,
  UilEstate,
  UilUser,
  UilFileAlt,
  UilScenery,
  UilApps,
  UilArrowUp,
  UilMoon,
  UilSun,
  UilDatabase,
  UilTvRetro,
  // @ts-expect-error: React-Unicons doesnt have @types yet
} from '@iconscout/react-unicons';

export type IconProps = SVGAttributes<SVGAElement> & {
  icon:
    | 'UilGraduationCap'
    | 'UilBriefcaseAlt'
    | 'UilCalendarAlt'
    | 'UilDownloadAlt'
    | 'UilLinkedinAlt'
    | 'UilExternalLinkAlt'
    | 'UilDribbble'
    | 'UilGithubAlt'
    | 'UilMessage'
    | 'UilMouseAlt'
    | 'UilAngleDown'
    | 'UilBracketsCurly'
    | 'UilServerNetwork'
    | 'UilSwatchbook'
    | 'UilWebGrid'
    | 'UilPen'
    | 'UilArrow'
    | 'UilArrowDown'
    | 'UilArrowRight'
    | 'UilArrowLeft'
    | 'UilTimes'
    | 'UilCheckCircle'
    | 'UilAngleLeftB'
    | 'UilAngleRightB'
    | 'UilStar'
    | 'UilPhone'
    | 'UilEnvelope'
    | 'UilMapMarker'
    | 'UilFacebookF'
    | 'UilInstagram'
    | 'UilTwitterAlt'
    | 'UilEstate'
    | 'UilUser'
    | 'UilFileAlt'
    | 'UilScenery'
    | 'UilApps'
    | 'UilArrowUp'
    | 'UilMoon'
    | 'UilSun'
    | 'UilDatabase'
    | 'UilTvRetro';
};

const iconType = {
  UilGraduationCap: UilGraduationCap,
  UilBriefcaseAlt: UilBriefcaseAlt,
  UilCalendarAlt: UilCalendarAlt,
  UilDownloadAlt: UilDownloadAlt,
  UilLinkedinAlt: UilLinkedinAlt,
  UilExternalLinkAlt: UilExternalLinkAlt,
  UilDribbble: UilDribbble,
  UilGithubAlt: UilGithubAlt,
  UilMessage: UilMessage,
  UilMouseAlt: UilMouseAlt,
  UilAngleDown: UilAngleDown,
  UilBracketsCurly: UilBracketsCurly,
  UilServerNetwork: UilServerNetwork,
  UilSwatchbook: UilSwatchbook,
  UilWebGrid: UilWebGrid,
  UilArrow: UilArrow,
  UilArrowDown: UilArrowDown,
  UilArrowRight: UilArrowRight,
  UilArrowLeft: UilArrowLeft,
  UilPen: UilPen,
  UilTimes: UilTimes,
  UilCheckCircle: UilCheckCircle,
  UilAngleLeftB: UilAngleLeftB,
  UilAngleRightB: UilAngleRightB,
  UilStar: UilStar,
  UilPhone: UilPhone,
  UilEnvelope: UilEnvelope,
  UilMapMarker: UilMapMarker,
  UilFacebookF: UilFacebookF,
  UilInstagram: UilInstagram,
  UilTwitterAlt: UilTwitterAlt,
  UilEstate: UilEstate,
  UilUser: UilUser,
  UilFileAlt: UilFileAlt,
  UilScenery: UilScenery,
  UilApps: UilApps,
  UilArrowUp: UilArrowUp,
  UilMoon: UilMoon,
  UilSun: UilSun,
  UilDatabase: UilDatabase,
  UilTvRetro: UilTvRetro,
};

const Icon: React.FC<IconProps> = ({ icon, ...rest }) => {
  function IconRendered(Elem: typeof React.Component): ReactElement {
    return <Elem {...rest} />;
  }

  return <>{IconRendered(iconType[icon])}</>;
};

export default Icon;
