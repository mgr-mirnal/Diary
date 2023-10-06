const { Router } = require("express")

const diaryController = require("../controllers/diaryController")

const dailyRouter = Router();

dailyRouter.post("/",diaryController.create)
dailyRouter.get("/", diaryController.index);
dailyRouter.post("/:search",diaryController.search)
dailyRouter.get("/:id",diaryController.show)
dailyRouter.patch("/:id",diaryController.update)

module.exports = dailyRouter;