/** @typedef {typeof __propDef.props}  CodeTxtProps */
/** @typedef {typeof __propDef.events}  CodeTxtEvents */
/** @typedef {typeof __propDef.slots}  CodeTxtSlots */
export default class CodeTxt extends SvelteComponent<{
    eq: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CodeTxtProps = typeof __propDef.props;
export type CodeTxtEvents = typeof __propDef.events;
export type CodeTxtSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        eq: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
