import style from "./Button.module.css";


export const Button = ({children, styles}) => {
  return (
    <button className={style.button}
      style={styles}
    >
      {children}
   </button>
  )
}
