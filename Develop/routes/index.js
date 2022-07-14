//require path to notes
const noteRoute = require("./noteRoute");
const { Router } = require("express");
const router = Router();
router.use("/notes", noteRoute);
//export notes to router.
module.exports = router;
