import React, { forwardRef } from "react";
import styles from "./SwipeBox.module.scss";

interface Props {
  text: string;
  className?: string;
}

const SwipeBox = forwardRef<HTMLDivElement, Props>(
  ({ text, className }, ref) => {
    return (
      <div
        ref={ref}
        className={`${styles.swipeBox} ${className ? className : ""}`}
      >
        <div className={styles.text}>
          <h2 className="largeText">{text}</h2>
        </div>
        <div className={styles.fillerDiv} />
      </div>
    );
  }
);

export default SwipeBox;
