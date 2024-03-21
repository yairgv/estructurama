import { Card } from "@/app/components/card/Card";
import { getDataById } from "@/data/data"
import styles from "./page.module.css";
import Image from "next/image";

export default function page ({params}){

   const projectData = getDataById(params.projectId);

   if(!projectData) return (<p>La pagina no existe</p>)


   const imgRoute = `/assets/pro_images/${projectData.pImage}`;
   const mapRoute = `/assets/pro_images/map.jpg`;

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
                     height={274}
                     alt={`${projectData.title} picture`}
                  />
               </div>

               <p className={styles.description}>{projectData.desc}</p>

            </div>

         </div>
         <hr />
         <h2>PLANOS</h2>
         <hr />
         <h2>FOTOS</h2>
         <hr />



      </div>
   )
}