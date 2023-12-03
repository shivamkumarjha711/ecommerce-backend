import express from "express";
import productRoutes from "./routes/productRoute.js"

const app = express();

app.use(express.json());


// Routes
app.use("/api/v1/products", productRoutes)

export default app;