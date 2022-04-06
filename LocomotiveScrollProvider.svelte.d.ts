import { SvelteComponentTyped } from "svelte";
import type { Scroll } from 'locomotive-scroll';
declare const __propDef: {
    props: {
        watch: any;
        location: URL | string;
        onLocationChange: (scroll: Scroll) => void;
        options: {
            el?: Element;
            elMobile?: Element;
            name?: string;
            offset?: number;
            repeat?: boolean;
            smooth?: boolean;
            smoothMobile?: boolean;
            direction?: string;
            inertia?: number;
            class?: string;
            scrollbarClass?: string;
            scrollingClass?: string;
            draggingClass?: string;
            smoothClass?: string;
            initClass?: string;
            getSpeed?: boolean;
            getDirection?: boolean;
        };
        imageTarget: string | undefined | null;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type LocomotiveScrollProviderProps = typeof __propDef.props;
export declare type LocomotiveScrollProviderEvents = typeof __propDef.events;
export declare type LocomotiveScrollProviderSlots = typeof __propDef.slots;
export default class LocomotiveScrollProvider extends SvelteComponentTyped<LocomotiveScrollProviderProps, LocomotiveScrollProviderEvents, LocomotiveScrollProviderSlots> {
}
export {};
