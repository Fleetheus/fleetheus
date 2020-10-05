import express = require('express');
import session = require('express-session');
import sessionFileStore = require('session-file-store');

import frontend = require('./frontend')

const app: express.Application = express();

const FileStore = sessionFileStore(session);
const fileStoreOptions : sessionFileStore.Options = {};
app.use(session({
    store: new (FileStore as any)(fileStoreOptions),
    secret: 'keyboard cat'
}));

// app.use(frontend);

app.get('/', (req, res) => {
    req.session!.test = 'pevec';
    res.end('OK');
});

app.listen(3000, () => {
    console.log('Server started listening on port 3000');
});
