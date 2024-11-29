/** @typedef {typeof __propDef.props}  HdgImgEdProps */
/** @typedef {typeof __propDef.events}  HdgImgEdEvents */
/** @typedef {typeof __propDef.slots}  HdgImgEdSlots */
export default class HdgImgEd extends SvelteComponent<{
    items: any;
    theme: any;
    slideExtra?: any[] | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type HdgImgEdProps = typeof __propDef.props;
export type HdgImgEdEvents = typeof __propDef.events;
export type HdgImgEdSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        items: any;
        theme: any;
        slideExtra?: any[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
