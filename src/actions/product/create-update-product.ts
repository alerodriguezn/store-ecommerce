"use server";

import { Product } from "@/interfaces/products";
import { revalidatePath } from "next/cache";

export const createUpdateProduct = async (formData: FormData) => {
  const data = Object.fromEntries(formData);



  const { id, ...rest } = data;

  try {
    let product: Product;
    if (id) {
      product = await fetch(
        `https://fake-store-api-2no73ornoa-uc.a.run.app/api/products/update/${id}`,
        {
          method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
          body: JSON.stringify({
            ...rest,
          }),
        }
      ).then((res) => res.json());

      if (!product) {
        return {
          ok: false,
          message: "We cannot edit the product",
        };
      }
      revalidatePath("/admin/product");

      return {
        ok: true,
        product,
      };
    
    }

  

    product = await fetch('https://fake-store-api-2no73ornoa-uc.a.run.app/api/products/create',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(
                {
                    ...rest
                }
            )
        }).then(res=>res.json())
        

 



    if (!product) {
      return {
        ok: false,
        message: "We cannot create the product",
      };
    }

    return {
      ok: true,
      product,
    };

  } catch (error) {
    return {
      ok: false,
      message: "We cannot create the product",
    };
  }
};
