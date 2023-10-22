import React, { useEffect } from "react";
import styles from "./index.module.scss";
import MenuButton from "@/components/MenuButton/MenuButton";
import backgroundImage from "../../assets/backgrounds/contact.jpg";

const Contact = () => {
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("fadeIn");

    setTimeout(() => {
      body.classList.remove("fadeOut");
      body.classList.remove("fadeIn");
    }, 500);
  });

  return (
    <div className={styles.contact}>
      <MenuButton />
      <img
        className={styles.backgroundImage}
        src={backgroundImage.src}
        alt="Arms"
      />
      <div className={styles.contentContainer}>
        <div className={styles.emailContainer}>
          <span>TONGUEDANCEPROJECT</span>
          <span>@GMAIL.COM</span>
        </div>
        <div className={styles.instagramPaperPlanIconsContainer}>
          <i
            onClick={() =>
              window.open(
                "https://www.instagram.com/tonguedanceproject/?hl=en",
                "_blank"
              )
            }
            className="fab fa-instagram icon"
          />
          <i
            onClick={() =>
              (location.href = "mailto:tonguedanceproject@gmail.com")
            }
            className="far fa-paper-plane icon"
          />
        </div>
      </div>
      <span className={styles.websiteCredit}>
        Website made by{" "}
        <a href="https://www.domvillegas.com/" target="_blank">
          domvillegas.com
        </a>
      </span>
    </div>
  );
};

export default Contact;
