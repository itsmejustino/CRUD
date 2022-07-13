const fs = require("fs");
const { Router } = require("express");
//user path if helper needed
const router = Router();

//gets route to /db json and then reads the data from the file
router.get("/db", (req, res) => {
  res.status(200).json(`${req.method} request received.`);
  console.log("Testing...");
  console.log("Testing..");
  console.log("Testing.");
  console.info(`${req.method} request received.`);
  readFromFile("./db/db.json").then((data) => res.json(data));
});
//gets db path to post input to db.json.
router.post("/db", (req, input) => {
  console.info(`${req.method} request received to add a note`);
  const { title, text } = req.body;
  if (title && text) {
    const addNote = {
      title,
      text,
      noteid: uuivdv4(),
    };
    //posts input to JSON
    const postNote = JSON.parse(input);
    //pushes to the array.
    postNote.push(addNote);
    fs.writeFile("/db/notes.json", JSON.stringify(postNote), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Added a note! =)");
      }
    });

    //handles error response message to terminal tom indicate a successful posted note.
    const responseStatus = {
      status: "Its a go!",
      body: addNote,
    };
    console.log(responseStatus);
    res.status(201).json(response);
  } else{
    res.status(500).json("Error in pse posting note! ='( ");
  }
    
  
});
module.exports = router;
