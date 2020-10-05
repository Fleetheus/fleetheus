import express = require('express')

const router : express.IRouter = express.Router();

router.get('/', (req, res) => {
    // return current session user
});

export = router
