'use server'


import { RootObjectCategory } from "@/interfaces/categories";


export const getAllCategories = async () => {


    try {
        const categories: RootObjectCategory = await fetch(`https://fake-store-api-409620.rj.r.appspot.com/api/categories/all?size=10`).then((res) => res.json());
        
        if (!categories) {
            return {
                ok: false,
                message: "We cannot get the categories",
            };
        }
    
        return {
            ok: true,
            categories: categories.content

        }
        
    } catch (error) {
        return {
            ok: false,
            message: "We can not get the categories",
        }
    }
}


