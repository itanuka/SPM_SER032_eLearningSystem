const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        require: true
    },
    author:{
        type:String,
        require:true
    },
    publishDate:{
        type:Date,
        require:true
    },
    publisher:{
        type:String,
        require:true
    },
    pages:{
        type:Number,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;