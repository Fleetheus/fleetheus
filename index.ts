import bodyParser from 'body-parser';
import express = require('express');
import session = require('express-session');

import sessionFileStore = require('session-file-store');

import frontend = require('./frontend')
import api = require('./api')

const app: express.Application = express();

const FileStore = sessionFileStore(session);
const fileStoreOptions : sessionFileStore.Options = {};
app.use(session({
    store: new (FileStore as any)(fileStoreOptions),
    secret: 'keyboard cat'
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// app.use(frontend);

app.use('/api', api);

app.get('/', (req, res) => {
    req.session!.test = 'pevec';
    res.end('OK');
});

app.listen(3000, () => {
    console.log('Server started listening on port 3000');
});
