/** @typedef {typeof __propDef.props}  TableProps */
/** @typedef {typeof __propDef.events}  TableEvents */
/** @typedef {typeof __propDef.slots}  TableSlots */
export default class Table extends SvelteComponent<{
    item: any;
    moveUp: any;
    moveDown: any;
    del: any;
    j: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TableProps = typeof __propDef.props;
export type TableEvents = typeof __propDef.events;
export type TableSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        item: any;
        moveUp: any;
        moveDown: any;
        del: any;
        j: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
