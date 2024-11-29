/** @typedef {typeof __propDef.props}  HdgListProps */
/** @typedef {typeof __propDef.events}  HdgListEvents */
/** @typedef {typeof __propDef.slots}  HdgListSlots */
export default class HdgList extends SvelteComponent<{
    slideExtra: any;
    pulse: any;
    items?: any[] | undefined;
    theme?: {} | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type HdgListProps = typeof __propDef.props;
export type HdgListEvents = typeof __propDef.events;
export type HdgListSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        slideExtra: any;
        pulse: any;
        items?: any[] | undefined;
        theme?: {} | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
