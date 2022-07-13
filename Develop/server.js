const express = require('express');
const router = require('router');
//user path if helper needed
// const path = require('path');
// const api = require('./db')
// const { Router } = require
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.post('./db.json', (req, input) => {
console.info(`${req.method} request received to add a note`);
const {title, text} = req.body;
 if (title && text) {
   const addNote = {
     title,
     text,
    //  note_id,
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

app.listen(PORT , () =>console.log('server listening on port:'+`http://localhost:${PORT}`) );