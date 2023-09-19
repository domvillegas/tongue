import React, { forwardRef } from "react";
import styles from "./SwipeBox.module.scss";
import { useRouter } from "next/router";
import { useTransitionRoute } from "@/hooks/useTransitionRoute";

interface Props {
  data: { text: string; path: string };
  className?: string;
}

const SwipeBox = ({ data, className }: Props) => {
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
      <div className={styles.text}>
        <h2 className="largeText">{data.text}</h2>
      </div>
    </div>
  );
};

export default SwipeBox;
