/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare global {
    interface Window {
        glitchReveal: (root: HTMLElement, selector?: string) => void;
    }
}

export { };