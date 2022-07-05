import clientAxios from "../../axios/axios";

// url
const url = '/api/refran&dicho';

// función para obtener los refranes y dichos
export const getProvers = async ( total ) => {
    const res = await clientAxios.get(`${ url }/lista-refranes?total=${ total }`);
    if( res.data.ok ) return res.data.provers
}