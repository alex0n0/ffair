const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./client/build")));

require("./controllers/api-routes")(app);
require("./controllers/html-routes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
    console.log("server started on port", PORT);
});