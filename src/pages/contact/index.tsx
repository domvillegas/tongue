import React, { useEffect } from "react";
import styles from "./index.module.scss";
import MenuButton from "@/components/MenuButton/MenuButton";

const Contact = () => {
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("fadeIn");

    setTimeout(() => {
      body.classList.remove("fadeOut");
      body.classList.remove("fadeIn");
    }, 750);
  });

  return (
    <div className={styles.contact}>
      <MenuButton />
      <div className={styles.backgroundImage} />
      <div className={styles.contentContainer}>
        <span>TONGUEDANCEPROJECT</span>
        <div className={styles.emailDomainClipboardIconContainer}>
          <span className={styles.emailDomain}>@GMAIL.COM</span>
          <i
            className="far fa-clipboard"
            onClick={() =>
              navigator.clipboard.writeText("tonguedanceproject@gmail.com")
            }
          />
        </div>
        <div className={styles.instagramPaperPlanIconsContainer}>
          <i
            onClick={() =>
              window.open(
                "https://www.instagram.com/tonguedanceproject/?hl=en",
                "_blank",
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
    </div>
  );
};

export default Contact;
