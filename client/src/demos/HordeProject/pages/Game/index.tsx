import React from 'react';

import UnityPlayer from '../../../../components/UnityPlayer';

import { Container, GameContent } from './styles';

const Game: React.FC = () => {
  return (
    <>
      <Container>
        <GameContent>
          <h1>Horde Project</h1>
          <UnityPlayer
            productName="Horde Project"
            loaderUrl="/files/build/unity/HordeProject/Build.loader.js"
            dataUrl="/files/build/unity/HordeProject/webgl.data"
            frameworkUrl="/files/build/unity/HordeProject/build.framework.js"
            codeUrl="/files/build/unity/HordeProject/build.wasm"
          />
          <br />
          <hr />
          Game made in unity
        </GameContent>
      </Container>
    </>
  );
};

export default Game;
