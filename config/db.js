import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const {connection} = mongoose.connect(
            process.env.MONGO_URI        
            );

        if (connection) {
            console.log(`Connected to MongoDB: ${connection.host}`);   
        }
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

export default connectDb;