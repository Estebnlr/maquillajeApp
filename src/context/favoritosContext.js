import { useState, useEffect, createContext } from "react"

export const FavoritosContext = createContext()

const FavoritosContextProvider = (props) => {
    const [favoritos, setFavoritos] = useState([])
   
    const anadirAFavoritos = (producto) => {
       
        setFavoritos([...favoritos, producto])
    }
    useEffect(() => {
        const favoritosStorage = JSON.parse(localStorage.getItem("descubre_favoritos"))
        console.log({favoritosStorage})
        if(favoritosStorage){
            setFavoritos(favoritosStorage)
        }
    }, [])

    useEffect(() => {
        if(favoritos.length === 0) return
        localStorage.setItem("descubre_favoritos", JSON.stringify(favoritos))
    }, [favoritos])

    return (
        <FavoritosContext.Provider value={{favoritos, anadirAFavoritos}} >
           
            {props.children}
        </FavoritosContext.Provider>
    )
}

export default FavoritosContextProvider