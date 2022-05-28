import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { obtenerCategoriaPorId } from "../services/categoriaService"
import CategoriasMenu from "../components/CategoriasMenu"

export default function CategoriaView() {
  const [categoria, setCategoria] = useState(null)

  const { catId } = useParams() 
  
  useEffect(() => {
    const getCategoria = async () => {
      try {
        const catObtenida = await obtenerCategoriaPorId(catId)
        setCategoria(catObtenida)
      } catch (error) {
        console.log(error)
      }
    }
    getCategoria()
  },[catId])

  if(!categoria) {
   
    return <h4>Cargando...</h4>
  }

  return (
   
  
       
    <div className="card-body">
   
      <h1 className="card-title" >{categoria.cat_nom}</h1>
    <div className="row">     
      
      <div className="col-12 col-md-3 ">
        <CategoriasMenu />
      </div>
      <div className="col-12 col-md-8">
        <h4 className="mb-3">Productos recomendados</h4>
        <br />
        
        <div  className="row">
          {categoria.productos.map(({prod_nom, prod_img, prod_prec, prod_id, categoriaId}, i) => (
            

            <div className="col-md-12 col-lg-4 " key={i}>
            
                  <Link  to={`/detallelugar/${categoriaId}/${prod_id}`}>
                  
                  <div  className="container d-flex justify-content-center h-100 ">
                  
                  <img src={prod_img} className="d-block w-100 " alt={prod_nom} />
                  
                  </div>
               
                  </Link>
                  <br/>
                  <div class="row">
                    <h5 className="card-title text-dark">{prod_nom}</h5>
                    <h5 className="card-title text-danger">{prod_prec}</h5>
                  </div>
                  
                  
                  </div>
                  
             
          ))}
        </div>
        
      </div>
      </div>
      </div>
    
  )
}