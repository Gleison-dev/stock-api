import { ProductEntity } from "../entities/product.entity.js";
import { ERRORS, SUCESS } from "../shared/product.shared.js";

class ProductService {
  async createProdutService(name, brand, quantity, price) {
    try {
      await ProductEntity.sync();
      const verifyProdutExist = await ProductEntity.findOne({
        where: {
          name,
          brand,
        },
      });
      if (verifyProdutExist) {
        return `${ERRORS.ALREADY_EXISTS}`;
      }
      const newProduct = await ProductEntity.create({
        name,
        brand,
        quantity,
        price,
      });
      return `${SUCESS.CREATED}`;
    } catch (error) {
      return error;
    }
  }

  async getAllProductsService() {
    try {
      const allProducts = await ProductEntity.findAll();
      return allProducts;
    } catch (error) {
      return error;
    }
  }

  async getProductByNameService(name) {
    try {
      const productByName = await ProductEntity.findOne({
        where: {
          name,
        },
      });
      if (!productByName) {
        return `${ERRORS.NOT_FOUND}`;
      }
      return productByName;
    } catch (error) {
      return error;
    }
  }

  async getAllProductsByBrandService(brand) {
    try {
      const productByBrand = await ProductEntity.findOne({
        where: {
          brand,
        },
      });
      if (!productByBrand) {
        return `${ERRORS.NOT_FOUND}`;
      }
      return productByBrand;
    } catch (error) {
      return error;
    }
  }

  async updateQuantityService(id, newQuantity) {
    try {
      const productId = await ProductEntity.findByPk(id);
      if (!productId) {
        return `${ERRORS.NOT_FOUND}`;
      }
      const udpateQuantity = await ProductEntity.update(
        { quantity: newQuantity },
        {
          where: {
            id,
          },
        }
      );
      return `${SUCESS.UPDATE}`;
    } catch (error) {
      return error;
    }
  }

  async updatePriceService(id, newPrice) {
    try {
      const productId = await ProductEntity.findByPk(id);
      if (!productId) {
        return `${ERRORS.NOT_FOUND}`;
      }
      const updatePrice = await ProductEntity.update(
        { price: newPrice },
        {
          where: {
            id,
          },
        }
      );
      return `${SUCESS.UPDATE}`;
    } catch (error) {
      return error;
    }
  }

  async deleteProductService(id) {
    try {
      const productId = await ProductEntity.findByPk(id);
      if (!productId) {
        return `${ERRORS.NOT_FOUND}`;
      }
      const deleteProduct = await ProductEntity.destroy({
        where: {
          id,
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export { ProductService };
