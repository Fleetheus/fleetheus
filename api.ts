import express = require('express');

const router : express.IRouter = express.Router();

router.post('/users/login', (req, res) => {
    res.status(200).end();
});

export = router
