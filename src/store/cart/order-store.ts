import { create } from "zustand";
import { CartProduct } from "@/interfaces/cart";
import { Order } from "@/interfaces/order";
import { persist } from "zustand/middleware";

interface State {
    orders: Order[];
    addOrder: (order: Order) => void;
    
 
}


export const useOrderStore = create<State>()(
    persist(
      (set, get) => ({
        orders: [],
  

        addOrder: (order: Order) => {
          const { orders } = get();
          set({ orders: [...orders, order] });
        },
        
      
      }),
      
      {
        name: "orders-store",
      }
    )
  );
  