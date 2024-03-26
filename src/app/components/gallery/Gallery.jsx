"use client"

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import style from "./Gallery.module.css"


export const Gallery = ({images}) => {
   const galleryImages = images.map((img) => {
      return {
         original : `/assets/pro_images/${img}`,
         thumbnail: `/assets/pro_images/${img}`,
         originalHeight :"600px",
         thumbnailHeight :"60px",
         originalClass : style.original,
       
      } 
   })

   return (
      <div className = {style.gallery}>
         <ImageGallery 
            items={galleryImages}  
            showBullets={true}
         />
      </div>
   )
}
