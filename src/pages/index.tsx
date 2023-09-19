import React, { useEffect, useRef } from "react";
import SwipeBox from "@/components/SwipeBox/SwipeBox";
import styles from "./index.module.scss";
import Image from "next/image";

const boxData = [
  { text: "The Company", path: "/the-company" },
  { text: "Upcoming", path: "/upcoming" },
  { text: "In the Rough", path: "/in-the-rough" },
  { text: "Archive", path: "/archive" },
  { text: "Contact", path: "/contact" },
];

const Home = () => {
  const swipeBoxRefs = useRef<HTMLDivElement[]>([]);

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
        <Image
          src="/_next/static/media/yinyang.6d765a1f.png"
          alt="yinyang"
          width={200}
          height={200}
        />
      </div>
      <div className={styles.backgroundImage} />
      <div className={styles.swipeBoxesContainer}>
        {boxData.map((data, index) => {
          return <SwipeBox key={index} data={data} />;
        })}
      </div>
    </>
  );
};

export default Home;
