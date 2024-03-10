import { ProductsInCart } from "./ui/ProductsInCart";
import { OrderSummary } from "./ui/OrderSummary";
import Link from "next/link";

export default function CartPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <h2 >Carrito de Compras</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Cart */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Add Items</span>
           

          <ProductsInCart/>
            
          </div>
          {/* Order Summary */}
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2">Información de la orden</h2>
            <OrderSummary/>

            <div className="mt-5 mb-2 w-full">
              <Link 
                href={'/checkout/address'}
                className="flex bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded transition-all justify-center"
              >
                Checkout
              </Link>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
