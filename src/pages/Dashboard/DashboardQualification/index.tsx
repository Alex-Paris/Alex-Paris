import React, { ReactElement, useCallback, useState } from 'react';
import {
  UilGraduationCap,
  UilBriefcaseAlt,
  UilCalendarAlt,
  // @ts-expect-error: React-Unicons doesnt have @types yet
} from '@iconscout/react-unicons';

import Button from '../../../components/Button';

import {
  Qualification,
  QualificationContainer,
  QualificationTabs,
  QualificationIcon,
  QualificationSections,
  QualificationContent,
  QualificationData,
  QualificationCalendar,
  QualificationRounder,
  QualificationLine,
  QualificationDescription,
} from './styles';

interface Qualification {
  title: string;
  icon: ReactElement;
  items: QualificationItem[];
  isSelected?: boolean;
}

interface QualificationItem {
  title: string;
  location: string;
  period: string;
}

const DashboardQualification: React.FC = () => {
  const [qualifications, setQualifications] = useState<Qualification[]>([
    {
      title: 'Education',
      icon: <UilGraduationCap size="1.8rem" />,
      items: [
        {
          title: 'Computer Enginner',
          location: 'Peru - University',
          period: '2009 - 2014',
        },
        {
          title: 'Web Design',
          location: 'Spain - Institute',
          period: '2014 - 2017',
        },
        {
          title: 'Web Development',
          location: 'Peru - Institute',
          period: '2017 - 2019',
        },
        {
          title: 'Master in Ui/Ux',
          location: 'Peru - Institute',
          period: '2019 - 2021',
        },
      ],
    },
    {
      title: 'Work',
      icon: <UilBriefcaseAlt size="1.8rem" />,
      items: [
        {
          title: 'Software Enginner',
          location: 'Microsoft - Peru',
          period: '2016 - 2018',
        },
        {
          title: 'Frontend Developer',
          location: 'Apple Inc - Spain',
          period: '2018 - 2020',
        },
        {
          title: 'Ui Designer',
          location: 'Figma - Spain',
          period: '2017 - 2019',
        },
      ],
    },
  ]);

  const handleShowQualificationList = useCallback(
    (qualification: Qualification) => {
      const realState = qualification.isSelected;

      qualifications.map((qualification) => {
        qualification.isSelected = false;
      });

      const indexQualifications = qualifications.findIndex(
        (p) => p.title == qualification.title
      );

      qualifications[indexQualifications].isSelected = !realState;

      setQualifications([...qualifications]);
    },
    [qualifications]
  );

  return (
    <Qualification id="qualification">
      <h2>Qualification</h2>
      <span>My personal journey</span>

      <QualificationContainer>
        <QualificationTabs>
          {qualifications.map((qualification) => (
            <Button
              key={qualification.title}
              onClick={() => handleShowQualificationList(qualification)}
              isSimple
              isFlex
              isActive={qualification.isSelected}
            >
              <QualificationIcon>{qualification.icon}</QualificationIcon>
              {qualification.title}
            </Button>
          ))}
        </QualificationTabs>

        <QualificationSections>
          {qualifications.map((qualification) => (
            <QualificationContent
              key={qualification.title}
              isSelected={qualification.isSelected}
            >
              {qualification.items.map((qualificationItem, index) => (
                <QualificationData key={qualificationItem.title}>
                  {index % 2 == 0 ? (
                    <>
                      <QualificationDescription>
                        <h3>{qualificationItem.title}</h3>
                        <span>{qualificationItem.location}</span>
                        <QualificationCalendar>
                          <UilCalendarAlt size=".813rem" />
                          {qualificationItem.period}
                        </QualificationCalendar>
                      </QualificationDescription>

                      <div>
                        <QualificationRounder />
                        {index + 1 < qualification.items.length && (
                          <QualificationLine />
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <div></div>

                      <div>
                        <QualificationRounder />
                        {index + 1 < qualification.items.length && (
                          <QualificationLine />
                        )}
                      </div>

                      <QualificationDescription>
                        <h3>{qualificationItem.title}</h3>
                        <span>{qualificationItem.location}</span>
                        <QualificationCalendar>
                          <UilCalendarAlt size=".813rem" />
                          {qualificationItem.period}
                        </QualificationCalendar>
                      </QualificationDescription>
                    </>
                  )}
                </QualificationData>
              ))}
            </QualificationContent>
          ))}
        </QualificationSections>
      </QualificationContainer>
    </Qualification>
  );
};

export default DashboardQualification;
