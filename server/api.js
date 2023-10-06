require("dotenv").config();

const express = require('express');
const cors = require('cors');
const dailyRouter = require('./routers/dairyRouter');

//const snackRouter = require('./routers/snack');

const api = express();

api.use(cors());
api.use(express.json());


api.get("/", (req, res) => {
    res.json({
        title: " Personal Diary app",
        description: "Write your daily events in this Diary app"
    })
})
api.use("/diaries", dailyRouter)

module.exports = api