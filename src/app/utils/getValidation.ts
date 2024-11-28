import * as z from 'zod';

export const shopSchema = z.object({
  name: z.string().min(2, "Shop name must be at least 2 characters"),
  description: z.string().optional(),
  logo: z.string().optional()
});

export const productSchema = z.object({
  name: z.string().min(2, "Product name must be at least 2 characters"),
  price: z.number().positive("Price must be positive"),
  stockLevel: z.number().min(0, "Stock level cannot be negative"),
  description: z.string().optional()
});