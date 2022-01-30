import React from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';

const unityContext = new UnityContext({
  loaderUrl: 'files/build/unity/HordeProject/Build.loader.js',
  dataUrl: 'files/build/unity/HordeProject/webgl.data',
  frameworkUrl: 'files/build/unity/HordeProject/build.framework.js',
  codeUrl: 'files/build/unity/HordeProject/build.wasm',
  webglContextAttributes: {
    preserveDrawingBuffer: true,
  },
});

const Game: React.FC = () => {
  return (
    <Unity
      style={{ width: '50%', height: '60vh', backgroundColor: 'black' }}
      unityContext={unityContext}
    />
  );
};

export default Game;
