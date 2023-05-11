import { CracoConfig } from '@craco/types';

function defineCraco(options: CracoConfig): CracoConfig {
    return options;
}

export default defineCraco({
    webpack: {
        alias: {
            '@': 'src',
        },
    },
});

