import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import style from "./Card.module.css";
import Link from "next/link";

export const Card = ({
  title = "NO TITLE",
  location = "NO LOCATION",
  desc = "NO DESC",
  imgSrc,
  linkId,
}) => {

  const imgRoute = `/assets/pro_images/${imgSrc}`;
  const buttonRoute = `/proyecto/${linkId}`;


  return (
    <div className={style.card}>
      <Image
        className={style.cardImg}
        src={imgRoute}
        width={848}
        height={512}
        alt={`${title} picture`}
      />
      <div className={style.cardInfo}>
        <h3 className={style.cardInfoTitle}>{title}</h3>
        <p className={style.cardInfoLocation}>
          <FaMapMarkerAlt color="#4D84EF" className={style.cardInfoIcon} />
          &nbsp;
          { location.charAt(0).toUpperCase() + location.slice(1).toLocaleLowerCase()}
        </p>
        <p className={style.cardInfoDesc}>{desc}</p>


        <Link className={`${style.cardInfoButton} undecoredLink`} href={buttonRoute}>
          Ver más
        </Link>


      </div>
    </div>
  );
};
