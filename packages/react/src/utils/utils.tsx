import type * as React from 'react';
import type { OverlayEventDetail } from '@unicorndesign/core';

export const camelToDashCase = (str: string) => str.replace(/([A-Z])/g, (m: string) => `-${m[0].toLowerCase()}`);

export interface ReactOverlayProps {
  children?: React.ReactNode;
  isOpen: boolean;
  onUniDidDismiss?: (event: CustomEvent<OverlayEventDetail>) => void;
  onUniDidPresent?: (event: CustomEvent<OverlayEventDetail>) => void;
  onUniWillDismiss?: (event: CustomEvent<OverlayEventDetail>) => void;
  onUniWillPresent?: (event: CustomEvent<OverlayEventDetail>) => void;
}

export function arrayToMap(arr: string[] | DOMTokenList): Map<string, string> {
  const map = new Map<string, string>();
  (arr as string[]).forEach?.((s: string) => map.set(s, s));
  return map;
}
