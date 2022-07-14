const fs = require("fs");
const { Router } = require("express");
const {v4:uuidv4} = require("uuid");
const router = Router();

//gets route to /db json and then reads the data from the file
router.get("/", (req, res) => {
  // res.status(200).json(`${req.method} request received.`);
  console.log("Testing...");
  console.info(`${req.method} request received.`);
  fs.readFile("./db/db.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(JSON.parse(data));
    }
  });
});

//gets db path to post input to db.json.
router.post("/", (req, res) => {
  console.log(`${req.method} request received to add a note`);
  const { title, text } = req.body;
  if (title && text) {
    const addNote = {
      title,
      text,
      id: uuidv4(),
    };
    //posts input to JSON
    // const postNote = parse();
    //pushes to the array.
    // postNote.push(addNote);
    //writes note to db.json

    fs.readFile("./db/db.json", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(addNote);
        console.log(parsedData);

        fs.writeFile("./db/db.json", JSON.stringify(parsedData), (err) => {
          if (err) {
            console.log(err);
          } else {
            res.send("success!");
            console.log("Added a note! =)");
          }
        });
      }
    });

    //handles error response message to terminal to indicate a successful posted note.
    
  } else {
    res.status(500).json("Error in pse posting note! ='( ");
  }
});

router.delete("/", (req, res) => {
  // res.status(200).json(`${req.method} request received.`);
  console.log("Testing...");
  console.info(`${req.method} request received.`);
  fs.readFile("./db/db.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(JSON.parse(data));
    }
  });
});

module.exports = router;
