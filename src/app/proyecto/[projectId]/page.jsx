import { Card } from "@/app/components/card/Card";
import { getDataById } from "@/data/data"
import styles from "./page.module.css";
import Image from "next/image";
import { Gallery } from "@/app/components/gallery/Gallery";

export default function page ({params}){

   const projectData = getDataById(params.projectId);

   if(!projectData) return (<p>La pagina no existe</p>)


   const imgRoute = `/assets/pro_images/${projectData.pImage}`;
   const mapRoute = `/assets/pro_images/map.jpg`;

   const testPlanos = [
      `/assets/pro_images/${projectData.pImage}`,
      `/assets/pro_images/${projectData.pImage}`,
   ]

   return(
      <div className="contentWrapper">
         <h1 className={styles.title}>{projectData.title}</h1>
         <h2 className={`sectionTitle ${styles.subTitle}`}>{projectData.location}</h2>
         
         <div className={styles.infoContainer}>
            <Image
               className={styles.info__img}
               src={imgRoute}
               width={825}
               height={497}
               alt={`${projectData.title} picture`}
            />

            <div className={styles.info__detailsContainer}> 
               <div className={styles.details__locationContainer}>
                  <p className={styles.location__text}>{projectData.location2}</p>
                  <Image
                     className={styles.location__img}
                     src={mapRoute}
                     width={145}
                     height={250}
                     alt={`${projectData.title} picture`}
                  />
               </div>

               <p className={styles.description}>{projectData.desc}</p>

            </div>

         </div>


         {
            testPlanos.map((plano) => {
                  return ( 
                     <Image
                        key={new Date().getTime}
                        className={styles.plano}
                        src={plano}
                        width={825}
                        height={497}
                        alt={`plano picture`}
                     />
                  )
            })
         }


         <Gallery
            images={projectData.images}
         />


      </div>
   )
}