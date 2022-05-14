import mongoose from "mongoose";

const tikSchema=mongoose.Schema({
    url: String,
    channel: String,
    song: String,
    likes:String,
    shares: String,
    messeges: String,
    description: String,
})

export default mongoose.model('tiktok',tikSchema)