"use client";
import { useState } from "react";
import { QuantitySelector } from "@/components/ui/QuantitySelector";
import { Product } from "@/interfaces/products";
import { CartProduct } from "@/interfaces/cart";
import { useCartStore } from "@/store/cart/cart-store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {
  const addProductToCart = useCartStore((state) => state.addProductCart);

  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState<boolean>(false);

  const addToCart = () => {
    setPosted(true);

    const cartProduct: CartProduct = {
      id: product.id,
      quantity: quantity,
      title: product.name,
      price: product.price,
      image: product.imageUrl,
    };

    addProductToCart(cartProduct);

    toast.success("Producto Agregado al Carrito!", {
      position: "bottom-right",
    });
    
    setPosted(false);
    setQuantity(1);
  };

  return (
    <>
      <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />

      <button
        className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded transition-all my-5"
        onClick={addToCart}
      >
        Add to cart
      </button>
    </>
  );
};
