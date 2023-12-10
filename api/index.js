const express = require("express");
const app = express();
var router = require("./routes/routes");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/", router);


app.listen(6969, (error) => {
    console.log("API rodando!");
});