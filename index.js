const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.static("public"));

// sendFile will go here
app.get("/topper.js", function (req, res) {
  res.sendFile(path.join(__dirname, "public/bundle.js"));
});

// start the server listening for requests
app.listen(PORT, () => console.log(`Serving Topper in port => ${PORT}`));
