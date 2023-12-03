import app from "./app.js";
import connectDb from "./config/db.js";


app.listen(process.env.PORT, async () => {
    await connectDb();              // Database Connection
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
})