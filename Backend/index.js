import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'
import cors from 'cors';
const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000
const URI = process.env.MongoDBURI

app.use(cors());
app.use(express.json());

//MongoDB connection
try{
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("Connected to mongoDB");
}catch(error){
    console("Error :", error);
}

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, ()=>{
    console.log(`App is listening on ${PORT}`);
})