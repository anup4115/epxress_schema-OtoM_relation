import mongoose from "mongoose";

const songSchema=new mongoose({
    title:{type:String,required:true},
    duration:{type:Number,required:true},
    singer:{type:mongoose.Schema.Types.ObjectId,ref:'Singer',required:true} 
})
const songModel=mongoose.model('Song',songSchema)
export default songModel