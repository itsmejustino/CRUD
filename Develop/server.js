const express = require('express');
const { rmSync, fstat } = require('fs');
//user path if helper needed
// const path = require('path');
const db = require('../db.json')
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('../db', (req, res) => {
res.status(200).json(`${req.method} request received.`);
console.log('Testing...')
console.log('Testing..')
console.log('Testing.')
console.info(`${req.method} request received.`)
});

app.post('../db', (req, input) => {
console.info(`${req.method} request received to add a note`);
const {title, text} = req.body;
 if (title && text) {
   const addNote = {
     title,
     text,
     note_id,
   };
   const postNote = JSON.parse(input);
   postNote.push(addNote);

   fs.writeFile("./db/db.json", JSON.stringify(postNote), (err) =>
     err ? console.log(err) : console.log("Added a note! =)")
   );
 
//handles error response message to terminal tom indicate a successful posted note.
const responseStatus = {
    status:'Its a go!',
    body: addNote,
};
console.log(responseStatus); 
res.status(201).json(response);
 }else{
    res.status(500).json("Error in posting note! ='( ");
 }

    });

app.listen(PORT , () =>console.log('server listening on port:'+`${PORT}`) );