// import { useEffect, useState } from 'react';
// import ProductForm from '../components/(products)/Productform';
// import ProductTable from '../components/(products)/Productlist';
// import { productService } from '../services/productservices';

// const ProductIndex = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const loadProducts = async () => {
//       const data = await productService.fetchProducts();
//       setProducts(data);
//     };

//     loadProducts();
//   }, []);

//   const handleProductSubmit = async (product: { id: any; }) => {
//     if (product.id) {
//       await productService.updateProduct(product);
//     } else {
//       await productService.createProduct(product);
//     }
//     const data = await productService.fetchProducts();
//     setProducts(data);
//   };

//   return (
//     <>
//       <h1>Products</h1>
//       <ProductForm onSubmit={handleProductSubmit} />
//       <ProductTable products={products} />
//     </>
//   );
// };

// export default ProductIndex;