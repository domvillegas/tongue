import React, { useRef } from "react";
import SwipeBox from "@/components/SwipeBox/SwipeBox";
import styles from "./index.module.scss";

const boxNames = [
  "The Company",
  "Upcoming",
  "In the Rough",
  "Archive",
  "Contact",
];

const Home = () => {
  const swipeBoxRefs = useRef<HTMLDivElement[]>([]);

  return (
    <div className={styles.home}>
      <div className={styles.swipeBoxesContainer}>
        {boxNames.map((name, index) => {
          return (
            <SwipeBox
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
