const mongoose= require("mongoose");

//uri= "mongodb+srv://abhushanbe20:is56Ph9I3B0HcIIL@cluster0.68uh2ba.mongodb.net/productapi?retryWrites=true&w=majority";

const connectDB=(uri) =>{
    //console.log("hey baby");
    return mongoose.connect(uri,{
        
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
};

module.exports= connectDB;