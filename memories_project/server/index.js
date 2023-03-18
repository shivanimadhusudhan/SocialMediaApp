import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";
import userRoutes from './routes/users.js'
dotenv.config();

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);
app.use('/user', userRoutes);
// const CONNECTION_URL = 'mongodb://shivanimadhusudhan:03j9yi8XjXWSxEUr@ac-njzivez-shard-00-00.1vxu4h5.mongodb.net:27017,ac-njzivez-shard-00-01.1vxu4h5.mongodb.net:27017,ac-njzivez-shard-00-02.1vxu4h5.mongodb.net:27017/?ssl=true&replicaSet=atlas-1opomy-shard-0&authSource=admin&retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
