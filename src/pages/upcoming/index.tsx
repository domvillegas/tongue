import React, { useEffect } from "react";
import MenuButton from "@/components/MenuButton/MenuButton";
import styles from "./Upcoming.module.scss";
import backgroundImage from "../../assets/backgrounds/hugging.jpg";

const Upcoming = () => {
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("fadeIn");

    setTimeout(() => {
      body.classList.remove("fadeOut");
      body.classList.remove("fadeIn");
    }, 500);
  });

  return (
    <div className={styles.upcoming}>
      <div className={styles.backgroundImageGradient} />
      <img
        className={styles.backgroundImage}
        src={backgroundImage.src}
        alt="Adri and Lauren hugging"
      />
      <MenuButton />
      <div className={styles.contentContainer}>
        <span>
          Weekly <u>Free</u> Company Class
        </span>
        <span>Tuesdays 6-7:15pm</span>
        <a href="https://newexpressiveworks.org/" target="_blank">
          New Expressive Works
        </a>
        <span>810 SE Belmont St, Portland, OR 97214</span>
      </div>
    </div>
  );
};

export default Upcoming;
