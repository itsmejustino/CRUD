//require path to notes
const noteRoute = require("/notes");
const { Router } = require("express");
const router = Router();
router.use("/notes", noteRoute);
//export notes to router.
module.exports = router;