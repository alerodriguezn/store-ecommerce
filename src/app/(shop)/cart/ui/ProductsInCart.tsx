"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cart/cart-store";
import { QuantitySelector } from "@/components/ui/QuantitySelector";

export const ProductsInCart = () => {
  const productsInCart = useCartStore((state) => state.cart);
  const updateProductQuantity = useCartStore(
    (state) => state.updateProductQuantity
  );
  const removeProductFromCart = useCartStore((state) => state.removeProduct);

  return (
    <>
      {productsInCart.map((product) => (
        <div key={product.id} className="flex mb-5 mt-2">
          <Image
            src={product.image}
            alt={product.title}
            style={{
              width: "100px",
              height: "100px",
            }}
            width={100}
            height={100}
            className="mr-5 rounded"
          />
          <div>
            <Link
              className="hover:underline cursor-pointer"
              href={`/product/${product.id}`}
            >
              {product.title}
            </Link>
            <p>${product.price}</p>
            <QuantitySelector
              quantity={product.quantity}
              onQuantityChange={(quantity) =>
                updateProductQuantity(product, quantity)
              }
            />
            <button
              className="underline mt-3"
              onClick={() => removeProductFromCart(product)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
