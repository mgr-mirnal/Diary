
const api = require("./api");
require("dotenv").config();

Port = process.env.PORT

api.listen(Port, () => {
    console.log(`API listening on ${Port}`);
})