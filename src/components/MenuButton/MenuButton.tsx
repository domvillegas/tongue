import React from "react";
import styles from "./MenuButton.module.scss";
import { pushRouteWithFade } from "@/utils/helpers";
import { useRouter } from "next/router";
import yinyang from '../../assets/backgrounds/yinyang.png';
import Image from "next/image";

const MenuButton = () => {
  const route = useRouter();

  const clickHandler = () => {
    pushRouteWithFade("/", route);
  };

  return (
    <div className={styles.menuButton} onClick={clickHandler}>
        <Image src={yinyang.src} alt="yinyang" width={50} height={50} />
    </div>
  );
};

export default MenuButton;
