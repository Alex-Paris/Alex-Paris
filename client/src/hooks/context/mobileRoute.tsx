import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import MobilePreview from '../../components/MobilePreview';

interface MobilePage {
  page: React.FC;
  pageTitle: string;
  isActive?: boolean;
}

interface MobileRouteProps {
  propPages: MobilePage[];
}

export interface MobileNotificationMessage {
  isActive?: boolean;
  type?: 'success' | 'error' | 'info';
  title?: string;
  description?: string;
}

interface MobileRouteContextData {
  routeParam: string;
  setRouteParam(route: string): void;
  togglePage(pageTitle: string): void;
  sendNotification(message: MobileNotificationMessage): void;
}

const MobileRouteContext = createContext<MobileRouteContextData>(
  {} as MobileRouteContextData
);

export const MobileRouteProvider: React.FC<MobileRouteProps> = ({
  propPages,
  // children,
}) => {
  const [pages, setPages] = useState(propPages);
  const [message, setMessage] = useState<MobileNotificationMessage>();
  const [activePage, setActivePage] = useState<MobilePage>();
  const [routeParam, setRouteParam] = useState('');

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

  const sendNotification = useCallback((message) => {
    const sendMessage: MobileNotificationMessage = {
      isActive: true,
      ...message,
    };

    setMessage(sendMessage);

    setTimeout(() => {
      setMessage({
        isActive: false,
        ...message,
      });
    }, 3000);
  }, []);

  useEffect(() => {
    pages.map((page) => {
      if (page.isActive) {
        setActivePage(page);
      }
    });
  }, [pages]);

  return (
    <MobileRouteContext.Provider
      value={{
        routeParam,
        setRouteParam,
        togglePage,
        sendNotification,
      }}
    >
      {/* {children} */}
      <MobilePreview message={message}>
        {!!activePage && <activePage.page />}
      </MobilePreview>
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
