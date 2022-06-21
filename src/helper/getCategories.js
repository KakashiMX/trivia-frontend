import clientAxios from "../axios/axios";

export const getCategories = async () => {
    try {
        
        const res = await clientAxios.get('/api/trivia/categorias/lista-categorias');
        return res
    } catch (error) {
        console.log( error );

    }
}