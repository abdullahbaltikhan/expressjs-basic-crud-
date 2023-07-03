var mongoose = require('mongoose');


const mongooseCon = async (DB_URL) =>{
    try {
    const dbCon = await  mongoose.connect(DB_URL);
        console.log('db Connected');
    } catch (error) {
        console.log(error);
    }
}

module.exports =  mongooseCon 