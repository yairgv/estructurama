import Link from "next/link";
import style from "./Button.module.css";


export const Button = ({children, styles, href}) => {
  return (
    <button className={style.button}
        style={styles}
    >
      <Link href={href} className="undecoredLink">
        {children}
      </Link>
    </button>
  )
}
