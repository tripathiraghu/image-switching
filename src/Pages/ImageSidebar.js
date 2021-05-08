import React,{useState,useEffect} from "react"
import ImageDisplay from "./ImageDisplay"
import logo from "./images/logo1.jpeg";

function ImageSidebar() {
    const [images, setImages] = useState([])
    const [currentImages, setCurrentImages] = useState(logo);
    useEffect(() => {
        fetch('https://picsum.photos/v2/list?page=1&limit=100')
        .then(response => response.json())
        .then(images => {
            setImages(images)
            console.log(images);
        })
      }, []);  
      const handleChange = (e) => {
        console.log(e);
        setCurrentImages(e);
      }

    
    return (
        

<div className="row">
     <div className="col-md-4">
     <div className="sidebar-block">
         
           {images.map((s) => (
          <div key={s.id}>     
          <img src= {"https://picsum.photos/id/"+ s.id +"/400/500"} id={s.id} alt={s.author} key={s.id} className="image" loading="lazy" onClick={() => handleChange(s.download_url)}/>
          <p className="image-author">{s.author} </p>
      </div>
      ))}

        </div>
     </div>
     <div className="col-md-8">
    <ImageDisplay url={currentImages}/>
     </div>
   </div>



    )
}

export default ImageSidebar
