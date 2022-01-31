import React, { Fragment } from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';

const unityContext = new UnityContext({
  loaderUrl: '/files/build/unity/HordeProject/Build.loader.js',
  dataUrl: '/files/build/unity/HordeProject/webgl.data',
  frameworkUrl: '/files/build/unity/HordeProject/build.framework.js',
  codeUrl: '/files/build/unity/HordeProject/build.wasm',
  webglContextAttributes: {
    preserveDrawingBuffer: true,
  },
});

const Game: React.FC = () => {
  return (
    <Fragment>
      <Unity
        style={{
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
        }}
        unityContext={unityContext}
      />
    </Fragment>
  );
};

export default Game;
