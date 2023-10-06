//importing pre-made modules
const fs = require('fs');
//imported dotenv
require("dotenv").config();

//importing my modeules
const db = require("./connect")

const sql = fs.readFileSync(__dirname + '/setup.sql').toString();

db.query(sql)
    .then(data => console.log("Set-up complete."))
    .catch(error => console.log(error));