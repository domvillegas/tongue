import React from "react";
import styles from "./SwipeBox.module.scss";

interface Props {
  text: string;
  className?: string;
}

const SwipeBox = ({ text, className }: Props) => {
  return (
    <div className={`${styles.swipeBox} ${className}`}>
      <div className={styles.scrollArea}>{text}</div>
    </div>
  );
};

export default SwipeBox;
