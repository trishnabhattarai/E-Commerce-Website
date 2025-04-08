import { IPlayer, ITrigger } from '../interfaces';
/**
 * The __Loop__ trigger plays the animation from the first to the last frame infinitely, with no interaction necessary.
 */
export declare class Loop implements ITrigger {
    protected player: IPlayer;
    protected element: HTMLElement;
    protected targetElement: HTMLElement;
    private playTimeout;
    constructor(player: IPlayer, element: HTMLElement, targetElement: HTMLElement);
    onReady(): void;
    onComplete(): void;
    onDisconnected(): void;
    play(): void;
    resetPlayDelayTimer(): void;
    get delay(): number;
}
