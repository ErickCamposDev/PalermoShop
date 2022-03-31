import axios from 'axios';

const productsAPI = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

const getProducts = async (category: string) => {
  try {
    const products = await productsAPI.get(
      `/products${category && `/category/${category}`}?limit=10`,
    );
    return products;
  } catch (e) {
    console.log('getProductsError:', e);
    return;
  }
};

const getCategories = async () => {
  try {
    const categories = await productsAPI.get('/products/categories');
    return categories;
  } catch (e) {
    console.log('getCategoriesError:', e);
    return;
  }
};

export {getProducts, getCategories};
