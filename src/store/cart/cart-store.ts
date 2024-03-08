import { create } from "zustand";
import { CartProduct } from "@/interfaces/cart";
import { persist } from "zustand/middleware";

interface State {
    cart: CartProduct[];
    addProductCart: (product: CartProduct) => void;
    getTotalItems: () => number;
    getSummaryInformation: () => {
      subTotal: number;
      total: number;
      tax: number;
      itemsInCart: number;
    };
    updateProductQuantity: (product: CartProduct, quantity: number) => void;
    removeProduct: (product: CartProduct) => void;
}


export const useCartStore = create<State>()(
    persist(
      (set, get) => ({
        cart: [],
  
        //Methods
  
        getSummaryInformation: () => {
          const { cart } = get();
          const subTotal = cart.reduce(
            (subtotal, item) => subtotal + item.quantity * item.price,
            0
          );
          const tax = subTotal * 0.15;
          const total = subTotal + tax;
          const itemsInCart = cart.reduce(
            (total, item) => total + item.quantity,
            0
          );
  
          return {
            subTotal,
            total,
            tax,
            itemsInCart,
          };
        },
  
        getTotalItems: () => {
          const { cart } = get();
          return cart.reduce((total, item) => total + item.quantity, 0);
        },
  
        addProductCart: (product: CartProduct) => {
          const { cart } = get();
  
          const productInCart = cart.some(
            (item) => item.id === product.id 
          );
  
          if (!productInCart) {
            set({ cart: [...cart, product] });
            return;
          }
  
          
        },

        updateProductQuantity: (product: CartProduct, quantity: number) => {
          const { cart } = get();
          const updatedCartProduct = cart.map((item) => {
            if (item.id === product.id) {
              return { ...item, quantity: quantity };
            }
            return item;
          });
  
          set({ cart: updatedCartProduct });
        },

        removeProduct: (product: CartProduct) => {
    
          const { cart } = get();
          const newCart = cart.filter((item) => {
            return item.id !== product.id;
          });
          set({ cart: newCart });
        },
        clearCart: () => {
          set({ cart: [] });
        },
        
      
      }),
      
      {
        name: "shopping-cart",
      }
    )
  );
  