/** @typedef {typeof __propDef.props}  EqTypeTextProps */
/** @typedef {typeof __propDef.events}  EqTypeTextEvents */
/** @typedef {typeof __propDef.slots}  EqTypeTextSlots */
export default class EqTypeText extends SvelteComponent<{
    item: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type EqTypeTextProps = typeof __propDef.props;
export type EqTypeTextEvents = typeof __propDef.events;
export type EqTypeTextSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        item: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
