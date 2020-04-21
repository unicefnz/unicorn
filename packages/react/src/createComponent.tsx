import React from 'react';

export type ReactProps<PropType, ElementType> = PropType & React.HTMLAttributes<ElementType>;

/**
 * This function wraps a Web Component with a React friendly layer, fixing compatibility issues
 * between the standards
 * */
export function createComponent<PropType, ElementType>(tagName: string): React.FC<ReactProps<PropType, ElementType>> {
  return ({ children, className, ...props }: ReactProps<PropType, ElementType>) => {
    const newProps = { ...props };

    // Because reasons, react expects web components to have classes passed properly??
    if (className) {
      // @ts-ignore
      newProps.class = className;
    }
    return React.createElement(tagName, newProps, children);
  };
}
