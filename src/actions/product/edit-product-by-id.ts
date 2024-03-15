'use server'

import { Product } from "@/interfaces/products";

export const editProductbyId = async (id:number, name: String, descrition: String, price: number, StockQuantity: number, categoryid: number, imageUrl: String) => {
    try {
        const editProduct: Product  = await fetch(`https://fake-store-api-2no73ornoa-uc.a.run.app/api/products/update/${id}`,{
            method:"POST",
            body:JSON.stringify(
                {
                    "name": name,
                    "description": descrition,
                    "price": price,
                    "stockQuantity": StockQuantity,
                    "categoryId": categoryid,
                    "imageUrl":imageUrl
                }
            )
        }).then(res=>res.json())
        
        if (!editProduct) {
            return {
                ok: false,
                message: "We cannot edit the product",
        };
    }

    return {
        ok: true,
        editProduct
    }

    } catch (error) {
        return {
        ok: false,
        message: "We cannot edit the product",
        };
    }
};