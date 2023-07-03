var mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
        title:{
            type:String,
            required:true
        },
        body:{
            type:String,
            required:true
        },   
});

// Compile model from schema
var blogModel = mongoose.model('blog', blogSchema );

module.exports = blogModel