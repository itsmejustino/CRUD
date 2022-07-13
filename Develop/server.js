const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const api = require("./routes/noteRoute");
app.use("/api", api);

app.listen(PORT, () =>
  console.log("server listening on port:" + `http://localhost:${PORT}`)
);
