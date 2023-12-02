import { config } from "dotenv";
import app from "./app.js";
import connectDb from "./config/db.js";


// config
config();

// Database Connection
connectDb();


app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
})