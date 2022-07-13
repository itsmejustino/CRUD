const noteRoute = require('/notes');
//user path if helper needed
const { Router } = require('router');
const { application } = require('express');
const router  = Router();

app.use('/notes', noteRoute);

module.exports = router;