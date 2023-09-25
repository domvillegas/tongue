import React from "react";
import styles from "./MenuButton.module.scss";
import { pushRouteWithFade } from "@/utils/helpers";
import { useRouter } from "next/router";

const MenuButton = () => {
  const route = useRouter();

  const clickHandler = () => {
    pushRouteWithFade("/", route);
  };

  return (
    <div className={styles.menuButton} onClick={clickHandler}>
      Home
    </div>
  );
};

export default MenuButton;
