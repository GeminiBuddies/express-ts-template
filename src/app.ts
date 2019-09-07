import * as express from 'express';
import { Env, MainOptions } from './defines';

export function main(option: MainOptions) {
    const app = express();

    app.get("/", (req, res) => {
        res.status(404).send("OK");
    })

    app.listen(4396, "127.0.0.1");
}
