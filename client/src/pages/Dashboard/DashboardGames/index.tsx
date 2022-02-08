import React, { useCallback, useState } from 'react';

import Button from '../../../components/Button';
import UnityPlayer from '../../../components/UnityPlayer';

import Icon, { IconProps } from '../../../components/Unicons';
import game1Img from '../../../assets/game1.png';

import {
  Games,
  GamesContainer,
  GamesContent,
  GamesIcon,
  GamesModal,
  GamesModalContent,
  GamesModalDescription,
  GamesModalGame,
  GamesModalIcon,
} from './styles';

interface Game {
  title: string;
  description: string;
  keys: GameKeys[];
  engine: string;
  icon: string;
  location: GameLocation;
  isOpened?: boolean;
}

interface GameLocation {
  loaderUrl: string;
  dataUrl: string;
  frameworkUrl: string;
  codeUrl: string;
}

interface GameKeys {
  icon: IconProps['icon'];
  description: string;
}

const DashboardGames: React.FC = () => {
  const [show, setShow] = useState(false);
  const [games, setGames] = useState<Game[]>([
    {
      title: 'Horde Project',
      description: 'A 2D side platform game with hordes of enemies',
      keys: [
        {
          icon: 'UilKeyboard',
          description: 'Move: A, D',
        },
        {
          icon: 'UilSpaceKey',
          description: 'Jump: Space',
        },
        {
          icon: 'UilMouseAlt',
          description: 'Attack: Left Click',
        },
      ],
      engine: 'Unity',
      icon: game1Img,
      location: {
        loaderUrl: '/files/build/unity/HordeProject/Build.loader.js',
        dataUrl: '/files/build/unity/HordeProject/webgl.data',
        frameworkUrl: '/files/build/unity/HordeProject/build.framework.js',
        codeUrl: '/files/build/unity/HordeProject/build.wasm',
      },
    },
  ]);

  const handleShowDemoGame = useCallback(
    (game: Game) => {
      const indexGame = games.findIndex((p) => p.title == game.title);

      setShow(!game.isOpened);

      setTimeout(
        () => {
          games[indexGame].isOpened = !game.isOpened;

          setGames([...games]);
        },
        // If we are closing, the player needs a time to stops
        game.isOpened ? 1000 : 0
      );
    },
    [games]
  );

  return (
    <Games id="games">
      <h2>Games</h2>
      <span>Games created</span>

      <GamesContainer>
        {games.map((game) => (
          <GamesContent key={game.title}>
            <div>
              <GamesIcon>
                <img src={game.icon} />
              </GamesIcon>
              <h3>{game.title}</h3>
              <p>{game.engine}</p>
            </div>

            <Button
              isFlex
              isSimple
              isLink
              onClick={() => handleShowDemoGame(game)}
            >
              Play Demo
              <Icon icon="UilArrowRight" />
            </Button>

            <GamesModal isOpened={show && game.isOpened}>
              <GamesModalContent>
                <h4>{game.title}</h4>
                <Button isSimple onClick={() => handleShowDemoGame(game)}>
                  <Icon icon="UilTimes" />
                </Button>

                {game.isOpened && (
                  <UnityPlayer
                    productName="Horde Project"
                    loaderUrl={game.location.loaderUrl}
                    dataUrl={game.location.dataUrl}
                    frameworkUrl={game.location.frameworkUrl}
                    codeUrl={game.location.codeUrl}
                    close={!show}
                  />
                )}

                <GamesModalDescription>
                  <hr />
                  <p>
                    <i>Description: </i>
                    {game.description}
                  </p>
                  {game.keys.map((keyGame, index) => (
                    <GamesModalGame key={index}>
                      <GamesModalIcon>
                        <Icon icon={keyGame.icon} />
                      </GamesModalIcon>
                      <p>{keyGame.description}</p>
                    </GamesModalGame>
                  ))}
                </GamesModalDescription>
              </GamesModalContent>
            </GamesModal>
          </GamesContent>
        ))}
      </GamesContainer>
    </Games>
  );
};

export default DashboardGames;
