import { ProductService } from "../services/Product.service.js";

const instanceProductService = new ProductService();

const createProduct = async (req, res) => {
  const { name, brand, quantity, price } = req.body;
  const newProduct = await instanceProductService(name, brand, quantity, price);
  res.status(201).json({ newProduct });
};

const getAllProducts = async (req, res) => {
  const products = await instanceProductService.getAllProductsService();
  res.json({ products });
};

const getProductByName = async (req, res) => {
  const { name } = req.body;
  const product = await instanceProductService.getProductByNameService(name);
  res.json({ product });
};

const getProductByBrand = async (req, res) => {
  const { brand } = req.body;
  const product = await instanceProductService.getAllProductsByBrandService(
    brand
  );
  res.json({ product });
};

const updateQuantity = async (req, res) => {
  const { id } = req.params;
  const { newQuantity } = req.body;
  const product = await instanceProductService.updateQuantityService(
    id,
    newQuantity
  );
  res.json({ product });
};

const updatePrice = async (req, res) => {
  const { id } = req.params;
  const { newPrice } = req.body;
  const product = await instanceProductService.updatePriceService(id, newPrice);
  res.json({ product });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const productDelete = await instanceProductService.deleteProductService(id);
  res.json({ productDelete });
};

export {
  createProduct,
  getAllProducts,
  getProductByBrand,
  getProductByName,
  updatePrice,
  updateQuantity,
  deleteProduct,
};
