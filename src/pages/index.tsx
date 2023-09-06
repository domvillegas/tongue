import React from "react";
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
  return (
    <div className={styles.home}>
      <div className={styles.swipeBoxesContainer}>
        {boxNames.map((name, index) => {
          return (
            <SwipeBox className="largeText bold" key={index} text={name} />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
