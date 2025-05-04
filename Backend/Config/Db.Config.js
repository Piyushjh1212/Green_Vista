import mongoose from "mongoose";

const connectdb = async (Mongo_URL) => {
    try {
        await mongoose.connect(Mongo_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`✅ MongoDB is connected: ${mongoose.connection.host}`);
    } catch (error) {
        console.error(` MongoDB Connection Error: ${error.message} (${error.name})`);
        process.exit(1); // Exit the process if connection fails
    }
};

export default connectdb;
