"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const session = require("express-session");
const sessionFileStore = require("session-file-store");
const app = express();
const FileStore = sessionFileStore(session);
const fileStoreOptions = {};
app.use(session({
    store: new FileStore(fileStoreOptions),
    secret: 'keyboard cat'
}));
// app.use(frontend);
app.get('/', (req, res) => {
    req.session.test = 'pevec';
    res.end('OK');
});
app.listen(3000, () => {
    console.log('Server started listening on port 3000');
});
//# sourceMappingURL=index.js.map