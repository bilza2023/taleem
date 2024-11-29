/** @typedef {typeof __propDef.props}  EqPanelProps */
/** @typedef {typeof __propDef.events}  EqPanelEvents */
/** @typedef {typeof __propDef.slots}  EqPanelSlots */
export default class EqPanel extends SvelteComponent<{
    currentTime: any;
    setPulse: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type EqPanelProps = typeof __propDef.props;
export type EqPanelEvents = typeof __propDef.events;
export type EqPanelSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        currentTime: any;
        setPulse: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
