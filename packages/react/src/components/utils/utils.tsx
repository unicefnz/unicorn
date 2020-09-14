import React from 'react';
import { OverlayEventDetail } from '@unicorndesign/core';

export const dashToPascalCase = (str: string) => str.toLowerCase().split('-').map(segment => segment.charAt(0).toUpperCase() + segment.slice(1)).join('');
export const camelToDashCase = (str: string) => str.replace(/([A-Z])/g, (m: string) => `-${m[0].toLowerCase()}`);

export interface ReactProps {
  class?: string;
}

export type UniReactExternalProps<PropType, ElementType> = PropType & React.HTMLAttributes<ElementType> & ReactProps;

export interface ReactOverlayProps {
  children?: React.ReactNode;
  isOpen: boolean;
  onUniDidDismiss?: (event: CustomEvent<OverlayEventDetail>) => void;
  onUniDidPresent?: (event: CustomEvent<OverlayEventDetail>) => void;
  onUniWillDismiss?: (event: CustomEvent<OverlayEventDetail>) => void;
  onUniWillPresent?: (event: CustomEvent<OverlayEventDetail>) => void;
}

export const createForwardRef = <PropType, ElementType>(
  ReactComponent: any,
  displayName: string
) => {
  const forwardRef = (
    props: UniReactExternalProps<PropType, ElementType>,
    ref: React.Ref<ElementType>
  ) => (<ReactComponent {...props} forwardedRef={ref} />);
  forwardRef.displayName = displayName;

  return React.forwardRef(forwardRef);
};
