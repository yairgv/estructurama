import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import style from "./CardMini.module.css";
import { IoIosArrowForward } from "react-icons/io";

export const CardMini = ({
  title = "NO TITLE",
  location = "NO LOCATION",
  desc = "NO DESC",
  imgSrc = "/assets/images/banner.webp",
  linkId,
}) => {

  const imgRoute = `/assets/pro_images/${imgSrc}`;

  return (
    <div className={style.card}>
      <Image
        className={style.cardImg}
        src={imgRoute}
        width={600}
        height={320}
        alt={`${title} picture`}
      />
      <div className={style.cardInfo}>
        <div className={style.cardTexts}>
          <h3 className={style.cardInfoTitle}>{title}</h3>
          <p className={style.cardInfoLocation}>
            <FaMapMarkerAlt color="#4D84EF" className={style.cardInfoIcon} />
            &nbsp;
            { location.charAt(0).toUpperCase() + location.slice(1).toLocaleLowerCase()}
          </p>
        </div>
        <button className={style.cardInfoButton}>
            <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};
