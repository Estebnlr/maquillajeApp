import CategoriasList from "../components/CategoriasList"
import img1 from "../img/maquillaje6.jpg"
// import img2 from "../img/maquillaje2.jpg"

// import img4 from "../img/img1.png"


export default function HomeView() {
  return (
  
    <main>
             
        <div class="slider">

        <ul>
        <li>
        <img src="http://falabella.scene7.com/is/image/FalabellaPE/SIPBASE_1?wid=1160" alt=""/>
        </li>
                <li>
          <img src="https://centroesteticamaytegarrido.com/wp-content/uploads/2020/04/como-aplicar-base-maquillaje.jpg" alt=""/>
        </li>
        <img src="http://kripsyphotomakeup.weebly.com/uploads/5/7/3/0/57304107/6922572_orig.jpg" alt=""/>
                <li>
          <img src="https://www.lapeluqueriaenlaweb.com/wp-content/uploads/2015/05/limpieza.jpg" alt=""/>
        </li>
       
              </ul>


       {/* <div class="slides2">
           <img src="https://picsum.photos/id/1/720/480" alt="" />
           <img src="https://picsum.photos/id/2/720/480" alt="" />
           <img src="https://picsum.photos/id/3/720/480" alt="" />
           <img src="https://picsum.photos/id/4/720/480" alt="" /> */}
          
        </div> 
       
 
        <br/>
        <div>
        <CategoriasList />
        </div>
        
    </main>

   
    
    
  )
}
