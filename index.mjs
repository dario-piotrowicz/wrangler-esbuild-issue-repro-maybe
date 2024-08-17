// @ts-check
import { build } from 'esbuild';

await build({
    entryPoints: ['to-build.ts'],
    outfile: 'built.js',
    inject: ['./process-cwd-shim.js'],
});
