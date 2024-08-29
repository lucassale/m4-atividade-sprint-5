import { Router } from "express";
import { ProductsControllers } from "../controllers/products.controllers";
import { IsProductNameUnique } from "../middlewares/isProductNameUnique.middleware";
import { ValidateCreateProduct } from "../middlewares/validateCreateProductBody";

export const productsRoutes = Router();

const productsControllers = new ProductsControllers();

productsRoutes.post("/", ValidateCreateProduct.execute, IsProductNameUnique.execute, productsControllers.createProduct);
