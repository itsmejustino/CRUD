const { urlencoded } = require("express");
const express = require("express");
const api = require("./routes");

//set port number and import express to the app.
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", api);

app.listen(process.env.PORT || PORT, () => {
  console.log("server listening on port:" + `http://localhost:${PORT}`)
});
