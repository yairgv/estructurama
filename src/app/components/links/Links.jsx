"use client"
import Link from "next/link";
import styles from "./Links.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export const Links = () => {
  const [buttonState, setButtonState] = useState(false);

  const onClickHandler = (event) => {
    setButtonState((prevState) => !prevState);
  }

  return (
    <>
      <ul className={ styles.linksContainer}>
         <li><Link className={`${styles.link} undecoredLink`} href="/">HOME</Link></li>
         <li><Link className={`${styles.link} undecoredLink`} href="/proyectos">PROYECTOS</Link></li>
         <li><Link className={`${styles.link} undecoredLink`} href="/contacto">CONTACTO</Link></li>
      </ul>
      <button 
        className={styles.menuButton}
        onClick={onClickHandler}  
      >
        <RxHamburgerMenu />
      </button>

      
      <div className={`${styles.backDrop} ${buttonState && styles.backDropVisible}`} onClick={onClickHandler}></div>
      <aside className={`${styles.drawer} ${buttonState && styles.drawerVisible}`}>
        <button onClick={onClickHandler}>CERRAR</button>
      </aside>
    </>
  )
}
