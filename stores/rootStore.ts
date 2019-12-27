import { useStaticRendering } from 'mobx-react-lite';
import { createUIStore, InitialUIData, UIStore } from './uiStore';

const isServer = typeof window === 'undefined';

// This is a hook that is intended to be ran at module level
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer);

export interface InitialStoreData {
  hasInit?: boolean;
  uiStore?: InitialUIData;
}

export interface RootStore extends Required<InitialStoreData> {
  hasInit: boolean;
  uiStore: UIStore;
  reset(): void;
}

export function createRootStore(initialData: InitialStoreData = {}): RootStore {
  const { hasInit = false, uiStore = {} } = initialData;

  const createdUIStore = createUIStore(uiStore);

  // Fill in lost function in client side while keeping values from initial data
  return {
    hasInit,
    uiStore: createdUIStore,
    reset() {
      this.uiStore.reset();
    },
  };
}
