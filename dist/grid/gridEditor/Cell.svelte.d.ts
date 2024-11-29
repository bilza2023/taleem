/** @typedef {typeof __propDef.props}  CellProps */
/** @typedef {typeof __propDef.events}  CellEvents */
/** @typedef {typeof __propDef.slots}  CellSlots */
export default class Cell extends SvelteComponent<{
    item: any;
    showBdr: any;
    showShowAt: any;
    cellIndex: any;
    currentTime: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CellProps = typeof __propDef.props;
export type CellEvents = typeof __propDef.events;
export type CellSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        item: any;
        showBdr: any;
        showShowAt: any;
        cellIndex: any;
        currentTime: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
