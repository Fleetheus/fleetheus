import express = require('express');

const app: express.Application = express();

app.get('/', (req, res) => {
    res.end('OK');
});

app.listen(3000, () => {
    console.log('Server started listening on port 3000');
});
