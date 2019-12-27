/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.svg' {
  const content: React.ComponentType<any>;
  export default content;
}
