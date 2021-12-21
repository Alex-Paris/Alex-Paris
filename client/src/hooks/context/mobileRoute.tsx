import React, { createContext, useCallback, useContext, useState } from 'react';

interface MobilePages {
  page: React.FC;
  pageTitle: string;
  isActive?: boolean;
}

interface MobileRouteProps {
  propPages: MobilePages[];
}

interface MobileRouteContextData {
  togglePage(pageTitle: string): void;
}

const MobileRouteContext = createContext<MobileRouteContextData>(
  {} as MobileRouteContextData
);

export const MobileRouteProvider: React.FC<MobileRouteProps> = ({
  propPages,
  // children,
}) => {
  const [pages, setPages] = useState(propPages);

  const togglePage = useCallback(
    (pageTitle) => {
      pages.map((page) => {
        page.isActive = pageTitle === page.pageTitle ? true : false;
      });

      setPages(pages);
    },
    [pages]
  );

  return (
    <MobileRouteContext.Provider value={{ togglePage }}>
      {/* {children} */}
      {pages.map((page) => page.isActive && <page.page />)}
    </MobileRouteContext.Provider>
  );
};

export function useMobileRoute(): MobileRouteContextData {
  const context = useContext(MobileRouteContext);

  if (!context) {
    throw new Error('useMobileRoute must be used within a MobileRouteProvider');
  }

  return context;
}
