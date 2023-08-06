const mongoose= require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:[true,"price must be provided"],
    },
    featured:{
        type:Boolean,
        default:true,
    },
    rating:{
        type:Number,
        default:false,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values:["apple","samsung","dell","mi"],
            message:`{VALUE} is not supported`,
        },
    },

});

module.exports=mongoose.model('Product',productSchema);