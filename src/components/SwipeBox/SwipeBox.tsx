import React, { forwardRef } from "react";
import styles from "./SwipeBox.module.scss";
import { useRouter } from "next/router";
import { useTransitionRoute } from "@/hooks/useTransitionRoute";

interface Props {
  data: { text: string; path: string };
  className?: string;
  animationOrder: number;
}

const SwipeBox = forwardRef<HTMLDivElement, Props>(
  ({ data, className, animationOrder }, ref) => {
    const route = useRouter();

    const clickHandler = (path: string) => {
      useTransitionRoute(path, route);
    };

    return (
      <div
        onClick={() => {
          clickHandler(data.path);
        }}
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
      </div>
    );
  },
);

export default SwipeBox;
