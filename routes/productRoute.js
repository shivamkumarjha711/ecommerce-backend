
import { Router } from "express";
import { createProduct, getAllProducts } from "../controllers/productContoller.js";

const router = Router();

router.route("/").get(getAllProducts);
router.route("/create-product").post(createProduct);


export default router;