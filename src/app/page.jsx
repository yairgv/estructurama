
//import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "./components/button/Button";
import { Card } from "./components/card/Card";
import { Footer } from "./components/footer/Footer";
import { TEST_DATA } from "@/data/data";


export default function Home() {

  // const info = {
  //     title : "VIVIENDA CARRILLO GUZMAN", 
  //     location:"Región de Los Lagos/Puerto Mont", 
  //     desc :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, sapien ut fermentum luctus, ipsum nisl tincidunt libero, quis sollicitudin mauris orci vitae eros.", 
  //     imgSrc:"/assets/images/banner.webp", 
  //     linkId:"Nolink"
  // }



  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.headerContent} contentWrapper`}>
          <h1 className={styles.headerTitle}>Construyendo Sueños Arquitectura que Inspira</h1>
          <p className={styles.headerDesc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, sapien ut fermentum luctus, ipsum nisl tincidunt libero, quis sollicitudin mauris orci vitae eros.</p>
          <Button href={"/contacto"}>Contáctanos</Button>
        </div>
      </header>
      <section className="contentWrapper">
        <h2 className="sectionTitle">PROYECTOS</h2>
        <div className={styles.cardsContainer}>
          {
            TEST_DATA.map((project, index) => {
              if(index <= 4){
                return (
                  <Card 
                    key={project.id}
                    title = {project.title}
                    location = {project.location}
                    desc = {project.desc}
                    imgSrc = {project.pImage}
                    linkId={project.id}
                  />
                )
              }
            })
          }
        </div>
        <Button styles={{margin: "0 auto"}} href={"/proyectos"}>Ver más proyectos</Button>
      </section>
    </>
  )
}
