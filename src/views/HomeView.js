import CategoriasList from "../components/CategoriasList"
import img1 from "../img/maquillaje.jpg"

export default function HomeView() {
  return (
    <main>
    
        <div class="card-foto">
        <img src={img1} className="card-img-top " alt="" />
        </div> 
         
        <br/>
        
        <CategoriasList />

        
    </main>
  )
}
