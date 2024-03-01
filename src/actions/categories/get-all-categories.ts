'use server'


import { RootObject } from "@/interfaces/products";


export const getAllCategories = async () => {


    try {
        const categories: RootObject = await fetch(`https://fake-store-api-409620.rj.r.appspot.com/api/categories/all?size=10`).then((res) => res.json());
        
        if (!categories) {
            return {
                ok: false,
                message: "We cannot get the categories",
            };
        }
    
        return {
            ok: true,
            Allcategory: categories.content

        }
        
    } catch (error) {
        return {
            ok: false,
            message: "We can not get the categories",
        }
    }
}


