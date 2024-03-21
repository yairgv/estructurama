import { TEST_DATA } from "@/data/data"
import styles from "./proyectos.module.css";
import { CardMini } from "../components/card-mini/CardMini";

export default function ProyectosPage() {
  return (
  <>
    <section className="contentWrapper">
      <h2 className="sectionTitle">PROYECTOS</h2>
      <div className={styles.cardsC}>
        {
          TEST_DATA.map((project, index) => {
              return (
                <CardMini 
                  key={new Date().getTime()}
                  title = {project.title}
                  location = {project.location}
                  desc = {project.desc}
                  imgSrc = {project.pImage}
                  linkId={project.id}
                />
              )
          })
        }
      </div>
      </section>
  </>
  )
}
 