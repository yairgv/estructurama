import Image from "next/image"
import styles from "./Logo.module.css";
import Link from "next/link";

export const Logo = () => {
  return (
    
    <Link href="/" className={styles.logo}>
      <Image
         src={"/assets/images/logo_white.webp"}
         width={32}
         height={32}
         alt="Estructurama logo"
      />
      Estructurama
   </Link>
  )
}
