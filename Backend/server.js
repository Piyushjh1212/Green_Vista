import express from "express";
import dotenv from "dotenv";
import connectdb from "./Config/Db.Config.js";
import bodyParser from "body-parser";
import cors from "cors";
import Contactrouter from "./Routes/Contactroutes.js";
// Load environment variables
dotenv.config();
const app = express();


// Environment variable
const PORT = process.env.PORT || 8056;
const Mongourl = process.env.Mongo_URL|| "mongodb://localhost:27017/mydatabase"

// MongoDb connection 
connectdb(Mongourl)


// Middleware
app.use(express.json());
app.use(cors());// Enable CORS for frontend communication
app.use(bodyParser.json()); // Parse JSON request body

// API
app.use("/api/v2/", Contactrouter)

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
