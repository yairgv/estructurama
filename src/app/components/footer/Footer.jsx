import { Links } from "../links/Links";
import { Logo } from "../logo/Logo";
import styles from "./Footer.module.css";

export const Footer = () => {
   return (
      <footer className={`${styles.footer}`}>
         <div className={`${styles.footerInfo} contentWrapper`}> 
            <Logo/>
            <Links/>
            <div> Redes</div>
         </div>
      </footer>
   )
}
