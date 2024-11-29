/** @typedef {typeof __propDef.props}  HdgImgProps */
/** @typedef {typeof __propDef.events}  HdgImgEvents */
/** @typedef {typeof __propDef.slots}  HdgImgSlots */
export default class HdgImg extends SvelteComponent<{
    pulse: any;
    theme: any;
    slideExtra?: any[] | undefined;
    items?: any[] | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type HdgImgProps = typeof __propDef.props;
export type HdgImgEvents = typeof __propDef.events;
export type HdgImgSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        pulse: any;
        theme: any;
        slideExtra?: any[] | undefined;
        items?: any[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
