
//import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "./components/button/Button";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>Construyendo Sueños Arquitectura que Inspira</h1>
          <p className={styles.headerDesc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, sapien ut fermentum luctus, ipsum nisl tincidunt libero, quis sollicitudin mauris orci vitae eros.</p>
          <Button></Button>
        </div>

      </header>
    </>
  )
}
