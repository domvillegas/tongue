import React from "react";
import styles from "./MadeWithLove.module.scss";

interface Props {
  className?: string;
}

const MadeWithLove = ({ className }: Props) => {
  return (
    <span className={`${styles.madeWithLove} ${className ? className : ""}`}>
      Made by{" "}
      <a href="https://www.domvillegas.com/" target="_blank">
        domvillegas.com
      </a>
    </span>
  );
};

export default MadeWithLove;
