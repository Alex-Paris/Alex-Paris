import React, { useCallback } from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';

import { useTheme } from '../hooks/context/theme';

interface RouteProps extends ReactDOMRouteProps {
  isDemo?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isDemo = false,
  component: Component,
  ...rest
}) => {
  const { demoTheme } = useTheme();

  const toggleDemoTheme = useCallback(() => {
    if (isDemo) {
      demoTheme(true);
      return true;
    }

    demoTheme(false);
    return true;
  }, [isDemo, demoTheme]);

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return toggleDemoTheme() && <Component />;
      }}
    />
  );
};

export default Route;
