import Image from "next/image"
import styles from "./Logo.module.css";
import Link from "next/link";

export const Logo = () => {
  return (
    
    <Link href="/" className={styles.logo}>
      <Image className={styles.logoImage}
         src={"/assets/images/logo_white1.svg"}
         width={54}
         height={40}
         alt="Estructurama logo"
      />
      Estructurama
   </Link>
  )
}
