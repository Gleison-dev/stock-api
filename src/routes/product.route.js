import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProductByBrand,
  getProductByName,
  updatePrice,
  updateQuantity,
  deleteProduct,
} from "../controllers/product.controller.js";

const productRoute = Router();

productRoute.post("/newProduct", createProduct);
productRoute.get("/products", getAllProducts);
productRoute.get("/productByBrand", getProductByBrand);
productRoute.get("/productByName", getProductByName);
productRoute.patch("/updatePrice/:id", updatePrice);
productRoute.patch("/updateQuantity/:id", updateQuantity);
productRoute.delete("/deleteProduct/:id", deleteProduct);

export { productRoute };
