import Image from "next/image"
import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image
         src={"/assets/images/logo.png"}
         width={32}
         height={32}
         alt="Estructurama logo"
      />
      Estructurama
   </div>
  )
}
