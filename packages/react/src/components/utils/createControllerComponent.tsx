import React from 'react';
import { OverlayEventDetail, OverlayController, HTMLUniOverlayElement } from '@unicef-new-zealand/uniform-core';
import { attachProps } from './attachProps';
import { ReactOverlayProps } from './utils';

export const createControllerComponent = <ComponentOpts extends object, OverlayEl extends HTMLUniOverlayElement>(
  displayName: string,
  controller: OverlayController<OverlayEl>
) => {
  type Props = ComponentOpts & ReactOverlayProps & {
    forwardedRef?: React.RefObject<OverlayEl>;
  };

  class Overlay extends React.Component<Props> {
    private overlayEl?: OverlayEl;

    private isUnmounted = false;

    constructor(props: Props) {
      super(props);
      this.handleDismiss = this.handleDismiss.bind(this);
    }

    static get displayName() {
      return displayName;
    }

    componentDidMount() {
      const { isOpen } = this.props;

      if (isOpen) this.present();
    }

    async componentDidUpdate(prevProps: Props) {
      const { isOpen } = this.props;
      if (prevProps.isOpen !== isOpen && isOpen) this.present(prevProps);

      if (this.overlayEl && prevProps.isOpen !== isOpen && !isOpen) {
        await this.overlayEl.dismiss();
      }
    }

    componentWillUnmount() {
      this.isUnmounted = true;
      if (this.overlayEl) this.overlayEl.dismiss();
    }

    handleDismiss(event: CustomEvent<OverlayEventDetail>) {
      const { forwardedRef, onUniDidDismiss } = this.props;

      if (onUniDidDismiss) onUniDidDismiss(event);
      if (forwardedRef) (forwardedRef as any).current = undefined;
    }

    async present(prevProps?: Props) {
      const {
        forwardedRef, children, isOpen, onUniDidDismiss,
        onUniDidPresent, onUniWillDismiss, onUniWillPresent, ...cProps
      } = this.props;

      this.overlayEl = await controller.create({ ...cProps });

      attachProps(this.overlayEl, {
        onUniDidDismiss: this.handleDismiss,
        onUniDidPresent: (e: CustomEvent) => onUniDidPresent && onUniDidPresent(e),
        onUniWillDismiss: (e: CustomEvent) => onUniWillDismiss && onUniWillDismiss(e),
        onUniWillPresent: (e: CustomEvent) => onUniWillPresent && onUniWillPresent(e)
      }, prevProps);

      if (isOpen && !this.isUnmounted) {
        if (forwardedRef) {
          (forwardedRef as any).current = this.overlayEl;
        }
        await this.overlayEl.present();
      }
    }

    render() {
      return null;
    }
  }

  return React.forwardRef<OverlayEl, Props>((props, ref) => {
    return <Overlay {...props} forwardedRef={ref} />;
  });
};
