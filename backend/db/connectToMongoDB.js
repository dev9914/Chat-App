import mongoose from "mongoose";
const mongoUri = "mongodb+srv://dk461298:NuJFyeBPWGg2TBiV@cluster0.bfdskp2.mongodb.net/chat-app-db?retryWrites=true&w=majority&appName=Cluster0";


const connetToMongoDB = async ()=>{
    try{
        await mongoose.connect(mongoUri);
        console.log("Connected to MongoDB");
    } catch (error){
        console.log("Error connecting to MongoDB", error.message);
    }
};

export default connetToMongoDB