import React, { forwardRef } from "react";
import styles from "./SwipeBox.module.scss";
import Link from "next/link";

interface Props {
  data: { text: string; path: string };
  className?: string;
  animationOrder: number;
}

const SwipeBox = forwardRef<HTMLDivElement, Props>(
  ({ data, className, animationOrder }, ref) => {
    return (
      <Link
        href={data.path}
        className={`${styles.swipeBox} ${className ? className : ""}`}
      >
        <div ref={ref} className={styles.text}>
          <h2 className="largeText">{data.text}</h2>
        </div>
        <div
          style={{
            animationDelay: `${animationOrder * 0.075 + 0.75}s`,
          }}
          className={styles.fillerDiv}
        />
      </Link>
    );
  },
);

export default SwipeBox;
