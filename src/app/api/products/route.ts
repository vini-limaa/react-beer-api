import type { NextApiRequest, NextApiResponse } from "next";

import productController from "@/controllers/productController";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  const { getAllProducts } = productController();
  const products = getAllProducts();
  return Response.json(products);
};
