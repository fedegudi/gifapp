
import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {

  const {images, loading} = useFetchGif(category);
  


 
  return (
    <div className="container">
        <h3>{category}</h3>  
        {/* Desplegar Listado */}
        <div className="card-grid">
          {
            loading ? <h2>Cargando...</h2> :
            images.map(imagen => <GifItem key={imagen.id} {...imagen} />)//llamamos el usestate con ...imagen poasamos todas las claves del objeto
          }
          
        </div>            
    </div>
  )
}