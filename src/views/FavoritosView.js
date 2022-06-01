import { useContext, useSelector } from "react";
import { FavoritosContext } from "../context/favoritosContext";

export default function FavoritosView() {
  const { favoritos } = useContext(FavoritosContext);

  return (
    <>

      <div className="card mt-3">
        <div className="card-body">
          <h4 className="card-title">Productos</h4>
      {favoritos.length > 0 ? (
        <div>
          {favoritos.map((item, i) => (
            <div className="card mb-3" key={i}>
              <div 
                className="row" 
                style={{ maxHeight: "300px", overflow:'hidden' }}
              >
                <div className="col-md-4">
                  <img
                    src={item.prod_img}
                    className="d-block w-50"
                    alt={item.prod_nom}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.prod_nom}</h5>
                    <p className="card-text">
                      {item.prod_desc}
                    </p>
                    <h5 className="card-text text-danger">
                      {item.prod_prec}
                     </h5>
                   
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      ) : (
        <h4>
          Todavia no ha seleccionado lugares como favoritos
        </h4>
      )}
      </div>
      </div>
    </>
  );
}