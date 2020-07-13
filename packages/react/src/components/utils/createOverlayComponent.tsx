import React from 'react';
import ReactDOM from 'react-dom';
import { HTMLUniOverlayElement, OverlayController } from '@unicef-new-zealand/uniform-core';
import { attachProps } from './attachProps';
import { ReactOverlayProps } from './utils';

export function createOverlayComponent<
  OverlayProps extends object,
  OverlayEl extends HTMLUniOverlayElement,
>(displayName: string, controller: OverlayController<OverlayEl>) {
  type Props = OverlayProps & ReactOverlayProps;

  return class ReactOverlayComponent extends React.Component<Props> {
    overlayEl: OverlayEl | null = null;

    static get displayName() {
      return displayName;
    }

    componentDidMount() {
      const { isOpen } = this.props;
      if (isOpen) {
        this.present();
      }
    }

    async componentDidUpdate(prevProps: Props) {
      const { isOpen } = this.props;

      // If it was closed and is now open
      if (prevProps.isOpen !== isOpen && isOpen) {
        await this.present(prevProps);
      }
      // If it was open, and is now closed
      if (this.overlayEl && prevProps.isOpen !== isOpen && !isOpen) {
        await this.overlayEl.dismiss();
      }
    }

    async present(prevProps?: Props) {
      // tslint:disable-next-line:no-empty
      const { children, isOpen, ...cProps } = this.props;

      this.overlayEl = await controller.create({ ...cProps });

      attachProps(this.overlayEl!, cProps, prevProps);

      await this.overlayEl!.present();
    }

    render() {
      const { isOpen, children } = this.props;
      if (this.overlayEl) return ReactDOM.createPortal(isOpen ? children : null, this.overlayEl);
      return null;
    }
  };
}
