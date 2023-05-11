/// <reference types="react-scripts" />

import { DuskApplication } from '@xams-framework/dusk';

declare global {
    interface Window {
        [index: string]: any;

        app: DuskApplication;
    }
}
