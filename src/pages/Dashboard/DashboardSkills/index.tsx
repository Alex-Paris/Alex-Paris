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
  const [skills, setSkills] = useState<Skill[]>([
    {
      title: 'Frontend developer',
      description: 'More than 4 years',
      icon: 'UilBracketsCurly',
      isOpened: false,
      items: [
        {
          name: 'HTML',
          porcent: 90,
        },
        {
          name: 'CSS',
          porcent: 80,
        },
        {
          name: 'Javascript',
          porcent: 60,
        },
        {
          name: 'React',
          porcent: 80,
        },
      ],
    },
    {
      title: 'Backend developer',
      description: 'More than 2 years',
      icon: 'UilServerNetwork',
      isOpened: false,
      items: [
        {
          name: 'PHP',
          porcent: 80,
        },
        {
          name: 'Node Js',
          porcent: 70,
        },
        {
          name: 'Firebase',
          porcent: 90,
        },
        {
          name: 'Python',
          porcent: 55,
        },
      ],
    },
    {
      title: 'Designer',
      description: 'More than 5 years',
      icon: 'UilSwatchbook',
      isOpened: false,
      items: [
        {
          name: 'Figma',
          porcent: 90,
        },
        {
          name: 'Sketch',
          porcent: 85,
        },
        {
          name: 'Photoshop',
          porcent: 85,
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
