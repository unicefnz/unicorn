import { EventEmitter } from '../../../stencil-public-runtime';
export interface ComboOption {
    id: string;
    title: string;
}
export declare class ComboGroup {
    /**
     * Available options in the combo group
    * */
    readonly options: ComboOption[];
    /**
     * ID of the selected option
    * */
    readonly value: string;
    /**
     * Emitted when the selected option changes
     * */
    readonly uniChange: EventEmitter;
    onValueChange(): void;
    private internalSelected;
    connectedCallback(): void;
    private optClick;
    render(): any;
}
