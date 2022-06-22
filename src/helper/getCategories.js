import clientAxios from "../axios/axios";

export const getCategories = async () => {
    try {
        
        const res = await clientAxios.get('/api/trivia/categorias/lista-categorias');
        if( res.data.ok ) return res.data.categorias;
        
    } catch (error) {
        console.log( error );

    }
}