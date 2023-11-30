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
      },
    });

    const { products } = await res.json();
    const mapData = (products) => {
      return Object.keys(products).map((key) => {
        const data = products[key];
        return {
          id: data._id,
          title: data.title,
          slug: data.slug,
          description: data.desc,
          img: data.img,
          category: data.category,
          sizes: data.size,
          colors: data.color,
          price: data.price,
          availableQuantity: data.availableQty,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
        };
      });
    };
    const result = mapData(products);

    return result;
  } catch (e) {
    console.log(e);
  }
};
