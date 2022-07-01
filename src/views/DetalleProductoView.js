import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { obtenerProductos } from "../services/productoService";

import { FavoritosContext } from "../context/favoritosContext";
import { AuthContext } from "../context/authContext"; 

export default function DetalleProductoView() {
  const [miProducto, setMiProducto] = useState(null);
  


  const navigate = useNavigate()

  const { catId, prodId } = useParams();

  const { favoritos, anadirAFavoritos } = useContext(FavoritosContext);
  const { user } = useContext(AuthContext)

  const addAFavoritos = () => {
    if(user){
      anadirAFavoritos(miProducto)
    }else{
      navigate('/login')
    }
  }



  useEffect(() => {
    const getProducto = async () => {
      try {
        const prodObtenido = await obtenerProductos(catId, prodId);
        setMiProducto(prodObtenido);
      } catch (error) {
        console.log(error);
      }
    };
    getProducto();
  }, []);

  return (
    <>
     <br />
      {miProducto ? (
        
        <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title" >{miProducto.prod_nom.toUpperCase()}</h5>
          <h2></h2>
          <h4 className="card-title text-danger">$/ {miProducto.prod_prec}</h4>
        <div>
          <div className="d-flex justify-content-between">
            <h2></h2>
            
              
            <Link  to={`/categoria/${catId}`} className="btn btn-outline-danger">
               <i className="fa-solid fa-shapes" /> Ver más 
            </Link>
   
          </div>
          <br/>
          <div className="row mt-4">
            <div className="col-12 col-lg-8">
              <div className="img-fluid d-flex justify-content-center overflow-hidden div-img-detalle">
                <img src={miProducto.prod_img} className="card-x" alt={miProducto.prod_nom} />
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="card">
                <div className="card-body" >
                 
                  <p className="card-text">{miProducto.prod_desc}</p>
                  <br/>
              
                  <div className="d-grid">
                    <button 
                       className="btn btn-outline-danger"
                       onClick={addAFavoritos}
                    >
                      Agregar Producto
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        </div>
        </div>
      ) : (
        <p>Cargando ...</p>
      )}
      
      
    </>
  );
}