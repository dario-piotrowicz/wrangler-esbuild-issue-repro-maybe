// @ts-check
import { build } from 'esbuild';

await build({
    entryPoints: ['to-build.ts'],
    outfile: 'builtTmp.js',
    inject: ['./process-cwd-shim.js'],
});

await build({
    entryPoints: ['builtTmp.js'],
    outfile: 'built.js',
    inject: ['./process-cwd-shim.js'],
});