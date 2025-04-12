import mongoose from "mongoose";

export async function connect() {
    try {

        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("MongoDB connected successfully");
        });

        connection.on("error", (err) => {
            console.error("MongoDB connection error. Please make sure MongoDB is running. " + err);
            process.exit(1);
        });

    } catch (error) {
        console.error("Something went wrong!");
        console.error(error);
    }
}