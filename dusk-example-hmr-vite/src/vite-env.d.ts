/// <reference types="vite/client" />

import { DuskApplication } from '@xams-framework/dusk';

declare global {
    interface Window {
        [index: string]: any;

        app: DuskApplication;

    }
}
