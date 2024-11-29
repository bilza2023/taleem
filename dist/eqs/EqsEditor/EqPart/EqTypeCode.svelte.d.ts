/** @typedef {typeof __propDef.props}  EqTypeCodeProps */
/** @typedef {typeof __propDef.events}  EqTypeCodeEvents */
/** @typedef {typeof __propDef.slots}  EqTypeCodeSlots */
export default class EqTypeCode extends SvelteComponent<{
    item: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type EqTypeCodeProps = typeof __propDef.props;
export type EqTypeCodeEvents = typeof __propDef.events;
export type EqTypeCodeSlots = typeof __propDef.slots;
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
