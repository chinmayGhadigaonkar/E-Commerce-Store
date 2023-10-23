import { VITE_BACKEND_URL } from "../config";

export function filterProducts(product, category) {
  const newProduct = product.filter((product) => {
    return product.category === category;
  });

  return newProduct;
}

export const CategoryProduct = async (category) => {
  try {
    const res = await fetch(`${VITE_BACKEND_URL}/filter/products/${category}`, {
      headers: {
        "content-type": "application/json",
      },});

      const {products}=await res.json();
        
      return products

  } catch (e){
    console.log(e);
  }
};
