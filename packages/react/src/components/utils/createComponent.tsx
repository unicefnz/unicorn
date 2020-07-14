import React from 'react';

import { createForwardRef, dashToPascalCase } from './utils';
import { attachProps, isCoveredByReact } from './attachProps';

interface InternalProps<ElementType> extends React.HTMLAttributes<ElementType> {
  forwardedRef?: React.Ref<ElementType>;
  ref?: React.Ref<any>;
}

export const createReactComponent = <PropType, ElementType extends HTMLElement>(tagName: string) => {
  const displayName = dashToPascalCase(tagName);
  const ReactComponent = class extends React.Component<InternalProps<ElementType>> {
    private ref: React.RefObject<HTMLElement>;

    constructor(props: InternalProps<ElementType>) {
      super(props);
      this.ref = React.createRef<HTMLElement>();
    }

    componentDidMount() {
      this.componentDidUpdate(this.props);
    }

    componentDidUpdate(prevProps: InternalProps<ElementType>) {
      const node = this.ref.current as ElementType;
      attachProps(node, this.props, prevProps);
    }

    render() {
      const { children, forwardedRef, style, className, ref, ...cProps } = this.props;

      const propsToPass = Object.keys(cProps).reduce((acc, name) => {
        if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) { // If it looks like an event
          const eventName = name.substring(2).toLowerCase();
          if (isCoveredByReact(eventName)) {
            (acc as any)[name] = (cProps as any)[name];
          }
        }
        return acc;
      }, {});

      const newProps: any = {
        ...propsToPass,
        ref: this.ref,
        style,
        className,
      };

      return React.createElement(tagName, newProps, children);
    }

    static get displayName() {
      return displayName;
    }
  };
  return createForwardRef<PropType, ElementType>(ReactComponent, displayName);
};
