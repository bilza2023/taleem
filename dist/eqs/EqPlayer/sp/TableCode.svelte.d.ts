/** @typedef {typeof __propDef.props}  TableCodeProps */
/** @typedef {typeof __propDef.events}  TableCodeEvents */
/** @typedef {typeof __propDef.slots}  TableCodeSlots */
export default class TableCode extends SvelteComponent<{
    code: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TableCodeProps = typeof __propDef.props;
export type TableCodeEvents = typeof __propDef.events;
export type TableCodeSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        code: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
