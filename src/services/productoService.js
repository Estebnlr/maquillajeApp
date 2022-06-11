import axios from "axios"

const URL = process.env.REACT_APP_API

const obtenerProductos = async (catId, prodId) => {
    try {
        const endpoint = `${URL}/categorias/${catId}/productos/${prodId}`
        const { data, status } = await axios.get(endpoint)
        if(status === 200) return data
        throw Error("error al obtener data")
    } catch (error) {
        throw error
    }
}

export {
    obtenerProductos
}