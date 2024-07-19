import mongoose from "mongoose";

let isConnected: boolean = false;
export const connectToDB = async (): Promise<void> => {
    mongoose.set("strictQuery", true)

    if (isConnected) {
        console.log("Connected to MongoDB!");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL || "", {
            dbName: "stacy_admin"
        })
        isConnected = true;
        console.log("MongoDB Connection is Successful!")
    } catch (err) {
        console.log(err)
    }
}