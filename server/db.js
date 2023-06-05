import mongoose from "mongoose"

const mongoDBConnection = async() => {

    mongoose.set("strictQuery", true);
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,  {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4 // Use IPv4, skip trying IPv6
          })
          console.log("Connected to mongodb successfully");
    } catch (error) {
        console.log(error);
        console.log(process.env.MONGO_URI)
    }
}

export default mongoDBConnection;