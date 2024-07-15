import productController from "@/controllers/productController";

export const GET = async (
  request: Request,
  { params }: { params: { sku: string } }
) => {
  const sku = params.sku;

  const { getAllProducts } = productController();
  const products = getAllProducts();

  const currentProduct = products.filter((product) => product.sku === sku);
  return Response.json(currentProduct[0].variations.items);
};
