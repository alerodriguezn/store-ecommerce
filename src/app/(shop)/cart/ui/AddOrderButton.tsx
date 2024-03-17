'use client'

import { useCartStore } from "@/store/cart/cart-store";
import { useOrderStore } from "@/store/cart/order-store";
import React from "react";
import { toast } from "react-toastify";

export const AddOrderButton = () => {
  const { subTotal, total, tax, itemsInCart } = useCartStore((state) =>
    state.getSummaryInformation()
  );
  const clearCart = useCartStore((state) => state.clearCart);
  const products = useCartStore((state) => state.cart);
  const addOrder = useOrderStore((state) => state.addOrder);

    const handleAddOrder = () => {
        const order = {
        id: Math.floor(Math.random() * 1000),
        products: products.map((product) => ({
            id: product.id,
            quantity: product.quantity,
            name: product.title,
            image: product.image,
        })),
        total,
        };
        addOrder(order);
        toast.success("Order Creada!");
        clearCart();
    };

  return (
    <button 
        className="bg-green-500 text-white px-4 py-2 rounded-lg w-full font-bold" 
        onClick={handleAddOrder}
    >
      Crear Orden
    </button>
  );
};
