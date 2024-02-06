import React from 'react'
import style from "./Navbar.module.css";
import { Logo } from '../logo/Logo';
import { Links } from '../links/Links';


export const Navbar = () => {
  return (
    <nav className={ style.navbar }>
      <div className={`${style.navbarContent} contentWrapper`}>
         <Logo></Logo>
         <Links/>
      </div>
   </nav>
  )
}
