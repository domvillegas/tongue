import React, { forwardRef } from "react";
import styles from "./SwipeBox.module.scss";
import { useOpacityValue } from "@/contexts/opacity";

interface Props {
  text: string;
  className?: string;
  onScroll: () => void;
}

const SwipeBox = forwardRef<HTMLDivElement, Props>(
  ({ text, className, onScroll }, ref) => {
    const { opacity } = useOpacityValue();
    return (
      <div
        style={{ opacity: opacity }}
        onScroll={onScroll}
        className={`${styles.swipeBox} ${className ? className : ""}`}
      >
        <div ref={ref} className={styles.text}>
          <h2 className="largeText">{text}</h2>
        </div>
        <div className={styles.fillerDiv} />
      </div>
    );
  },
);

export default SwipeBox;
