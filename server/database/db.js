import mongoose from 'mongoose';

const connectDB = async () => {
     try {
          await mongoose.connect(process.env.MONGODB_URL);
          console.log("Database connected successfully");
          
     } catch (error) {
          console.log("Error connecting", error);
          
     
     }
}

export default connectDB