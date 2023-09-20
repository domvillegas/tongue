import React from "react";
import styles from "./MenuButton.module.scss";
import { useTransitionRoute } from "@/hooks/useTransitionRoute";
import { useRouter } from "next/router";

const MenuButton = () => {
  const route = useRouter();

  const clickHandler = () => {
    useTransitionRoute("/", route);
  };

  return (
    <div className={styles.menuButton} onClick={clickHandler}>
      Menu
    </div>
  );
};

export default MenuButton;
