let processCwdShim = () => ''

const exportable =
    /* @__PURE__ */ (() => {
        const cwd = 'cwd';
        return globalThis.process[cwd] = processCwdShim;
    })();

export {
    exportable as 'process.cwd',
exportable as 'globalThis.process.cwd',
}
