/** @typedef {typeof __propDef.props}  GridPlayerProps */
/** @typedef {typeof __propDef.events}  GridPlayerEvents */
/** @typedef {typeof __propDef.slots}  GridPlayerSlots */
export default class GridPlayer extends SvelteComponent<{
    items: any;
    pulse: any;
    slideExtra: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type GridPlayerProps = typeof __propDef.props;
export type GridPlayerEvents = typeof __propDef.events;
export type GridPlayerSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        items: any;
        pulse: any;
        slideExtra: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
