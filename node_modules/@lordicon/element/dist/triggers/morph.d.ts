import { IPlayer, ITrigger } from '../interfaces';
/**
 * The __Morph__ trigger allows playing the animation from the first to the last frame when hovering or clicking on the icon. After moving or clicking away, the animation plays in reverse.
 */
export declare class Morph implements ITrigger {
    protected player: IPlayer;
    protected element: HTMLElement;
    protected targetElement: HTMLElement;
    constructor(player: IPlayer, element: HTMLElement, targetElement: HTMLElement);
    onConnected(): void;
    onDisconnected(): void;
    onMouseEnter(): void;
    onMouseLeave(): void;
}
