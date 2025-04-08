import { IPlayer, ITrigger } from '../interfaces';
/**
 * The __Sequence__ trigger allows you to define complex playing scenarios with a simple definition.
 *
 * Example usage:
 * ```html
 * <lord-icon trigger="sequence" sequence="state:intro-empty,play,state:hover-empty,play,state:morph-fill,play,state:morph-erase,play,state:intro-empty,delay:first:last:500,play:reverse" src="/trash.json"></lord-icon>
 * ```
 */
export declare class Sequence implements ITrigger {
    protected player: IPlayer;
    protected element: HTMLElement;
    protected targetElement: HTMLElement;
    protected sequenceIndex: number;
    protected frameState: string | null;
    protected frameDelayFirst: number | null;
    protected frameDelayLast: number | null;
    protected timer: any;
    protected observer: MutationObserver;
    constructor(player: IPlayer, element: HTMLElement, targetElement: HTMLElement);
    onReady(): void;
    onComplete(): void;
    onConnected(): void;
    onDisconnected(): void;
    reset(): void;
    takeStep(): {
        action: string;
        params: string[];
    };
    handleStep(action: string, params: string[]): void;
    step(): void;
    get sequence(): string;
}
