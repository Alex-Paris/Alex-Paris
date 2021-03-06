import React, { useCallback, useState } from 'react';

import Button from '../../../components/Button';
import Icon, { IconProps } from '../../../components/Unicons';

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
  icon: IconProps['icon'];
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
      icon: 'UilGraduationCap',
      items: [
        {
          title: 'Analysing and developing systems',
          location: 'Brazil - FATEC (University)',
          period: '2012 - 2015',
        },
        {
          title: 'GoStack 11',
          location: 'Brazil - Rocketseat (Course)',
          period: '2021 - 2021 (5 months)',
        },
        {
          title: 'Ignite ReactJS',
          location: 'Brazil - Rocketseat (Course)',
          period: '2021 - (in course)',
        },
      ],
    },
    {
      title: 'Work',
      icon: 'UilBriefcaseAlt',
      items: [
        {
          title: 'Technical Support',
          location: 'MultiplusCard - Brazil',
          period: '2014 - 2018',
        },
        {
          title: 'Programmer',
          location: 'SGA Petro - Brazil',
          period: '2018 - 2021',
        },
        {
          title: 'Systems development manager',
          location: 'SGA Petro - Brazil',
          period: '2018 - (actually)',
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
              <QualificationIcon>
                <Icon icon={qualification.icon} />
              </QualificationIcon>
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
                          <Icon icon="UilCalendarAlt" />
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
                          <Icon icon="UilCalendarAlt" />
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
