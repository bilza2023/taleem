/** @typedef {typeof __propDef.props}  TableCodeDisplayProps */
/** @typedef {typeof __propDef.events}  TableCodeDisplayEvents */
/** @typedef {typeof __propDef.slots}  TableCodeDisplaySlots */
export default class TableCodeDisplay extends SvelteComponent<{
    item: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TableCodeDisplayProps = typeof __propDef.props;
export type TableCodeDisplayEvents = typeof __propDef.events;
export type TableCodeDisplaySlots = typeof __propDef.slots;
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
