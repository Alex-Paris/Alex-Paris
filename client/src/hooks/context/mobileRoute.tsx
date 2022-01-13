import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

interface MobilePage {
  page: React.FC;
  pageTitle: string;
  isActive?: boolean;
}

interface MobileRouteProps {
  propPages: MobilePage[];
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
  const [activePage, setActivePage] = useState<MobilePage>();

  const togglePage = useCallback(
    (pageTitle) => {
      pages.map((page) => {
        page.isActive = pageTitle === page.pageTitle ? true : false;
        if (page.isActive) {
          setActivePage(page);
        }
      });

      setPages(pages);
    },
    [pages]
  );

  useEffect(() => {
    pages.map((page) => {
      if (page.isActive) {
        setActivePage(page);
      }
    });
  }, [pages]);

  return (
    <MobileRouteContext.Provider value={{ togglePage }}>
      {/* {children} */}
      {!!activePage && <activePage.page />}
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
