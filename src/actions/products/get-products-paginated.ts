"use server";

import { ProductsResponse } from "@/interfaces/products";

interface PaginationOptions {
  categoryId?: number;
  page?: number;
  take?: number;
}

export const getPaginatedProducts = async ({ page = 0, take = 10, categoryId}: PaginationOptions) => {

  if (isNaN(Number(page))) page = 0;
  if (page < 0) page = 0;

  const category = categoryId ? `&categoryId=${categoryId}` : "";


  try {
    const data: ProductsResponse = await fetch(
      `https://fake-store-api-409620.rj.r.appspot.com/api/products/all?page=${page}&size=${take}${category}`
    ).then((res) => res.json());

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
