import { useContext } from 'react';
import { RootStore } from './rootStore';
import { UIStore } from './uiStore';
import StoreContext from './storeContext';

const MissingProviderError = new Error('You have forgot to use StoreProvider, shame on you.');

export const useStore = (): RootStore => {
  const store = useContext(StoreContext);
  if (!store) {
    // This is especially useful in TypeScript
    // so you don't need to be checking for null all the time
    throw MissingProviderError;
  }
  return store;
};

export const useUIStore = (): UIStore => {
  const store = useContext(StoreContext);
  if (!store) {
    throw MissingProviderError;
  }
  return store.uiStore;
};
