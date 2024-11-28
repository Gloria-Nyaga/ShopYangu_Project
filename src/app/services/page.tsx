// import axios from 'axios';

// const API_URL = 'http://localhost:3001';

// export const shopService = {
//   // Create Shop
//   createShop: async (shopData: any) => {
//     return axios.post(`${API_URL}/shops`, shopData);
//   },
  
//   // Get All Shops
//   getAllShops: async () => {
//     return axios.get(`${API_URL}/shops`);
//   },
  
//   // Update Shop
//   updateShop: async (id, shopData) => {
//     return axios.put(`${API_URL}/shops/${id}`, shopData);
//   },
  
//   // Delete Shop (with validation)
//   deleteShop: async (id) => {
//     // Check for associated products first
//     const productsResponse = await axios.get(`${API_URL}/products?shopId=${id}`);
//     if (productsResponse.data.length > 0) {
//       throw new Error('Cannot delete shop with active products');
//     }
//     return axios.delete(`${API_URL}/shops/${id}`);
//   }
// };

const API_URL = 'http://localhost:3000/api/shops';

export const shopService = {
  fetchShops: async () => {
    const response = await fetch(API_URL);
    return await response.json();
  },
  
  createShop: async (shop: any) => {
    await fetch(API_URL, { method: 'POST', body: JSON.stringify(shop), headers: { 'Content-Type': 'application/json' } });
  },
  
  updateShop: async (shop: { id: any; }) => {
    await fetch(`${API_URL}/${shop.id}`, { method: 'PUT', body: JSON.stringify(shop), headers: { 'Content-Type': 'application/json' } });
  },
  
  deleteShop: async (id: any) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  }
};