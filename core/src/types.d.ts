// import { JSX as ReactJSX } from '@types/react';
import { JSX as LocalJSX } from './components';

declare global {
  namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}
