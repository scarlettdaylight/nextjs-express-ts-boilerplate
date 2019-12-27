import 'next';

declare module 'next' {
  import { RootStore } from '../../stores';

  export interface NextPageContext {
    initialStore: RootStore;
  }
}

declare module 'next/config' {
  export interface NextRuntimeConfig {
    TOKEN: string;
  }
}
