import React, { FC } from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { createRootStore, InitialStoreData } from './rootStore';
import StoreContext from './storeContext';

const isServer = typeof window === 'undefined';

export interface RootStoreProviderProps {
  initialData: InitialStoreData;
}

const StoreProvider: FC<RootStoreProviderProps> = ({ initialData, children }) => {
  const store = useLocalStore(() => createRootStore(initialData));

  if (!store.hasInit && !isServer) {
    // init store here
    store.hasInit = true;
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
