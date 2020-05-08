/*
This code is *heavily* influenced by @ionic/react
Thank you to the ionic team for going through these challenges so I don't have to
https://github.com/ionic-team/ionic/blob/master/packages/react/src/components/createComponent.tsx
 * */

import React, { useEffect, useRef } from 'react';
import { attachProps, isCoveredByReact } from './util/attachProps';

export type ReactProps<PropType, ElementType> = PropType & React.HTMLAttributes<ElementType>;

/**
 * This function wraps a Web Component with a React friendly layer, fixing compatibility issues
 * between the standards
 * */
export function createComponent<PropType, ElementType extends HTMLElement>(tagName: string): React.FC<ReactProps<PropType, ElementType>> {
  return ({ children, className, style, ...props }: ReactProps<PropType, ElementType>) => {

    const ref = useRef<ElementType>();
    useEffect(() => {
      const node = ref.current;
      if (node) {
        attachProps(node, props);
      }
    });

    // Because reasons, react expects web components to have classes passed properly??
    const newProps = {
      class: className,
      ref,
      style
    };

    Object.keys(props).forEach((name) => {
      if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
        const eventName = name.substring(2).toLowerCase();
        if (isCoveredByReact(eventName)) {
          (newProps as any)[name] = (props as any)[name];
        }
      }
    });

    return React.createElement(tagName, newProps, children);
  };
}
