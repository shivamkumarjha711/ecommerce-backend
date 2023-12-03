
import { Router } from "express";
import { createProduct, getAllProducts, updateProduct } from "../controllers/productContoller.js";

const router = Router();

router.route("/").get(getAllProducts);
router.route("/create-product").post(createProduct);
router.route("/update-product/:id").put(updateProduct);


export default router;