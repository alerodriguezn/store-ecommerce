export interface Order {
  id: number;
  products: {
    id: number;
    quantity: number;
    name: string;
    image: string;
  }[];
  total: number;
}
