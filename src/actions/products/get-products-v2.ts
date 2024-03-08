"use server";

import { Product } from "@/interfaces/products-v2";


interface PaginationOptions {
  category?: string | null;
  page?: number;
  take?: number;
  name?: string | null;
  priceMin?: number | null;
  priceMax?: number | null ;

}

export const getProducts = async ({  category, priceMax, priceMin, name}: PaginationOptions, ) => {




  try {
    let data: Product[] = await fetch(
      `https://fakestoreapi.com/products`
    ).then((res) => res.json());

    //Union Filters: 
    if(category){
      data = data.filter(product => product.category === category)
    }
    if(priceMax){
      data = data.filter(product => product.price <= priceMax)
    }
    if(priceMin){
      data = data.filter(product => product.price >= priceMin)
    }
    if(name){
      data = data.filter(product => product.title.toLowerCase().includes(name.toLowerCase()))
    }



    
    return {
      products: data
    }
    
  } catch (error) {
    throw new Error("We can't get the products ");
  }
};
