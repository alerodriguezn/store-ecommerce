'use server'

import { Product } from "@/interfaces/products";

export const CreateProduct = async (name: String, descrition: String, price: number, StockQuantity: number, categoryid: number, imageUrl: String) => {
    try {
        const NewProduct: Product  = await fetch('https://fake-store-api-2no73ornoa-uc.a.run.app/api/products/create',{
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
        
        if (!NewProduct) {
            return {
                ok: false,
                message: "We cannot create the product",
        };
    }

    return {
        ok: true,
        NewProduct
    }

    } catch (error) {
        return {
        ok: false,
        message: "We cannot create the product",
        };
    }
};