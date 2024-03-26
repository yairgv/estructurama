import { Links } from "../links/Links";
import { Logo } from "../logo/Logo";
import { Redes } from "../rrss/Redes";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.footerInfo} contentWrapper`}>
        <Logo />
        {/* <Links /> */}
        <div className={styles.socialMedia}><Redes/></div>
      </div>
    </footer>
  );
};
