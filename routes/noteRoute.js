const fs = require("fs");
const { Router } = require("express");
//requires middleware for unique id
const { v4: uuidv4 } = require("uuid");
const router = Router();

//gets route to / json and then reads the data from the file
router.get("/", (req, res) => {
  console.log("Testing...");
  console.info(`${req.method} request received.`);
  fs.readFile("./db/db.json", (err, data) => {
    err
      ? console.log(err)
      : res.json(JSON.parse(data)) + console.log("data retrieved from api.");
  });
});

//gets db path to post input to db.json.
router.post("/", (req, res) => {
  console.log(`${req.method} request received to add a note`);
  const { title, text } = req.body;
  //checks if there is title and text in request body. 
  if (title && text) {
    const addNote = {
      title,
      text,
      //adds random id to body
      id: uuidv4(),
    };

    fs.readFile("./db/db.json", (err, data) => {
      const parsedData = JSON.parse(data)
      
      err ? console.log(err)
        : parsedData.push(addNote);
      fs.writeFile("./db/db.json", JSON.stringify(parsedData), (err) => {
        err
          ? console.log(err)
          : res.send("success!") + console.log("Added a note! =)");
      });
    });

    //handles error response message to terminal to indicate a successful posted note.
  } else {
    res.status(500).json("Error posting note! ='( ");
  }
});

router.delete("/:id", (req, res) => {
  fs.readFile("./db/db.json", (err, data) => {
    const savedNotes = JSON.parse(data);
    const dbId = req.params.id;
    console.log(dbId);
    err
      ? console.log(err)
      : fs.writeFile("./db/db.json", JSON.stringify(savedNotes.filter((note) => note.id !== dbId)) , (err) => {
        err
          ? console.log(err)
          : res.send("success!") + console.log("Deleted a note! =)") + console.log("This note was deleted:" + JSON.stringify(datatoReplace));
      });
  });
});

module.exports = router;
