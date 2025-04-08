import { IPlayer, ITrigger } from '../interfaces';
/**
 * The __In__ trigger plays the animation when the icon (target) is within the user's viewport.
 */
export declare class In implements ITrigger {
    protected player: IPlayer;
    protected element: HTMLElement;
    protected targetElement: HTMLElement;
    private playTimeout;
    private played;
    private intersectionObserver;
    constructor(player: IPlayer, element: HTMLElement, targetElement: HTMLElement);
    onConnected(): void;
    onDisconnected(): void;
    play(): void;
    resetIntersectionObserver(): void;
    resetPlayDelayTimer(): void;
    get delay(): number;
    get loading(): boolean;
}
