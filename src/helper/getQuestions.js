import clientAxios from "../axios/axios";

export const getQuestions = async ( category, total ) => {
    try {
        
        const url = `/api/trivia/preguntas/lista-preguntas?categoria=${ category }&total=${ total }`
        const res = await clientAxios.get(url);
        if( res.data.ok ) return res.data.questions

    } catch (error) {
        console.log( error );
    }
}