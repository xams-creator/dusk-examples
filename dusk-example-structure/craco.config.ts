import { CracoConfig } from '@craco/types';
import createCracoDuskHmr from '@xams-framework/craco-plugin-dusk-hmr';

function defineCraco(options: CracoConfig): CracoConfig {
    return options;
}

export default defineCraco({
    plugins: [
        createCracoDuskHmr(),
    ],
    webpack: {
        alias: {
            '@': 'src',
        },
    },
    devServer: {
        client: {
            overlay: false,
        },
    },
});

