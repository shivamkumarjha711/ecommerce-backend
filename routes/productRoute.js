
import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from "../controllers/productContoller.js";

const router = Router();

router.route("/").get(getAllProducts);
router.route("/create-product").post(createProduct);
router.route("/update-product/:id").put(updateProduct);
router.route("/:id").delete(deleteProduct).get(getSingleProduct);


export default router;