import { createContext } from 'react';
import { RootStore } from './rootStore';

const RootStoreContext = createContext<RootStore | null>(null);

export default RootStoreContext;
