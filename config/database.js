const mongoose = require('mongoose');
require("dotenv").config();

const connectionWithDb = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> {
        console.log("DB connected Successfully")
    })
    .catch((error)=>{
        console.log("DB Facing Connection issue");
        console.error(error)
        process.exit(1);
    })
}

module.exports = connectionWithDb