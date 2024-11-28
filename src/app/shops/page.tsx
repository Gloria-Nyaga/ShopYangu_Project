// import { useEffect, useState } from 'react';
// import ShopForm from '../components/(shops)/Shopform';
// import { shopService } from '../services/page';

// const ShopIndex = () => {
//   const [shops, setShops] = useState([]);

//   useEffect(() => {
//     const loadShops = async () => {
//       const data = await shopService.fetchShops();
//       setShops(data);
//     };
    
//     loadShops();
//   }, []);

//   const handleShopSubmit = async (shop: { id: any; }) => {
//     if (shop.id) {
//       await shopService.updateShop(shop);
//     } else {
//       await shopService.createShop(shop);
//     }
//     // Reload shops
//     const data = await shopService.fetchShops();
//     setShops(data);
//   };

//   return (
//     <>
//       <h1>Shops</h1>
//       <ShopForm onSubmit={handleShopSubmit} />
//       <ul>
//         {shops.map(shop => <li key={shop.id}>{shop.name}</li>)}
//       </ul>
//     </>
//   );
// };

// export default ShopIndex;