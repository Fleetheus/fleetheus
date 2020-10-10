"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express = require("express");
const session = require("express-session");
const sessionFileStore = require("session-file-store");
const api = require("./api");
const app = express();
const FileStore = sessionFileStore(session);
const fileStoreOptions = {};
app.use(session({
    store: new FileStore(fileStoreOptions),
    secret: 'keyboard cat'
}));
// parse application/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({ extended: false }));
// parse application/json
app.use(body_parser_1.default.json());
// app.use(frontend);
app.use('/api', api);
app.get('/', (req, res) => {
    req.session.test = 'pevec';
    res.end('OK');
});
app.listen(3000, () => {
    console.log('Server started listening on port 3000');
});
//# sourceMappingURL=index.js.map