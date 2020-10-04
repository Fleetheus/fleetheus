"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get('/', (req, res) => {
    res.end('OK');
});
app.listen(3000, () => {
    console.log('Server started listening on port 3000');
});
//# sourceMappingURL=index.js.map