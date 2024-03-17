"use client";

import Image from "next/image";
import { useOrderStore } from "@/store/cart/order-store";
import { currencyFormat } from "../../../utils/currencyFormat";
import { IoBagCheckSharp,  } from "react-icons/io5";
import Link from "next/link";

export default function OrdersPage() {
  const orders = useOrderStore((state) => state.orders);

  if (orders.length === 0) {
    return (
      <div className="flex justify-center items-center h-[600px]">
        <IoBagCheckSharp size={80} className="mx-5" />
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-semibold">No tienes ordenes</h1>
          <Link href={"/"} className="text-blue-500 text-4xl mt-2">
            Volver
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-1/2">
      <h1 className="text-2xl font-bold">Orders</h1>

      {orders.map((order) => (
        <div key={order.id} className="mt-4 bg-white rounded-lg p-4">
          <h2 className="text-xl font-bold">Orden #{order.id}</h2>
          <div className="flex flex-col justify-between  rounded py-4 ">
            <div className="grid grid-cols-2 gap-4">
              {order.products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-2 w-full"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <span className="font-bold">{product.name}</span>
                </div>
              ))}
            </div>

            <span className="font-bold mt-4">
              Total:{" "}
              <span className="text-blue-600">
                {currencyFormat(order.total)}
              </span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
