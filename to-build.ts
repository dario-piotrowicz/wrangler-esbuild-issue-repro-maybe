const str: string = "hello world";

console.log(str);

// Note: we cannot do this! it breaks the polyfilling
process.cwd = () => "";

console.log(process.cwd());
