import { ProductsInCart } from "./ui/ProductsInCart";

export default function CartPage() {
  return (
    <div className="w-1/2">
      <h2 className="text-left text-2xl font-bold mb-4">Carrito de Compras</h2>

        <ProductsInCart/>


    </div>
  );
}