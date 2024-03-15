'use server'



export const deleteProductById = async (id: number) => {
    try {
        const deleteProduct: boolean  = await fetch(`https://fake-store-api-2no73ornoa-uc.a.run.app/api/products/delete/${id}`)
            .then(res=>res.json())
        if (!deleteProduct) {
            return {
                ok: false,
                message: "We cannot delete the product",
        };
    }

    return {
        ok: deleteProduct
        
    }

    } catch (error) {
        return {
        ok: false,
        message: "We cannot delete the product",
        };
    }
};