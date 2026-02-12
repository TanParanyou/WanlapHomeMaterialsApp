export interface Product {
  id: string;
  code: string;
  name: string;
  category: string;
  location: string;
  pricePerUnit: number;
  pricePerSqm: number | null;
  stock: string;
  brand: string;
  color: string;
  size: string;
  weight: string;
  unit: string;
  collection: string;
  imageUrl: string;
  url: string;
}
