export interface Product {
  id?: number;
  name: string;
  price: number;
  photo?: string;
}

export function createProduct(overrides?: Partial<Product>): Product {
  return {
    name: '',
    price: 0,
    ...overrides,
  }
}