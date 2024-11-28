
export interface Shop {
    id: number;
    name: string;
    description?: string;
    logo?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  export interface Product {
    id: number;
    shopId: number;
    name: string;
    price: number;
    stockLevel: number;
    description?: string;
    image?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  export const formatCurrency = (amount: number) => {
    return `$${amount.toFixed(2)}`;
  };
  
  export const formatStockStatus = (stock: number) => {
    return stock > 0 ? 'In Stock' : 'Out of Stock';
  };

  export interface DashboardMetrics {
    totalShops: number;
    totalProducts: number;
    totalProductValue: number;
    totalStockLevel: number;
    stockStatusDistribution: StockStatusDistribution;
  }
  
  export interface StockStatusDistribution {
    inStock: number;
    lowStock: number;
    outOfStock: number;
  }
  

  export interface ShopFormData {
    name: string;
    description?: string;
    logo?: string;
  }
  
  export interface ProductFormData {
    name: string;
    price: number;
    stockLevel: number;
    description?: string;
    shopId: number;
    image?: string;
  }
  
  export interface ApiResponse<T> {
    data: T;
    message?: string;
  }
  

  export interface ProductFilter {
    shopId?: number;
    minPrice?: number;
    maxPrice?: number;
    minStock?: number;
    maxStock?: number;
    searchQuery?: string;
  }
  
  export interface PaginationParams {
    page: number;
    pageSize: number;
  }
  

  export enum StockStatus {
    IN_STOCK = 'IN_STOCK',
    LOW_STOCK = 'LOW_STOCK',
    OUT_OF_STOCK = 'OUT_OF_STOCK'
  }
  
  export type PartialUpdate<T> = Partial<T>;
  

  export interface ErrorResponse {
    status: number;
    message: string;
    errors?: Record<string, string>;
  }
  
  export interface User {
    id: number;
    username: string;
    email: string;
    role: 'ADMIN' | 'MANAGER' | 'VIEWER';
  }
  
  export function isShop(obj: any): obj is Shop {
    return obj && typeof obj.id === 'number' && typeof obj.name === 'string';
  }
  
  export function isProduct(obj: any): obj is Product {
    return obj && 
      typeof obj.id === 'number' && 
      typeof obj.shopId === 'number' && 
      typeof obj.name === 'string' && 
      typeof obj.price === 'number';
  }