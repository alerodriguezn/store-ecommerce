"use server";

import { ProductsResponse } from "@/interfaces/products";

interface PaginationOptions {
  page?: number;
  take?: number;
}

export const getProductsByPriceRange = async (
  priceMin: number,
  priceMax: number,
  { page = 0, take = 10 }: PaginationOptions
) => {
  if (isNaN(Number(page))) page = 0;
  if (page < 0) page = 0;

  try {
    const data: ProductsResponse = await fetch(
      `https://fake-store-api-409620.rj.r.appspot.com/api/products/all?page=${page}&size=${take}&priceMin=${priceMin}&priceMax=${priceMax}`
    ).then((res) => res.json());

    if (!data) {
      return {
        ok: false,
        message: "We cannot get the products",
      };
    }

    return {
      currentPage: page,
      totalPages: data.totalPages,
      products: data.content,
      totalElements: data.totalElements,
    };
  } catch (error) {
    throw new Error("We can't get the products ");
  }
};
