import React from 'react'
import style from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={ style.navbar }>
      <div className={style.navbarContent}>
         <div>Estructurama</div>
         <ul className={ style.linksContainer}>
            <li>PROYECTOS</li>
            <li>SERVICIOS</li>
            <li>CONTACTO</li>
         </ul>
      </div>
   </nav>
  )
}
