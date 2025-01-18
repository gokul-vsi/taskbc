const mongoose = require('mongoose')

const mongodb = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:String,
        require:true
    },
})

const fileExport = mongoose.model("dbcheckvalues",mongodb);

module.exports = fileExport;