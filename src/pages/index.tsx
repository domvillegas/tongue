import React, { useEffect, useRef, useState } from "react";
import SwipeBox from "@/components/SwipeBox/SwipeBox";
import styles from "./index.module.scss";
import { useOpacityValue } from "@/contexts/opacity";

const boxNames = [
  "The Company",
  "Upcoming",
  "In the Rough",
  "Archive",
  "Contact",
];

const Home = () => {
  const { opacity, setOpacity } = useOpacityValue();
  const swipeBoxRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    (
      document.querySelector("body") as HTMLBodyElement
    ).style.opacity = `${opacity}`;
  });

  return (
    <div className={styles.home}>
      <div className={styles.swipeBoxesContainer}>
        {boxNames.map((name, index) => {
          return (
            <SwipeBox
              onScroll={() =>
                setOpacity(
                  swipeBoxRefs.current[index]?.getBoundingClientRect().x /
                    swipeBoxRefs.current[index]?.getBoundingClientRect().width +
                    1,
                )
              }
              ref={(element) => (swipeBoxRefs.current[index] = element!)}
              key={index}
              text={name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
