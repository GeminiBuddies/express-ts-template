import { main } from "./src/app";

console.log(`[${new Date().toISOString()}] stub called.`);
main({ cwd : __dirname, env: "development" });
