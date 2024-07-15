import { products } from "@mocks/products";

const productController = () => {
  const getAllProducts = () => {
    return products;
  };

  return { getAllProducts };
};

export default productController;
