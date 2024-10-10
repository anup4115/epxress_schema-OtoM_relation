import singerModel from "../models/singerModel.js";
import songModel from "../models/songModel.js";

class musicController{
    static create_singer=async()=>{
        try{
            const singer= new singerModel({
                name:"Anup",
                genre:"POP",
            })
            await singer.save()
        }catch(error){
            console.log(error)
        }
    }
    static create_song=async()=>{
        try{
            const singer=await singerModel.findOne({name:'Anup'})
            if(singer){
                const song1=await new songModel({
                    title:"This is a song",
                    duration:4,
                    singer:singer._id
                })
                await song1.save()
                const song2=await new songModel({
                    title:"This is 2nd song",
                    duration:3,
                    singer:singer._id
                })
                await song2.save()
            }else{
                console.log("Singer not found")
            }
            
        }catch(error){
            console.log(error)
        }
    }
}
export default musicController