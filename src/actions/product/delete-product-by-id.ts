"use server";

import { revalidatePath } from "next/cache";

export const deleteProductById = async (id: number) => {
  console.log(id);
  try {
    const deleteProduct: boolean = await fetch(
      `https://fake-store-api-2no73ornoa-uc.a.run.app/api/products/delete/${id}`,
      {
        method: "DELETE",
      }
    ).then((res) => res.json());
    if (!deleteProduct) {
      return {
        ok: false,
        message: "We cannot delete the product",
      };
    }


    revalidatePath("/");

    return {
      ok: deleteProduct,
    };
  } catch (error) {
    return {
      ok: false,
      message: "We cannot delete the product",
    };
  }
};
