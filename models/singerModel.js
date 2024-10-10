import mongoose from "mongoose";

const singerSchema=new mongoose.Schema({
    name:{type:String,required:true},
    genre:{type:String},
    songs:[{type:mongoose.Schema.Types.ObjectId,ref:'Song'}]
})
const singerModel=mongoose.model('Singer',singerSchema)

export default singerModel