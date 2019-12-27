import 'next';

declare module 'next/config' {
  export interface NextRuntimeConfig {
    TOKEN: string;
  }
}
