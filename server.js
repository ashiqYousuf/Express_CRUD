import app from "./app.js";
import mongoose from 'mongoose';

const PORT = process.env.PORT || 3000;

const DB = process.env.DATABASE || 'mongodb://localhost:27017/schooldb';
mongoose.connect(DB)
.then(() => console.log("Database Connected 👋"))
.catch((err) => console.log(err));


app.listen(PORT , '127.0.0.1' , () => {
    console.log("Server Listening at http:127.0.0.1:3000");
});
