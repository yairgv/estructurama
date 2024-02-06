
//import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "./components/button/Button";
import { Card } from "./components/card/Card";
import { Footer } from "./components/footer/Footer";

export default function Home() {

const info = {
    title : "VIVIENDA CARRILLO GUZMAN", 
    location:"Región de Los Lagos/Puerto Mont", 
    desc :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, sapien ut fermentum luctus, ipsum nisl tincidunt libero, quis sollicitudin mauris orci vitae eros.", 
    imgSrc:"/assets/images/banner.webp", 
    linkId:"Nolink"
}



  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.headerContent} contentWrapper`}>
          <h1 className={styles.headerTitle}>Construyendo Sueños Arquitectura que Inspira</h1>
          <p className={styles.headerDesc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, sapien ut fermentum luctus, ipsum nisl tincidunt libero, quis sollicitudin mauris orci vitae eros.</p>
          <Button>Contáctanos</Button>
        </div>
      </header>
      <section className="contentWrapper">
        <h2 className={styles.sectionTitle}>PROYECTOS</h2>
        <div className={styles.cardsContainer}>
          <Card {...info}/>
          <Card {...info}/>
          <Card {...info}/>
        </div>
        <Button styles={{margin: "0 auto"}}>Ver más proyectos</Button>
      </section>
    </>
  )
}
