import React, { forwardRef, TouchEvent } from "react";
import styles from "./SwipeBox.module.scss";

interface Props {
  text: string;
  className?: string;
  onSwipe: () => void;
  animationOrder: number;
  onClick: () => void;
  onTouchEnd: (event: TouchEvent<HTMLDivElement>) => void;
}

const SwipeBox = forwardRef<HTMLDivElement, Props>(
  ({ text, className, animationOrder, onSwipe, onClick, onTouchEnd }, ref) => {
    return (
      <div
        onScroll={onSwipe}
        onClick={onClick}
        className={`${styles.swipeBox} ${className ? className : ""}`}
      >
        <div onTouchEnd={onTouchEnd} ref={ref} className={styles.text}>
          <h2 className="largeText">{text}</h2>
        </div>
        <div
          style={{
            animationDelay: `${animationOrder * 0.075 + 0.75}s`,
          }}
          className={styles.fillerDiv}
        />
      </div>
    );
  },
);

export default SwipeBox;
