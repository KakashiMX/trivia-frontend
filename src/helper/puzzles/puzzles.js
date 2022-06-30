import clientAxios from "../../axios/axios";

// url
const url = '/api/acertijos';

export const getPuzzles = async ( total ) => {
    try {
        const res = await clientAxios.get(`${ url }/lista-acertijos?total=${ total }`);
        
        if( res.data.ok) return res.data.puzzles;

    } catch (error) {
        console.log( error );
    }
}