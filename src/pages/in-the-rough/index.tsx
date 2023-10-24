import React, { useEffect } from "react";
import MenuButton from "@/components/MenuButton/MenuButton";
import styles from "./InTheRough.module.scss";
import flyer from "../../assets/backgrounds/in-the-rough.jpg";

const InTheRough = () => {
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("fadeIn");

    setTimeout(() => {
      body.classList.remove("fadeOut");
      body.classList.remove("fadeIn");
    }, 500);
  });

  return (
    <div className={styles.inTheRough}>
      <MenuButton />
      <div className={styles.contentContainer}>
        <h2>In the Rough</h2>
        <p>
          In The Rough (ITR) is a works in progress showing for movement based
          artists to present new ideas, receive feedback from a live audience
          and peers, and to establish and further strengthen connections between
          movers in the Portland area. ITR was first produced at FLOOR Center
          for Dance in 2019 and the platform produced three successful
          iterations, which provided performance opportunities for over 25
          Portland based artists. ITR is a program that serves emerging artists,
          improvisers, and seasoned choreographers and allows creators to put
          their work in front of an audience in an intimate, informal setting.{" "}
        </p>
        <a
          className={styles.button}
          href="https://docs.google.com/forms/d/e/1FAIpQLScP-nH8MsVoa-eX9myx9-w5wYnWvGKoeRhbM7ZKHB5-EyQYPA/viewform?usp=sf_link"
          target="_blank"
        >
          Apply Here
        </a>
        <img src={flyer.src} />
      </div>
    </div>
  );
};

export default InTheRough;
