"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const manifest_1 = require("./config/manifest");
const Glue = require("glue");
Glue.compose(manifest_1.default, { relativeTo: __dirname }, (err, server) => {
    if (err) {
        console.log('server.register err:', err);
    }
    server.start(() => {
        console.log('✅  Server is listening on ' + server.info.uri.toLowerCase());
    });
});
