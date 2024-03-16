"use server";

import { Product } from "@/interfaces/products";

export const getProductById = async (id: number) => {
  try {
    const product: Product = await fetch(`https://fake-store-api-2no73ornoa-uc.a.run.app/api/products/${id}`).then((res) => res.json());

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