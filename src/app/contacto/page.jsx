import Image from "next/image";
import style from "./page.module.css";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

export default function ContactoPage() {

   const logoRoute = "/assets/images/logo_nombre.png";


   return ( 
      <div className="contentWrapper">
         <h1 className="sectionTitle">Contacto</h1>
         <div className={style.contactBody}>
            <form className={style.contactForm}>
               <input className={style.input} type="text" placeholder="NOMBRE"/>
               <input className={style.input} type="text" placeholder="EMAIL"/>
               <input className={style.input} type="text" placeholder="TELEFONO"/>
               <input className={style.input} type="text" placeholder="ASUNTO"/>
               <textarea className={style.input} type="text"  placeholder="MENSAJE"
                  rows={18}
               />

               <button className={style.submit}>
                  Enviar
               </button>


            </form>

            <div className={style.contactSocial}>
               <Image
                  className={style.logo}
                  src={logoRoute}
                  width={1024}
                  height={674}
                  alt={`estructurama logo`}
               />

               <h2><FiPhone /> +569 99 999 999</h2>
               <h2><IoMailOutline /> email@estructurama.cl</h2>


            </div>

         </div>



      </div>
   )
}
 