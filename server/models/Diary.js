const db = require("../db/connect")

class Diary{
    constructor(data){
        this.diary_id = data.diary_id
        this.diary_user = data.diary_user
        this.diary_date = data.diary_date,
        this.diary_description = data.diary_description
        this.diary_category = data.diary_category
    }

    static async create(data){
        const { diary_user, diary_date, diary_description, diary_category} = data;   
        //needed to add the values in query
        const response = await db.query('INSERT INTO diary (diary_user, diary_date, diary_description, diary_category) VALUES ($1, $2, $3, $4) RETURNING *;',[diary_user, diary_date, diary_description, diary_category]);
        const diary_id = response.rows[0].diary_id;
        const newDiary = await Diary.getById(diary_id);
        return newDiary;
    }

    static async getAll(){
 
        try{
            const response = await db.query("SELECT diary_id, diary_user, diary_date, diary_category FROM diary ORDER BY diary_date;")
            
            if(response.rows.length === 0){
                throw new Error("No Diary available")
            }
            return response.rows.map(g => new Diary(g));
        }catch(err){
            return ({"error": err.message})
        }
    }
   static async getById(id){
        try{
            const response = await db.query("SELECT * FROM diary WHERE diary_id = $1", [id])
            if (response.rows.length != 1) {
                throw new Error("Unable to locate diary.")
            }
            return new Diary(response.rows[0]);
        }catch(err){
            return ({"error": err.message})

        }
   }

   static async search(data){
    const response = await db.query("SELECT * FROM diary WHERE diary_category = $1 ORDER BY diary_date ;",[data]);
        if(response.rows.length == 0){
            throw new Error("Unable to locate diarys")
        }
        return response.rows.map(g => new Diary(g));
    }

    async update(data){
        const response = await db.query("UPDATE diary SET diary_description = $1 WHERE diary_id = $2 RETURNING *;",
        [ data.diary_description, this.diary_id]);
        console.log(response.rows)
    if (response.rows.length != 1) {
        throw new Error("Unable to update description.")
    }
    return new Diary(response.rows[0]);
    }
    
    async destroy(){
        
    }
}

module.exports = Diary