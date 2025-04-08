import { IPlayer, ITrigger } from '../interfaces';
/**
 * The __Click__ trigger plays the animation after clicking on the icon (its target).
 */
export declare class Click implements ITrigger {
    protected player: IPlayer;
    protected element: HTMLElement;
    protected targetElement: HTMLElement;
    constructor(player: IPlayer, element: HTMLElement, targetElement: HTMLElement);
    onConnected(): void;
    onDisconnected(): void;
    onClick(): void;
}
