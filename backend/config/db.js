import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mayank26202:66778899@cluster0.dh9ca.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}