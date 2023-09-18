import React from "react";
import styles from "./MadeWithLove.module.scss";

interface Props {
  className?: string;
}

const MadeWithLove = ({ className }: Props) => {
  return (
    <span className={`${styles.madeWithLove} ${className ? className : ""}`}>
      Website made with love by{" "}
      <a href="https://www.domvillegas.com/" target="_blank">
        Dom
      </a>
      .
    </span>
  );
};

export default MadeWithLove;
