/** @typedef {typeof __propDef.props}  ToolbarProps */
/** @typedef {typeof __propDef.events}  ToolbarEvents */
/** @typedef {typeof __propDef.slots}  ToolbarSlots */
export default class Toolbar extends SvelteComponent<{
    addRow: any;
    addCol: any;
    delRow: any;
    delCol: any;
    setshowShowAt: any;
    setBdr: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ToolbarProps = typeof __propDef.props;
export type ToolbarEvents = typeof __propDef.events;
export type ToolbarSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        addRow: any;
        addCol: any;
        delRow: any;
        delCol: any;
        setshowShowAt: any;
        setBdr: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
