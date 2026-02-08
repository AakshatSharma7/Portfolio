declare module 'motion/react' {
  export const motion: any;
  export default motion;
}

declare module 'lucide-react' {
  export const Mail: any;
  export const Github: any;
  export const Linkedin: any;
  export const Send: any;
  export const MessageSquare: any;
  export const Phone: any;
  const _default: any;
  export default _default;
}

declare module 'react' {
  const React: any;
  export default React;
  export function useState<T = any>(initial?: T): [T, (v: any) => void];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useRef<T = any>(initial?: T): { current: T };
  export type ReactNode = any;
  export type FormEvent = any;
  export type ChangeEvent<T = any> = any;
}

declare module 'react-dom' {
  const _default: any;
  export default _default;
}

declare module 'react/jsx-runtime' {
  export function jsx(...args: any[]): any;
  export function jsxs(...args: any[]): any;
  export const Fragment: any;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module 'profile-image' {
  const content: string;
  export default content;
}
