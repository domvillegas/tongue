import React, { useEffect, useRef } from "react";
import SwipeBox from "@/components/SwipeBox/SwipeBox";
import styles from "./index.module.scss";

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
    body.classList.add("fadeIn");

    setTimeout(() => {
      body.classList.remove("fadeOut");
      body.classList.remove("fadeIn");
    }, 500);
  });

  return (
    <>
      <div className={styles.backgroundImage} />
      <div className={styles.swipeBoxesContainer}>
        {boxData.map((data, index) => {
          return (
            <SwipeBox
              animationOrder={index}
              ref={(element) => (swipeBoxRefs.current[index] = element!)}
              key={index}
              data={data}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
