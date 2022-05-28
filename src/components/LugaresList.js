import { Link } from "react-router-dom"

export default function ProductosList({ misCategorias }) 
{
  const catFiltradas = misCategorias.filter((cat) => cat.productos.length > 0);
  const arrProductos = catFiltradas.map((item) => item.productos).flat();

  return (
    <div className="row mt-4">
      {arrProductos.map(({ prod_nom, prod_desc, prod_img, categoriaId, prod_id }, i) => (
        <div className="col-12 col-md-6 col-lg-3" key={i}>
          <div className="card mb-4">
            <img
              src={prod_img}
              className="card-img-top img-fluid"
              alt={prod_nom}
            />
            <div className="card-body">
              <h5 className="card-title">{prod_nom}</h5>
              <p className="card-text">{prod_desc}</p>
              <Link className="btn btn-danger" to={`/detalleproducto/${categoriaId}/${prod_id}`}>
                Conocer Producto
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}