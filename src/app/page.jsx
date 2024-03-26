
//import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "./components/button/Button";
import { Card } from "./components/card/Card";
import { Footer } from "./components/footer/Footer";
import { TEST_DATA } from "@/data/data";
import { CardMini } from "./components/card-mini/CardMini";


export default function Home() {

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
                  <>
                    <Card 
                      className={styles.cardMini}
                      key={project.id}
                      title = {project.title}
                      location = {project.location}
                      desc = {project.desc}
                      imgSrc = {project.pImage}
                      linkId={project.id}
                    />
                   
                  </>
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
