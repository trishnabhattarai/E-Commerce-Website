import { IPlayer, ITrigger } from '../interfaces';
/**
 * The __Hover__ trigger plays the animation from the first to the last frame when the cursor hovers over the icon (target).
 */
export declare class Hover implements ITrigger {
    protected player: IPlayer;
    protected element: HTMLElement;
    protected targetElement: HTMLElement;
    constructor(player: IPlayer, element: HTMLElement, targetElement: HTMLElement);
    onConnected(): void;
    onDisconnected(): void;
    onHover(): void;
}
