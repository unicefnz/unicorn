import { arrayToMap, camelToDashCase } from './utils';

export function getUpdatedClassStringFromProps(classList: DOMTokenList, newProps: any, oldProps: any): string {
  // map the classes to Maps for performance
  const currentClasses = arrayToMap(classList);
  const incomingPropClasses = arrayToMap(newProps.className ? newProps.className.split(' ') : []);
  const oldPropClasses = arrayToMap(oldProps.className ? oldProps.className.split(' ') : []);
  const finalClassNames: string[] = [];
  // loop through each of the current classes on the component
  // to see if it should be a part of the classNames added
  currentClasses.forEach((currentClass) => {
    if (incomingPropClasses.has(currentClass)) {
      // add it as its already included in classnames coming in from newProps
      finalClassNames.push(currentClass);
      incomingPropClasses.delete(currentClass);
    } else if (!oldPropClasses.has(currentClass)) {
      // add it as it has NOT been removed by user
      finalClassNames.push(currentClass);
    }
  });
  incomingPropClasses.forEach(s => finalClassNames.push(s));
  return finalClassNames.join(' ');
}

/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
export function isEventHandledByReact(eventNameSuffix: string, doc?: Document): boolean {
  if (!doc && typeof document !== 'object') return false; // TODO If we're in a SSR enviornment, doc isn't available. How do we handle this?
  // eslint-disable-next-line no-param-reassign
  doc = doc || document;

  const eventName = 'on' + eventNameSuffix;
  let isSupported = eventName in doc;

  if (!isSupported) {
    const element = doc.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof (element as any)[eventName] === 'function';
  }

  return isSupported;
}

export function syncEvent(node: Element, eventName: string, newEventHandler: (e: Event) => any) {
  // We could use a Symbol but, yaknow, browser support
  // eslint-disable-next-line no-underscore-dangle
  const eventStore = (node as any).__events || ((node as any).__events = {});
  const oldEventHandler = eventStore[eventName];

  // Remove old listener so they don't double up.
  if (oldEventHandler) {
    node.removeEventListener(eventName, oldEventHandler);
  }

  if (newEventHandler != null) {
    // Bind new listener.
    node.addEventListener(
      eventName,
      (eventStore[eventName] = function handler(e: Event) {
        newEventHandler.call(this, e);
      })
    );
  }
}

/**
 * Returns a record of react-supported props (strings, native events)
 * */
export function getReactSupportedProps<T = any>(props: Record<string, T>): Record<string, T> {
  const reactProps: Record<string, T> = {};
  Object.keys(props).forEach((name: keyof typeof reactProps) => {
    if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
      // If the name looks like an event, and is covered by react (meaning native events)
      const eventName = name.substring(2).toLowerCase();
      if (isEventHandledByReact(eventName)) {
        reactProps[name] = props[name];
      }
    } else if (typeof props[name] === 'string') {
      // Otherwise, if it's a boring string
      reactProps[camelToDashCase(name)] = props[name];
    }
  });

  return reactProps;
}

/**
 * Attaches props unsupported by react directly to the DOM
 * */
export const attachUnsupportedProps = (node: HTMLElement, newProps: any, oldProps: any = {}, attachStrings = true) => {
  // some test frameworks don't render DOM elements, so we test here to make sure we are dealing with DOM first
  // TODO is this the right place to check we are in DOM
  if (node instanceof Element && typeof document === 'object') {
    // add any classes in className to the class list
    const className = getUpdatedClassStringFromProps(node.classList, newProps, oldProps);
    if (className !== '') {
      node.className = className;
    }

    Object.keys(newProps).forEach((name) => {
      // Make sure we don't mess with classes
      if (name === 'class' || name === 'className') {
        return;
      }

      // If the event is non-native then handle it ourselves
      if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
        const eventName = name.substring(2);
        const eventNameLc = eventName[0].toLowerCase() + eventName.substring(1);

        if (!isEventHandledByReact(eventNameLc)) {
          syncEvent(node, eventNameLc, newProps[name]);
        }
        return;
      }

      // If it's not a string, attach it straight to the node
      if (typeof newProps[name] !== 'string') {
        (node as any)[name] = newProps[name];
        return;
      }

      // If we're attaching strings, then attach it as an attribute
      if (attachStrings) {
        node.setAttribute(camelToDashCase(name), newProps[name]);
      }
    });
  }
};
