import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGif = (category) => {
  
    const [images, setImages] = useState([]);//llamar un usestate para obtener las imagenes
    const [loading, setLoading] = useState(true);
  
    const getImages = async ()=>{     
      const newImages = await getGifs(category);
      setImages(newImages); //llamamos el usestate con asyc
      setLoading(false);
    }  
     
    useEffect( () => {
         getImages()
    }, [])  
    
    return {
        images,
        loading,
    };
}