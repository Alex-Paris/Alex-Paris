import React from 'react';
import {
  UilLinkedinAlt,
  UilDribbble,
  UilGithubAlt,
  UilMessage,
  UilMouseAlt,
  UilArrowDown,
  UilDownloadAlt,
  UilBracketsCurly,
  UilAngleDown,
  UilServerNetwork,
  UilSwatchbook,
  // @ts-expect-error: React-Unicons doesnt have @types yet
} from '@iconscout/react-unicons';

import { PerfilIcon } from '../../assets/perfil';
import aboutImg from '../../assets/about.jpg';
import Button from '../../components/Button';

import {
  Content,
  Home,
  HomeContainer,
  HomeContent,
  HomeSocial,
  HomeImg,
  HomeData,
  HomeScroll,
  About,
  AboutContainer,
  AboutData,
  AboutInfo,
  AboutButtons,
  AboutInfoTitle,
  AboutInfoName,
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

const Dashboard: React.FC = () => {
  return (
    <>
      <Content>
        <Home id="home">
          <HomeContainer>
            <HomeContent>
              <HomeSocial>
                <a
                  href="https://www.linkedin.com/in/alex-paris/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <UilLinkedinAlt />
                </a>

                <a
                  href="https://github.com/Alex-Paris"
                  target="_blank"
                  rel="noreferrer"
                >
                  <UilDribbble />
                </a>

                <a
                  href="https://github.com/Alex-Paris"
                  target="_blank"
                  rel="noreferrer"
                >
                  <UilGithubAlt />
                </a>
              </HomeSocial>

              <HomeImg>
                <PerfilIcon />
              </HomeImg>

              <HomeData>
                <h1>Hi, I&rsquo;am Alex</h1>
                <h3>Fullstack developer</h3>
                <p>
                  High level experience in development knowledge, producing
                  quality work.
                </p>
                <Button isFlex>
                  Contact Me <UilMessage size="1.25rem" />
                </Button>
              </HomeData>
            </HomeContent>

            <HomeScroll>
              <Button isFlex isSimple>
                <UilMouseAlt size="2rem" />
                <span>Scroll down</span>
                <UilArrowDown size="1.25rem" />
              </Button>
            </HomeScroll>
          </HomeContainer>
        </Home>

        <About id="about">
          <h2>About Me</h2>
          <span>My introduction</span>

          <AboutContainer>
            <img src={aboutImg} />

            <AboutData>
              <p>
                Web and desktop developer, with extensive knowledge and
                experience, working in technologies and Ui design
              </p>

              <AboutInfo>
                <div>
                  <AboutInfoTitle>08+</AboutInfoTitle>
                  <AboutInfoName>
                    Years <br /> experience
                  </AboutInfoName>
                </div>

                <div>
                  <AboutInfoTitle>20+</AboutInfoTitle>
                  <AboutInfoName>
                    Completed <br /> project
                  </AboutInfoName>
                </div>

                <div>
                  <AboutInfoTitle>05+</AboutInfoTitle>
                  <AboutInfoName>
                    Companies <br /> worked
                  </AboutInfoName>
                </div>
              </AboutInfo>

              <AboutButtons>
                <Button isFlex>
                  Download CV <UilDownloadAlt size="1.25rem" />
                </Button>
              </AboutButtons>
            </AboutData>
          </AboutContainer>
        </About>

        <Skills id="skills">
          <h2>Skills</h2>
          <span>My technical level</span>

          <SkillsContainer>
            <div>
              <SkillsContent>
                <SkillsItemHeader>
                  <SkillsIcon>
                    <UilBracketsCurly size="2rem" />
                  </SkillsIcon>

                  <div>
                    <h1>Frontend developer</h1>
                    <span>More than 4 years</span>
                  </div>

                  <SkillsArrow>
                    <UilAngleDown size="2rem" />
                  </SkillsArrow>
                </SkillsItemHeader>

                <SkillsItemList>
                  <div>
                    <SkillsItemListTitle>
                      <h3>HTML</h3>
                      <span>90%</span>
                    </SkillsItemListTitle>
                    <SkillsItemListBar porcent={90}>
                      <span></span>
                    </SkillsItemListBar>
                  </div>

                  <div>
                    <SkillsItemListTitle>
                      <h3>CSS</h3>
                      <span>80%</span>
                    </SkillsItemListTitle>
                    <SkillsItemListBar porcent={80}>
                      <span></span>
                    </SkillsItemListBar>
                  </div>

                  <div>
                    <SkillsItemListTitle>
                      <h3>JavaScript</h3>
                      <span>60%</span>
                    </SkillsItemListTitle>
                    <SkillsItemListBar porcent={60}>
                      <span></span>
                    </SkillsItemListBar>
                  </div>

                  <div>
                    <SkillsItemListTitle>
                      <h3>React</h3>
                      <span>85%</span>
                    </SkillsItemListTitle>
                    <SkillsItemListBar porcent={85}>
                      <span></span>
                    </SkillsItemListBar>
                  </div>
                </SkillsItemList>
              </SkillsContent>

              <SkillsContent>
                <SkillsItemHeader>
                  <SkillsIcon>
                    <UilServerNetwork size="2rem" />
                  </SkillsIcon>

                  <div>
                    <h1>Backend developer</h1>
                    <span>More than 2 years</span>
                  </div>

                  <SkillsArrow>
                    <UilAngleDown size="2rem" />
                  </SkillsArrow>
                </SkillsItemHeader>

                <SkillsItemList>
                  <div>
                    <SkillsItemListTitle>
                      <h3>PHP</h3>
                      <span>80%</span>
                    </SkillsItemListTitle>
                    <SkillsItemListBar porcent={80}>
                      <span></span>
                    </SkillsItemListBar>
                  </div>

                  <div>
                    <SkillsItemListTitle>
                      <h3>Node Js</h3>
                      <span>70%</span>
                    </SkillsItemListTitle>
                    <SkillsItemListBar porcent={70}>
                      <span></span>
                    </SkillsItemListBar>
                  </div>

                  <div>
                    <SkillsItemListTitle>
                      <h3>Firebase</h3>
                      <span>90%</span>
                    </SkillsItemListTitle>
                    <SkillsItemListBar porcent={90}>
                      <span></span>
                    </SkillsItemListBar>
                  </div>

                  <div>
                    <SkillsItemListTitle>
                      <h3>Python</h3>
                      <span>55%</span>
                    </SkillsItemListTitle>
                    <SkillsItemListBar porcent={55}>
                      <span></span>
                    </SkillsItemListBar>
                  </div>
                </SkillsItemList>
              </SkillsContent>
            </div>

            <div>
              <SkillsContent>
                <SkillsItemHeader>
                  <SkillsIcon>
                    <UilSwatchbook size="2rem" />
                  </SkillsIcon>

                  <div>
                    <h1>Designer</h1>
                    <span>More than 5 years</span>
                  </div>

                  <SkillsArrow>
                    <UilAngleDown size="2rem" />
                  </SkillsArrow>
                </SkillsItemHeader>

                <SkillsItemList>
                  <div>
                    <SkillsItemListTitle>
                      <h3>Figma</h3>
                      <span>90%</span>
                    </SkillsItemListTitle>
                    <SkillsItemListBar porcent={90}>
                      <span></span>
                    </SkillsItemListBar>
                  </div>

                  <div>
                    <SkillsItemListTitle>
                      <h3>Sketch</h3>
                      <span>85%</span>
                    </SkillsItemListTitle>
                    <SkillsItemListBar porcent={85}>
                      <span></span>
                    </SkillsItemListBar>
                  </div>

                  <div>
                    <SkillsItemListTitle>
                      <h3>Photoshop</h3>
                      <span>85%</span>
                    </SkillsItemListTitle>
                    <SkillsItemListBar porcent={85}>
                      <span></span>
                    </SkillsItemListBar>
                  </div>
                </SkillsItemList>
              </SkillsContent>
            </div>
          </SkillsContainer>
        </Skills>
      </Content>
    </>
  );
};

export default Dashboard;
