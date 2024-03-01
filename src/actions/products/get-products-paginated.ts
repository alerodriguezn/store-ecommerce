"use server";

import { ProductsResponse } from "@/interfaces/products";


interface PaginationOptions {
  categoryId?: number;
  page?: number;
  take?: number;
  priceMin?: number | null;
  priceMax?: number | null ;

}

export const getPaginatedProducts = async ({ page = 0, take = 10, categoryId, priceMax, priceMin}: PaginationOptions, ) => {

  if (isNaN(Number(page))) page = 0;
  if (page < 0) page = 0;

  const category = categoryId ? `&categoryId=${categoryId}` : "";
  const priceMaxQuery = priceMax ? `&priceMax=${priceMax}` : "";
  const priceMinQuery = priceMin ? `&priceMin=${priceMin}` : "";


  try {
    const data: ProductsResponse = await fetch(
      `https://fake-store-api-409620.rj.r.appspot.com/api/products/all?page=${page}&size=${take}${category}${priceMaxQuery}${priceMinQuery}`
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
