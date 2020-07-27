import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { HTMLUniOverlayElement, OverlayController } from '@unicef-new-zealand/uniform-core';
import { attachProps } from './attachProps';
import { ReactOverlayProps } from './utils';

export function createOverlayComponent<
  OverlayProps extends object,
  OverlayEl extends HTMLUniOverlayElement,
>(displayName: string, controller: OverlayController<OverlayEl>) {
  type Props = OverlayProps & ReactOverlayProps;

  function ReactOverlayComponent({ isOpen, children, ...restProps }: Props) {
    const [overlayEl, setOverlayEl] = useState<OverlayEl | null>(null);
    const prevPropsRef = useRef<Omit<Props, 'isOpen'|'children'>>(); // Keep track of the last props, used for dom binding.

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

            attachProps(el, restProps);

            el.present();
          });
        }
      } else maybeDismiss();
      return maybeDismiss;
      // This hook is only going to do something if isOpen changes, so we dont need a dep on overlayEl or restProps
    }, [isOpen]);

    useEffect(() => {
      // Update the el
      if (overlayEl) {
        // Save ourselves an attachProps call on open
        if (prevPropsRef) {
          attachProps(overlayEl, restProps, prevPropsRef.current);
        }
        prevPropsRef.current = restProps;
      } else prevPropsRef.current = undefined;
    }, [restProps]);

    if (overlayEl) {
      return ReactDOM.createPortal(children, overlayEl);
    }
    return null;
  }
  ReactOverlayComponent.displayName = displayName;

  return ReactOverlayComponent;
}
