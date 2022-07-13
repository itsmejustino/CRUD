const api = require("/Develop/routes");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.static("public"));


app.use("/api", api);

app.listen(PORT, () =>
  console.log("server listening on port:" + `http://localhost:${PORT}`)
);
