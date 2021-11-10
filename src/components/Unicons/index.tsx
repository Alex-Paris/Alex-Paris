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
  UilAngleDown,
  UilBracketsCurly,
  UilServerNetwork,
  UilSwatchbook,
  UilWebGrid,
  UilArrow,
  UilPen,
  UilArrowRight,
  UilTimes,
  UilCheckCircle,
  UilAngleLeftB,
  UilAngleRightB,
  UilStar,
  UilPhone,
  UilEnvelope,
  UilMapMarker,
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
    | 'UilArrowDown'
    | 'UilAngleDown'
    | 'UilBracketsCurly'
    | 'UilServerNetwork'
    | 'UilSwatchbook'
    | 'UilWebGrid'
    | 'UilArrow'
    | 'UilPen'
    | 'UilArrowRight'
    | 'UilTimes'
    | 'UilCheckCircle'
    | 'UilAngleLeftB'
    | 'UilAngleRightB'
    | 'UilStar'
    | 'UilPhone'
    | 'UilEnvelope'
    | 'UilMapMarker';
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
  UilArrowDown: UilArrowDown,
  UilAngleDown: UilAngleDown,
  UilBracketsCurly: UilBracketsCurly,
  UilServerNetwork: UilServerNetwork,
  UilSwatchbook: UilSwatchbook,
  UilWebGrid: UilWebGrid,
  UilArrow: UilArrow,
  UilPen: UilPen,
  UilArrowRight: UilArrowRight,
  UilTimes: UilTimes,
  UilCheckCircle: UilCheckCircle,
  UilAngleLeftB: UilAngleLeftB,
  UilAngleRightB: UilAngleRightB,
  UilStar: UilStar,
  UilPhone: UilPhone,
  UilEnvelope: UilEnvelope,
  UilMapMarker: UilMapMarker,
};

const Icon: React.FC<IconProps> = ({ icon, ...rest }) => {
  function IconRendered(Elem: typeof React.Component): ReactElement {
    return <Elem {...rest} />;
  }

  return <>{IconRendered(iconType[icon])}</>;
};

export default Icon;
