import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import style from "./Card.module.css";



export const Card = ({title = "NO TITLE", location="NO LOCATION", desc ="NO DESC", imgSrc="/assets/images/banner.webp", linkId}) => {
   
   
   return (
      <div className={style.card}>
         <Image 
            className={style.cardImg}
            src={imgSrc}
            width={848}
            height={512}
            alt={`${title} picture`}
         />
         <div className={style.cardInfo}>
            <h3 className={style.cardInfoTitle}>{title}</h3> 
            <p p className={style.cardInfoLocation}>
               <FaMapMarkerAlt color="#4D84EF" className={style.cardInfoIcon}/> 
               &nbsp;
               {location}
            </p>
            <p className={style.cardInfoDesc}>{desc}</p>
            <button className={style.cardInfoButton} >
               Ver más
            </button>
         </div>
      </div>
   )
}


