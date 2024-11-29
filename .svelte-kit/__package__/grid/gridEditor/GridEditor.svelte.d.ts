/** @typedef {typeof __propDef.props}  GridEditorProps */
/** @typedef {typeof __propDef.events}  GridEditorEvents */
/** @typedef {typeof __propDef.slots}  GridEditorSlots */
export default class GridEditor extends SvelteComponent<{
    items: any;
    currentTime: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type GridEditorProps = typeof __propDef.props;
export type GridEditorEvents = typeof __propDef.events;
export type GridEditorSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        items: any;
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
