/** @typedef {typeof __propDef.props}  VerticalBtnsTblProps */
/** @typedef {typeof __propDef.events}  VerticalBtnsTblEvents */
/** @typedef {typeof __propDef.slots}  VerticalBtnsTblSlots */
export default class VerticalBtnsTbl extends SvelteComponent<{
    moveUp: any;
    moveDown: any;
    del: any;
    j: any;
    addRow: any;
    delRow: any;
    addCol: any;
    delCol: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type VerticalBtnsTblProps = typeof __propDef.props;
export type VerticalBtnsTblEvents = typeof __propDef.events;
export type VerticalBtnsTblSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        moveUp: any;
        moveDown: any;
        del: any;
        j: any;
        addRow: any;
        delRow: any;
        addCol: any;
        delCol: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
