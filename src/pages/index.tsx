import React, { useEffect } from "react";
import SwipeBox from "@/components/SwipeBox/SwipeBox";
import styles from "./index.module.scss";
import Image from "next/image";
import yinyang from "../assets/backgrounds/yinyang.png";
import lauren from "../assets/backgrounds/lauren.jpg";

const boxData = [
  { text: "The Company", path: "/the-company" },
  { text: "Upcoming", path: "/upcoming" },
  { text: "In the Rough", path: "/in-the-rough" },
  { text: "Archive", path: "/archive" },
  { text: "Contact", path: "/contact" },
];

const Home = () => {
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("homeFadeIn");

    setTimeout(() => {
      body.classList.remove("fadeOut");
      body.classList.remove("homeFadeIn");
    }, 500);
  });

  return (
    <>
      <div className={styles.introAnimation}>
        <Image src={yinyang.src} alt="yinyang" width={150} height={150} />
      </div>
      <img className={styles.backgroundImage} src={lauren.src} alt="Lauren" />
      <div className={styles.swipeBoxesContainer}>
        {boxData.map((data, index) => {
          return <SwipeBox key={index} data={data} />;
        })}
      </div>
    </>
  );
};

export default Home;
