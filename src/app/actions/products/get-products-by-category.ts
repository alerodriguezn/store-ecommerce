"use server";

import { RootObject } from "@/interfaces/products";

export const getProductsByCategory = async (category: string) => {
  try {
    const data: RootObject = await fetch(
      `https://dummyjson.com/products/category/${category}`
    ).then((res) => res.json());

    if (!data) {
      return {
        ok: false,
        message: "We cannot get the products",
      };
    }

    return {
        ok: true,
        products: data.products
    }

  } catch (error) {
    return {
      ok: false,
      message: "We cannot get the products",
    };
  }
};
