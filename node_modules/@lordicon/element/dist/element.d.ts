import { IPlayer, ITrigger, ITriggerConstructor, IconData, IconLoader, PlayerFactory } from './interfaces';
/**
 * Supported icon loading strategies for our {@link Element | Element}.
 */
export type LoadingType = 'lazy' | 'interaction' | 'delay';
/**
 * Supported attributes for this custom element.
 */
type SUPPORTED_ATTRIBUTES = "colors" | "src" | "icon" | "state" | "trigger" | "loading" | "target" | "stroke";
/**
 * Define custom element and a player to streamline the rendering, customization, and easy control of Lordicon icons.
 *
 * Example:
 * ```js
 * import lottie from 'lottie-web';
 * import { Element, Player } from '@lordicon/element';
 *
 * Element.setPlayerFactory((container, iconData, initial) => {
 *     return new Player(
 *         lottie.loadAnimation,
 *         container,
 *         iconData,
 *         initial,
 *     );
 * });
 *
 * customElements.define("lord-icon", Element);
 * ```
 *
 * Notice: you can define this custom element, a lot easier with premade helper method: {@link index.defineElement | defineElement}.
 */
export declare class Element<P extends IPlayer = IPlayer> extends HTMLElement {
    protected static _iconLoader?: IconLoader;
    protected static _playerFactory?: PlayerFactory;
    protected static _definedTriggers: Map<string, ITriggerConstructor>;
    /**
     * Get the current element version.
     */
    static get version(): string;
    /**
     * Observed attributes for the custom element.
     */
    static get observedAttributes(): SUPPORTED_ATTRIBUTES[];
    /**
     * Assign a callback responsible for loading icons. This allows {@link element.Element | Element} to load {@link interfaces.IconData | icon data} from a custom source.
     * Remember to assign the _icon loader_ before defining the `lord-icon` custom element to take effect.
     *
     * Example:
     * ```js
     * import lottie from 'lottie-web';
     * import { defineElement, Element } from '@lordicon/element';
     *
     * Element.setIconLoader(async (name) => {
     *     const response = await fetch(`https://example.com/${name}.json`);
     *     return await response.json();
     * });
     *
     * defineElement(lottie.loadAnimation);
     * ```
     *
     * @param loader Custom icon loader callback.
     */
    static setIconLoader(loader: IconLoader): void;
    /**
     * Assign a callback that creates a player. The player is responsible for customizing icons and playing animations.
     * @param loader
     */
    static setPlayerFactory(loader: PlayerFactory): void;
    /**
     * Define a supported trigger. Triggers allow the definition of custom interaction strategies for the icon.
     * @param name Trigger name.
     * @param triggerClass Trigger class.
     */
    static defineTrigger(name: string, triggerClass: ITriggerConstructor): void;
    protected _root?: ShadowRoot;
    protected _isConnected: boolean;
    protected _isReady: boolean;
    protected _assignedIconData?: IconData;
    protected _loadedIconData?: IconData;
    protected _triggerInstance?: ITrigger;
    protected _playerInstance?: IPlayer;
    /**
     * Callback created by one of the lazy loading methods.
     * It forces the process to continue immediately.
     */
    delayedLoading: ((cancel?: boolean) => void) | null;
    /**
     * Handle attribute updates.
     * @param name
     * @param oldValue
     * @param newValue
     */
    protected attributeChangedCallback(name: SUPPORTED_ATTRIBUTES, oldValue: any, newValue: any): void;
    /**
     * The element is connected.
     */
    protected connectedCallback(): void;
    /**
     * The element is disconnected.
     */
    protected disconnectedCallback(): void;
    /**
     * Create DOM elements.
     */
    protected createElements(): void;
    /**
     * Instantiate a player instance on demand using the assigned player factory.
     * @returns
     */
    protected createPlayer(): Promise<void>;
    /**
     * Destroy connected player and connected trigger.
     * The player is recreated every time the icon data changes.
     */
    protected destroyPlayer(): void;
    /**
     * Load the icon using the assigned icon loader or from the source indicated by the 'src' attribute.
     * @returns Icon data.
     */
    protected loadIconData(): Promise<IconData>;
    /**
     * Synchronize the element's state with the player.
     */
    protected refresh(): void;
    /**
     * Update defaults for CSS variables.
     * Notice: CSS variables take precedence over colors assigned by other methods.
     */
    protected movePaletteToCssVariables(): void;
    /**
     * The 'target' attribute has been changed. The element should now reload its trigger.
     */
    protected targetChanged(): void;
    /**
     * The 'loading' attribute has been changed.
     */
    protected loadingChanged(): void;
    /**
     * The 'trigger' attribute has been changed. Disconnect the old trigger and instantiate the new one.
     */
    protected triggerChanged(): void;
    /**
     * The 'colors' attribute has been changed. Notify the player about the new value.
     */
    protected colorsChanged(): void;
    /**
     * The 'stroke' attribute has been changed. Notify the player about the new value.
     */
    protected strokeChanged(): void;
    /**
     * The 'state' attribute has been changed. Notify the player about the new value.
     */
    protected stateChanged(): void;
    /**
     * The 'icon' attribute has been changed. Reload our player.
     */
    protected iconChanged(): void;
    /**
     * The 'src' attribute has been changed. Reload our player.
     */
    protected srcChanged(): void;
    /**
     * Update the current icon. You can assign either an icon name handled by the {@link interfaces.IconLoader | icon loader} or directly use {@link interfaces.IconData | icon data}.
     */
    set icon(value: IconData | string | undefined);
    /**
     * Get the icon (icon name or assiged {@link interfaces.IconData | icon data})
     */
    get icon(): IconData | string | undefined;
    /**
     * Set the 'src' value.
     */
    set src(value: string | null);
    /**
     * Get the 'src' value.
     */
    get src(): string | null;
    /**
     * Set the 'state' value.
     *
     * Note: You can check available states for the loaded icon using the `states` property.
     */
    set state(value: string | null);
    /**
     * Get the 'state' value.
     */
    get state(): string | null;
    /**
     * Configure color values. We support a string format with comma-separated colors: "primary:#fdd394,secondary:#03a9f4".
     *
     * Example:
     * ```html
     * <lord-icon colors="primary:#fdd394,secondary:#03a9f4" src="/icons/confetti.json"></lord-icon>
     * ```
     */
    set colors(value: string | null);
    /**
     * Get the 'colors' value.
     */
    get colors(): string | null;
    /**
     * Set the 'trigger' value. Provide the name of an already defined trigger.
     */
    set trigger(value: string | null);
    /**
     * Get the 'trigger' value.
     */
    get trigger(): string | null;
    /**
     * Set the loading strategy. By default, {@link interfaces.IconData | icon data} is loaded instantly upon {@link interfaces.IPlayer | player} initialization.
     * It's possible to delay icon loading (using the _src_ and _icon_ attributes) by changing the _loading_ value to _lazy_ or _interaction_.
     */
    set loading(value: LoadingType | null);
    /**
     * Get the 'loading' value.
     */
    get loading(): LoadingType | null;
    /**
     * Assign a query selector for the closest element target used for listening to events.
     */
    set target(value: string | null);
    /**
     * Get the 'target' value.
     */
    get target(): string | null;
    /**
     * Set the 'stroke' value (1, 2, 3, light, regular, bold).
     */
    set stroke(value: string | null);
    /**
     * Get the 'stroke' value.
     */
    get stroke(): string | null;
    /**
     * Check whether the element is ready (has an instantiated player, trigger, and loaded icon data).
     *
     * You can listen for the element's readiness with an event listener:
     * ```js
     * element.addEventListener('ready', () => {});
     * ```
     */
    get isReady(): boolean;
    /**
     * Access the {@link interfaces.IPlayer | player} instance.
     */
    get playerInstance(): P | undefined;
    /**
     * Access the {@link interfaces.ITrigger | trigger} instance.
     */
    get triggerInstance(): ITrigger | undefined;
    /**
     * Access the animation container element.
     */
    protected get animationContainer(): HTMLElement | undefined;
    /**
     * Access the loaded {@link interfaces.IconData | icon data}.
     */
    protected get iconData(): IconData | undefined;
}
export {};
