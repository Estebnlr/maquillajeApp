import { Link } from "react-router-dom"

export default function ProductosList({ misCategorias }) 
{
  const catFiltradas = misCategorias.filter((cat) => cat.productos.length > 0);
  const arrProductos = catFiltradas.map((item) => item.productos).flat();

  return (
    <div className="row mt-4">
      {arrProductos.map(({ prod_nom, prod_prec, prod_img, categoriaId, prod_id }, i) => (
        <div className="col-12 col-md-6 col-lg-3" key={i}>

          <div className="card-xd mb-3 ">
              <Link className="btn" to={`/categoria/${categoriaId}`}>
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
  );
}