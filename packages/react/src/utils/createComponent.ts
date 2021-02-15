import {
  createElement, forwardRef, useEffect, useRef
} from 'react';
import type { HTMLAttributes, MutableRefObject } from 'react';
import type { JSX } from '@unicorndesign/core';
import { attachUnsupportedProps, getReactSupportedProps } from './attachUnsupportedProps';

export function createReactComponent<
  Tag extends keyof (JSX.IntrinsicElements | HTMLElementTagNameMap)
>(tagName: Tag) {
  type Element = HTMLElementTagNameMap[Tag];
  type ReactProps = HTMLAttributes<Element> & JSX.IntrinsicElements[Tag];

  function WrapperComponent(
    { children, style, ...props }: ReactProps,
    forwardedRef?: ((instance: Element | null) => void) | MutableRefObject<Element | null> | null
  ) {
    const localRef = useRef<Element>();
    const cbRef = (el: Element) => {
      localRef.current = el;
      if (typeof forwardedRef === 'function') forwardedRef(el);
      else if (forwardedRef) forwardedRef.current = el;
    };

    const prevPropsRef = useRef<Omit<ReactProps, 'style' | 'children'>>(); // Keep track of the last props, used for dom binding.

    useEffect(() => {
      // current should always be set?
      if (localRef.current) {
        attachUnsupportedProps(localRef.current, props, prevPropsRef.current || {}, false);
        prevPropsRef.current = props;
      }
    }, [props]);

    const { className, ...reactProps } = props;
    return createElement(tagName, {
      ref: cbRef,
      style,
      ...getReactSupportedProps(reactProps) // attachProps ignores events that react handles, so we have to give them to react ourselves
    }, children);
  }

  WrapperComponent.displayName = tagName;

  return forwardRef(WrapperComponent);
}
