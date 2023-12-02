
import { Router } from "express";
import { getAllProducts } from "../controllers/productContoller.js";

const router = Router();

router.route("/products").get(getAllProducts);


export default router;