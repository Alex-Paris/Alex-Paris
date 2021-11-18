import React, { useCallback, useState } from 'react';

import Icon, { IconProps } from '../../../components/Unicons';

import {
  Skills,
  SkillsContainer,
  SkillsContent,
  SkillsItemHeader,
  SkillsItemList,
  SkillsIcon,
  SkillsArrow,
  SkillsItemListTitle,
  SkillsItemListBar,
} from './styles';

interface Skill {
  title: string;
  description: string;
  icon: IconProps['icon'];
  items: SkillItem[];
  isOpened: boolean;
}

interface SkillItem {
  name: string;
  porcent: number;
}

const DashboardSkills: React.FC = () => {
  const actualYear = new Date().getFullYear();

  const [skills, setSkills] = useState<Skill[]>([
    {
      title: 'Frontend developer',
      description: 'More than ' + (actualYear - 2020) + ' years',
      icon: 'UilBracketsCurly',
      isOpened: false,
      items: [
        {
          name: 'HTML',
          porcent: 80,
        },
        {
          name: 'CSS',
          porcent: 60,
        },
        {
          name: 'Javascript',
          porcent: 40,
        },
        {
          name: 'React',
          porcent: 65,
        },
        {
          name: 'Vue',
          porcent: 40,
        },
        {
          name: 'WPF',
          porcent: 80,
        },
        {
          name: 'DFM (Delphi Form)',
          porcent: 85,
        },
        {
          name: 'Windows Forms',
          porcent: 80,
        },
      ],
    },
    {
      title: 'Backend developer',
      description: 'More than ' + (actualYear - 2019) + ' years',
      icon: 'UilServerNetwork',
      isOpened: false,
      items: [
        {
          name: 'Node Js',
          porcent: 50,
        },
        {
          name: 'PHP',
          porcent: 30,
        },
        {
          name: 'C#',
          porcent: 80,
        },
        {
          name: 'Pascal',
          porcent: 80,
        },
      ],
    },
    {
      title: 'Database',
      description: 'More than ' + (actualYear - 2015) + ' years',
      icon: 'UilDatabase',
      isOpened: false,
      items: [
        {
          name: 'SQL',
          porcent: 90,
        },
        {
          name: 'Postgre',
          porcent: 85,
        },
        {
          name: 'MySqlServer',
          porcent: 70,
        },
        {
          name: 'Redis',
          porcent: 40,
        },
        {
          name: 'MongoDB',
          porcent: 50,
        },
      ],
    },
    {
      title: 'Game developer',
      description: 'More than ' + (actualYear - 2021) + ' years',
      icon: 'UilTvRetro',
      isOpened: false,
      items: [
        {
          name: 'Unreal (Blueprint)',
          porcent: 70,
        },
        {
          name: 'Unreal (C++)',
          porcent: 50,
        },
        {
          name: 'Unity',
          porcent: 30,
        },
        {
          name: 'Blender',
          porcent: 20,
        },
      ],
    },
  ]);

  const handleShowSkillsList = useCallback(
    (skillItem: Skill) => {
      const indexSkill = skills.findIndex((p) => p.title == skillItem.title);

      skills[indexSkill].isOpened = !skillItem.isOpened;

      setSkills([...skills]);
    },
    [skills]
  );

  return (
    <Skills id="skills">
      <h2>Skills</h2>
      <span>My technical level</span>

      <SkillsContainer>
        {skills.map((skill) => (
          <div key={skill.title}>
            <SkillsContent
              key={skill.title}
              onClick={() => handleShowSkillsList(skill)}
              isOpened={skill.isOpened}
            >
              <SkillsItemHeader>
                <SkillsIcon>
                  <Icon icon={skill.icon} />
                </SkillsIcon>

                <div>
                  <h1>{skill.title}</h1>
                  <span>{skill.description}</span>
                </div>

                <SkillsArrow isOpened={skill.isOpened}>
                  <Icon icon="UilAngleDown" />
                </SkillsArrow>
              </SkillsItemHeader>

              <SkillsItemList isOpened={skill.isOpened}>
                {skill.items.map((skillItem) => (
                  <div key={skillItem.name}>
                    <SkillsItemListTitle>
                      <h3>{skillItem.name}</h3>
                      <span>{skillItem.porcent}%</span>
                    </SkillsItemListTitle>
                    <SkillsItemListBar porcent={skillItem.porcent}>
                      <span></span>
                    </SkillsItemListBar>
                  </div>
                ))}
              </SkillsItemList>
            </SkillsContent>
          </div>
        ))}
      </SkillsContainer>
    </Skills>
  );
};

export default DashboardSkills;
