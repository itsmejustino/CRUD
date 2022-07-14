const { urlencoded } = require("express");
const express = require("express");
const api = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", api);

app.listen(PORT, () => {
  console.log("server listening on port:" + `http://localhost:${PORT}`)
});
