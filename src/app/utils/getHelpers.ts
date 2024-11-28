export const calculateMetrics = (shops: string | any[], products: { length: any; reduce: (arg0: { (sum: any, product: any): any; (sum: any, product: any): any; }, arg1: number) => any; filter: (arg0: { (p: any): boolean; (p: any): boolean; (p: any): boolean; }) => { (): any; new(): any; length: any; }; }) => {
    return {
      totalShops: shops.length,
      totalProducts: products.length,
      totalProductValue: products.reduce((sum, product) => 
        sum + (product.price * product.stockLevel), 0),
      totalStockLevel: products.reduce((sum, product) => 
        sum + product.stockLevel, 0),
      stockStatusDistribution: {
        inStock: products.filter(p => p.stockLevel > 5).length,
        lowStock: products.filter(p => p.stockLevel > 0 && p.stockLevel <= 5).length,
        outOfStock: products.filter(p => p.stockLevel === 0).length
      }
    };
  };