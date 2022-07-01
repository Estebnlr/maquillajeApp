import { Link } from "react-router-dom"

export default function ProductosList({ misCategorias }) 
{
  const catFiltradas = misCategorias.filter((cat) => cat.productos.length > 0);
  const arrProductos = catFiltradas.map((item) => item.productos).flat();

  return (
    <div className="row mt-4">
      {arrProductos.map(({ prod_nom, prod_prec, prod_img, categoriaId, prod_id }, i) => (
        <div className="col-12 col-md-6 col-lg-3" key={i}>

        
          <Link className="card2" to={`/detalleproducto/${categoriaId}/${prod_id}`}>
                <img src={prod_img} className="image " alt={prod_nom} />
               
                <h4 className="text">
                <p>{prod_nom}</p>
                    $/ {prod_prec}
                </h4>
             
               
               </Link>
               
        </div>
      ))}
    </div>
  );
}