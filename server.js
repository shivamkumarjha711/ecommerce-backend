import app from "./app.js";
import connectDb from "./config/db.js";


// Handling Uncaught Expectation
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to Uncaught Expectation");
    process.exit(1);
})


app.listen(process.env.PORT, async () => {
    await connectDb();              // Database Connection
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
})


// Unhandled Promise Rejection