"use server";

import { Product } from "@/interfaces/products-v2";

export const getProductById = async (id: number) => {
  try {
    const product: Product = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json());

    if (!product) {
      return {
        ok: false,
        message: "We cannot get the product",
      };
    }

    return {
        ok: true,
        product
    }

  } catch (error) {
    return {
      ok: false,
      message: "We cannot get the product",
    };
  }
};