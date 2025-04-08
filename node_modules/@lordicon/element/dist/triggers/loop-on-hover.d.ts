import { IPlayer, ITrigger } from '../interfaces';
/**
 * The LoopOnHover trigger plays the animation from the first to the last frame infinitely when the cursor hovers over the icon (target).
 */
export declare class LoopOnHover implements ITrigger {
    protected player: IPlayer;
    protected element: HTMLElement;
    protected targetElement: HTMLElement;
    playTimeout: any;
    mouseIn: boolean;
    constructor(player: IPlayer, element: HTMLElement, targetElement: HTMLElement);
    onConnected(): void;
    onDisconnected(): void;
    onMouseEnter(): void;
    onMouseLeave(): void;
    onComplete(): void;
    play(): void;
    resetPlayDelayTimer(): void;
    get delay(): number;
}
