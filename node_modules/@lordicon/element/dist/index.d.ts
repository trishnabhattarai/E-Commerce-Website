import { Element } from './element';
import { AnimationLoader, Player } from './player';
import { Boomerang, Click, Hover, In, Loop, LoopOnHover, Morph, Sequence } from './triggers';
export { Boomerang, Click, Element, Hover, In, Loop, LoopOnHover, Morph, Player, Sequence };
export * from "./interfaces";
/**
 * Helper method that defines the `lord-icon` custom element with pre-made triggers and a {@link interfaces.PlayerFactory | player factory}.
 *
 * This method defines the following triggers:
 * - {@link triggers/in.In | in}
 * - {@link triggers/click.Click | click}
 * - {@link triggers/hover.Hover | hover}
 * - {@link triggers/loop.Loop | loop}
 * - {@link triggers/loop-on-hover.LoopOnHover | loop-on-hover}
 * - {@link triggers/morph.Morph | morph}
 * - {@link triggers/boomerang.Boomerang | boomerang}
 * - {@link triggers/sequence.Sequence | sequence}
 *
 * Example of tag definition with the default setup:
 * ```js
 * import lottie from 'lottie-web';
 * import { defineElement } from '@lordicon/element';
 *
 * defineElement(lottie.loadAnimation);
 * ```
 *
 * Basic usage from markup which is possible after tag definition:
 * ```html
 * <lord-icon trigger="hover" src="/icons/confetti.json"></lord-icon>
 * ```
 *
 * @param animationLoader Use `loadAnimation` from the `lottie-web` package.
 */
export declare function defineElement(animationLoader: AnimationLoader): void;
