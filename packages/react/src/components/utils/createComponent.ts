import React, { MutableRefObject, useEffect, useRef } from 'react';
import type { JSX } from '@unicorndesign/core';
import { attachProps } from './attachProps';

export const createReactComponent = <Tag extends keyof (JSX.IntrinsicElements | HTMLElementTagNameMap)>(tagName: Tag) => {
  type Element = HTMLElementTagNameMap[Tag];
  type ReactProps = React.HTMLAttributes<Element> & JSX.IntrinsicElements[Tag];

  const WrapperComponent = (
    { children, style, ...props }: ReactProps,
    forwardedRef?: ((instance: Element | null) => void) | MutableRefObject<Element | null> | null
  ) => {
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
        attachProps(localRef.current, props, prevPropsRef.current || {});
        prevPropsRef.current = props;
      }
    }, [props]);

    return React.createElement(tagName, {
      ref: cbRef,
      style
    }, children);
  };

  WrapperComponent.displayName = tagName;

  return React.forwardRef(WrapperComponent);
};
