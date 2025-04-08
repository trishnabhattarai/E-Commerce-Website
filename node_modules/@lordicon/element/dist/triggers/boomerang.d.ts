import { IPlayer, ITrigger } from '../interfaces';
/**
 * The __Boomerang__ trigger plays the animation from the first to the last frame when you hover over it and then plays in reverse once you move the cursor away.
 */
export declare class Boomerang implements ITrigger {
    protected player: IPlayer;
    protected element: HTMLElement;
    protected targetElement: HTMLElement;
    constructor(player: IPlayer, element: HTMLElement, targetElement: HTMLElement);
    onConnected(): void;
    onDisconnected(): void;
    onComplete(): void;
    onHover(): void;
}
