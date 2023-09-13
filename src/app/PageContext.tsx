'use client';
import { createContext, useContext, useState, ReactNode, FC } from 'react';

export const PageContext = createContext({
  requestFrom: 0,
  setRequestFrom: (newForm: number) => {},
});

interface IPageContextProvider {
  children: ReactNode;
}

export const PageContextProvider: FC<IPageContextProvider> = ({ children }) => {
  const [requestFrom, setRequestFrom] = useState<number>(0);

  return (
    <PageContext.Provider value={{ requestFrom, setRequestFrom }}>
      {children}
    </PageContext.Provider>
  );
};

export function usePageContext() {
  return useContext(PageContext);
}
