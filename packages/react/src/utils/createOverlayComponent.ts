import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import type { HTMLUniOverlayElement, OverlayController } from '@unicorndesign/core';
import { attachUnsupportedProps } from './attachUnsupportedProps';
import type { ReactOverlayProps } from './utils';

export function createOverlayComponent<
  OverlayProps extends object,
  OverlayEl extends HTMLUniOverlayElement
>(displayName: string, controller: OverlayController<OverlayEl>) {
  type Props = OverlayProps & ReactOverlayProps;

  function ReactOverlayComponent({ isOpen, children, ...restProps }: Props) {
    const [overlayEl, setOverlayEl] = useState<OverlayEl | null>(null);
    // We could render the React tree directly under the overlayEl
    // However, in scoped mode overlayEl's children get relocated down the tree
    // which breaks the bond between render root and children.
    // To fix this, we render to a intermediate div, and place that inside the overlayEl
    // No matter where this div moves, React doesn't care because the child tree remains intact
    const renderRoot = useRef<HTMLDivElement>(document.createElement('div'));
    const prevPropsRef = useRef<Omit<Props, 'isOpen' | 'children'>>(); // Keep track of the last props, used for dom binding.

    useEffect(() => {
      function maybeDismiss() {
        if (overlayEl) { // Remove the el
          overlayEl.dismiss();
          setOverlayEl(null);
        }
      }
      if (isOpen) {
        if (!overlayEl) { // Create the el
          controller.create({ ...restProps }).then((el) => {
            setOverlayEl(el);

            attachUnsupportedProps(el, restProps);
            el.append(renderRoot.current);

            el.present();
          });
        }
      } else maybeDismiss();
      return maybeDismiss;
      // This hook is only going to do something if isOpen changes, so we dont need a dep on restProps
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [overlayEl, isOpen]);

    useEffect(() => {
      // Update the el
      if (overlayEl) {
        // Save ourselves an attachProps call on open
        if (prevPropsRef) {
          attachUnsupportedProps(overlayEl, restProps, prevPropsRef.current);
        }
        prevPropsRef.current = restProps;
      } else prevPropsRef.current = undefined;
      // We don't need to depend on overlayEl, as changes to it are handled in the above hook
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [restProps]);

    if (overlayEl) {
      return ReactDOM.createPortal(children, renderRoot.current);
    }
    return null;
  }
  ReactOverlayComponent.displayName = displayName;

  return ReactOverlayComponent;
}
