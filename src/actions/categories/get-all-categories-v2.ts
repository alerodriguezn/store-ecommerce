'use server'

export const getAllCategories = async () => {


    try {
        const categories: string[] = await fetch(`https://fakestoreapi.com/products/categories`).then((res) => res.json());
        
        if (!categories) {
            return {
                ok: false,
                message: "We cannot get the categories",
            };
        }
    
        return {
            ok: true,
            categories: categories

        }
        
    } catch (error) {
        return {
            ok: false,
            message: "We can not get the categories",
        }
    }
}


