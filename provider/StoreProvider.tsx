import * as React from 'react';
import { useMemo } from 'react';
import { Stores } from '../stores/Stores';
import { Provider } from 'mobx-react';

interface StoreProviderProps {
  children: React.ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const stores = useMemo(() => {
    const result = new Stores();
    return result;
  }, []);

  if (!stores) return null;

  return <Provider {...stores}>{children}</Provider>;
};
