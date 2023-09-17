import React from "react";
import styles from "./MenuButton.module.scss";
import { useTransitionRoute } from "@/hooks/useTransitionRoute";
import { useRouter } from "next/router";

const MenuButton = () => {
  const route = useRouter();

  return (
    <div
      className={styles.menuButton}
      onClick={() => {
        useTransitionRoute("/", route);
      }}
    >
      Menu
    </div>
  );
};

export default MenuButton;
