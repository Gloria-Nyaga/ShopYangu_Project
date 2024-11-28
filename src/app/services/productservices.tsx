const API_URL = 'http://localhost:3000/api/products';

export const productService = {
  fetchProducts: async () => {
    const response = await fetch(API_URL);
    return await response.json();
  },

  createProduct: async (product: any) => {
    await fetch(API_URL, { method: 'POST', body: JSON.stringify(product), headers: { 'Content-Type': 'application/json' } });
  },

  updateProduct: async (product: { id: any; }) => {
    await fetch(`${API_URL}/${product.id}`, { method: 'PUT', body: JSON.stringify(product), headers: { 'Content-Type': 'application/json' } });
  },

  deleteProduct: async (id: any) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  }
};