
"use server"

import {NewCart} from '@/interfaces/cart'

export interface ProductInCart {
    productId: number;
    quantity: number;
}

//Aqui tiene que recibir el userId: number, date: string, products: ProductInCart[]
export const addCart = async (userId: number, date: string, products: ProductInCart[] ) => {

    //
    try {
        const AddCartProduct: NewCart = await fetch('https://fakestoreapi.com/carts',{
            method:"POST",
            body:JSON.stringify(
                {
                    userId: userId,
                    date: date,
                    products: products
                }
            )
        })
            .then(res=>res.json())
    

    if (!AddCartProduct) {
        return {
            ok: false,
            message: "We cannot add the cart",
        };
    }

    return {
        ok: true,
        idcart: AddCartProduct.idcart,
        userId,
        date, 
        products

        

    }

        
        
    } catch (error) {
        return {
            ok: false,
            message: "We can not add the cart",
        }
        
    }

}