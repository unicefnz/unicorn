import { camelToDashCase } from './utils';

function arrayToMap(arr: string[] | DOMTokenList): Map<string, string> {
  const map = new Map<string, string>();
  (arr as string[]).forEach?.((s: string) => map.set(s, s));
  return map;
}

export function getClassName(classList: DOMTokenList, newProps: any, oldProps: any): string {
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
export function isCoveredByReact(eventNameSuffix: string, doc?: Document): boolean {
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

export function getReactSupportedProps<T = any>(props: Record<string, T>): Record<string, T> {
  const reactEvents: Record<string, T> = {};
  Object.keys(props).forEach((name) => {
    if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
      // If the name looks like an event, and is covered by react (meaning native events)
      const eventName = name.substring(2).toLowerCase();
      if (isCoveredByReact(eventName)) {
        reactEvents[name] = props[name];
      }
    } else if (typeof props[name] === 'string') {
      // Otherwise, if it's a boring string
      reactEvents[camelToDashCase(name)] = (props as any)[name];
    }
  });

  return reactEvents;
}

export const attachProps = (node: HTMLElement, newProps: any, oldProps: any = {}, attachStrings = true) => {
  // some test frameworks don't render DOM elements, so we test here to make sure we are dealing with DOM first
  // TODO is this the right place to check we are in DOM
  if (node instanceof Element && typeof document === 'object') {
    // add any classes in className to the class list
    const className = getClassName(node.classList, newProps, oldProps);
    if (className !== '') {
      node.className = className;
    }

    Object.keys(newProps).forEach((name) => {
      if (name === 'children' || name === 'style' || name === 'ref' || name === 'class' || name === 'className' || name === 'forwardedRef') {
        return;
      }
      // Check that the name starts with on, and the next character is uppercase
      if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
        const eventName = name.substring(2);
        const eventNameLc = eventName[0].toLowerCase() + eventName.substring(1);

        if (!isCoveredByReact(eventNameLc)) {
          syncEvent(node, eventNameLc, newProps[name]);
        }
      } else {
        (node as any)[name] = newProps[name];
        const propType = typeof newProps[name];
        if (propType !== 'string') {
          (node as any)[name] = newProps[name];
        } else if (attachStrings) {
          node.setAttribute(camelToDashCase(name), newProps[name]);
        }
      }
    });
  }
};