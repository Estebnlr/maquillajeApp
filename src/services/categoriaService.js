import axios from "axios";

const URL = process.env.REACT_APP_API;
const obtenerCategorias = async (page = 1, limit = 10) => {
    try {
        
        const { data, status } = await axios.get(`${URL}/categorias?page=${page}&limit=${limit}`);
        if(status === 200) return data
        throw Error("Error al obtener data")
    } catch (error) {
        throw error
    }
}
const obtenerCategoriaPorId = async (id) => {
    try {
        const { data, status } = await axios.get(`${URL}/categorias/${id}`)
        if( status === 200) return data
        throw Error("Error al obtener data de categoria")
    } catch (error) {
        throw error
    }
}

export {
    obtenerCategorias,
    obtenerCategoriaPorId
}