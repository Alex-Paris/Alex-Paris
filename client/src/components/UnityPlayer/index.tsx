import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { UnityContext } from 'react-unity-webgl';

import { Container, UnityCanvas, UnityContainer, UnityLoading } from './styles';

// This is the context that Unity will use to communicate with the React app.
interface UnityPlayerProps {
  productName: string;
  // The url's of the Unity WebGL runtime, these paths are public and should be
  // accessible from the internet and relative to the index.html.
  loaderUrl: string;
  dataUrl: string;
  frameworkUrl: string;
  codeUrl: string;
  // The close needs a time to put the player to rest. set a timeout in page
  // before closing it with about 1000ms
  close?: boolean;
}

const UnityPlayer: React.FC<UnityPlayerProps> = ({
  productName,
  loaderUrl,
  dataUrl,
  frameworkUrl,
  codeUrl,
  close,
}) => {
  // The app's state.
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [progression, setProgression] = useState<number>(0);

  const unityContext = useMemo(() => {
    return new UnityContext({
      productName,
      loaderUrl,
      dataUrl,
      frameworkUrl,
      codeUrl,
      companyName: 'Alex Paris',
      webglContextAttributes: {
        preserveDrawingBuffer: true,
      },
    });
  }, [productName, loaderUrl, dataUrl, frameworkUrl, codeUrl]);

  // Built-in event invoked when the Unity canvas is ready to be interacted with.
  const handleOnUnityCanvas = useCallback((canvas: HTMLCanvasElement) => {
    canvas.setAttribute('role', 'unityCanvas');
  }, []);

  // Built-in event invoked when the Unity app's progress has changed.
  const handleOnUnityProgress = useCallback((progression: number) => {
    setProgression(progression);
  }, []);

  // Built-in event invoked when the Unity app is loaded.
  const handleOnUnityLoaded = useCallback(() => {
    setIsLoaded(true);
  }, []);

  // When the component is mounted, we'll register some event listener.
  useEffect(() => {
    unityContext.on('canvas', handleOnUnityCanvas);
    unityContext.on('progress', handleOnUnityProgress);
    unityContext.on('loaded', handleOnUnityLoaded);

    // When the component is unmounted, we'll unregister the event listener.
    return () => {
      unityContext.removeAllEventListeners();
    };
  }, [
    unityContext,
    handleOnUnityCanvas,
    handleOnUnityProgress,
    handleOnUnityLoaded,
  ]);

  // When the component is unmounted, we'll quit instance.
  useEffect(() => {
    if (close) {
      unityContext.quitUnityInstance();
    }
  }, [close, unityContext]);

  return (
    <Container>
      <UnityContainer>
        {!isLoaded && (
          <UnityLoading>
            <div>
              <div style={{ width: progression * 100 + '%' }} />
            </div>
          </UnityLoading>
        )}

        <UnityCanvas isLoaded={isLoaded} unityContext={unityContext} />
      </UnityContainer>
    </Container>
  );
};

export default UnityPlayer;
