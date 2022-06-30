import clientAxios from "../../axios/axios";

// url para consultas al backend
const url = '/api/juegos'

export const getGamesList = async ()  => {

    try {
        const res = await clientAxios.get(`${url}/lista-juegos`);

        if( res.data.ok ) return res.data.games;
    
    } catch (error) {
        console.log( error );
    }
}