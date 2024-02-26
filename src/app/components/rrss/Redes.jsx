import styles from "./Redes.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { LuTwitter } from "react-icons/lu";

export const Redes = () => {
  return (
   <div className={styles.linksContainer}>   
      <a className={styles.link} 
         href="https://web.whatsapp.com/" 
         target="_blank">
            <FaWhatsapp />
      </a>

      <a className={styles.link} 
         href="https://www.instagram.com/" 
         target="_blank">
         <FaInstagram />
      </a>

      <a className={styles.link} 
         href="https://outlook.com/" 
         target="_blank">
            <IoMailOutline />
      </a>

      <a className={styles.link} 
         href="https://twitter.com/" 
         target="_blank">
            <LuTwitter />
      </a>
   </div>
  )
}
