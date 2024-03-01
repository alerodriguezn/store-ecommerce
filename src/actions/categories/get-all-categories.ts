'use server'


export const getAllCategories = async () => {


    try {

        //Obtener las categorias del api, hay que ponerle size=10 para que obtenga todas:
        //https://fake-store-api-409620.rj.r.appspot.com/api/categories/all?size=10


        //Despues de obtenerlas valida si se obtuvieron correctamente, si no, regresa un mensaje de error


        //Si se obtuvieron correctamente, regresa un objeto con las categorias 

        
    } catch (error) {
        return {
            ok: false,
            message: "We can not get the categories",
        }
    }
}


