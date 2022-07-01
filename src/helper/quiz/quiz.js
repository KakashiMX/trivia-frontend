import clientAxios from "../../axios/axios";

// url de la API
const url = '/api/trivia';

// función para obtener las categorias disponibles en el modo de juego "trivia"
export const getCategories = async () => {
    try {
        
        const res = await clientAxios.get('/api/trivia/categorias/lista-categorias');
        if( res.data.ok ) return res.data.categories;
        
    } catch (error) {
        console.log( error );

    }
}

// función para obtener un total de preguntas de determinada categoria
export const getQuestions = async ( category, total ) => {
    try {
        
        const res = await clientAxios.get(`${ url }/preguntas/lista-preguntas?categoria=${ category }&total=${ total }`)
        if( res.data.ok ) return res.data.questions

    } catch (error) {
        console.log( error );
    }
}