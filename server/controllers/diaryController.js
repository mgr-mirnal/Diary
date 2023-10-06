const Diary = require('../models/Diary')


async function create(req,res){
    try{
        const data = req.body
        const diary = await Diary.create(data);
        res.json(diary);
    }catch(err){
        res.status(404).json({"error": err.message})
    }
}

async function index(req, res){
    console.log("ok")
    try{
        const diaries = await Diary.getAll()
        res.status(200).send(diaries)
    }catch(err){
        res.status(500).send({"error":err.mesage})
    }
}
async function show (req, res) {
    try {
        const id = parseInt(req.params.id);
        const diary = await Diary.getById(id);
        res.status(200).send(diary);
    } catch (err) {
        res.status(404).send({"error": err.message})
    }
}
async function search(req,res){
    try {
        const search = req.body.diary_category;
        console.log(search)
        const diary = await Diary.search(search);
        res.status(200).send(diary);
    } catch (err) {
        res.status(404).send({"error": err.message})
    }
}
async function update (req, res) {
    try {
        const id = parseInt(req.params.id);
        const data = req.body;
        const diary = await Diary.getById(id)
        const result = await diary.update(data);
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

module.exports = {index, show, create, search,update}