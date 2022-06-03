import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { obtenerCategoriaPorId } from "../services/categoriaService"
import CategoriasMenu from "../components/CategoriasMenu"

export default function CategoriaView() {
  const [categoria, setCategoria] = useState(null)

  const { catId } = useParams() //nos da los parametros de la URL
  
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
    //poner algo de carga, como mi estado de categoria es null, evitar tener errores al revisar propiedades como lug_nom
    return <h4>Cargando...</h4>
  }

  return (
    <div className="row">     
      <h2 className="mb-4">
        {categoria.cat_nom.toUpperCase()}
      </h2>
      <div className="col-12 col-md-4">
        <CategoriasMenu />
      </div>
      <div className="col-12 col-md-8">
      <br/>
        <h4 className="mb-3">Productos recomendados</h4>
        <div className="row">
        {categoria.productos.map(({prod_nom, prod_img, prod_prec, prod_id, categoriaId}, i) => (
            <div className="col-md-12 col-lg-4" key={i}>

              <div className="card-xd mb-3 ">
              <Link className="btn" to={`/detallelugar/${categoriaId}/${prod_id}`}>
                <img src={prod_img} className="card-img-top " alt={prod_nom} />
                <div className="card-body">
                  <h6 className="card-text text-dark">{prod_nom}</h6>
                  <h5 className="card-text text-danger">
                    $/ {prod_prec}
                  </h5>
                </div> </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}