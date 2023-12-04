import express from "express";
import productRoutes from "./routes/productRoute.js";
import { config } from "dotenv";
import errorMiddleware from "./middleware/error.js";

// config
config();


const app = express();

app.use(express.json());


// Routes
app.use("/api/v1/products", productRoutes)

// Middleware
app.use(errorMiddleware)  // first make error utility class -> secondly make error middleware -> thirdly use this error middleware in app.js

export default app;