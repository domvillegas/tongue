import React, { useEffect, useRef, useState } from "react";
import SwipeBox from "@/components/SwipeBox/SwipeBox";
import styles from "./index.module.scss";
import { useOpacityValue } from "@/contexts/opacity";
import { useRouter } from "next/router";

const boxNames = [
  "The Company",
  "Upcoming",
  "In the Rough",
  "Archive",
  "Contact",
];

const Home = () => {
  const { opacity, setOpacity } = useOpacityValue();
  const [routePushed, setRoutePushed] = useState(false);

  const swipeBoxRefs = useRef<HTMLDivElement[]>([]);

  const route = useRouter();

  useEffect(() => {
    (
      document.querySelector("body") as HTMLBodyElement
    ).style.opacity = `${opacity}`;
  });

  //"percentage" refers to the distance a container must travel before triggering push.route()
  const createRouteThreshold = (percentage: number) => {
    if (percentage >= 1 && percentage <= 100) {
      //multiply by -0.01 so that the results of the function will be positive
      return (percentage - 100) * -0.01;
    } else {
      return 5;
    }
  };
  const routeThreshold = createRouteThreshold(95);

  return (
    <>
      <div className={styles.backgroundImage} />
      <div className={styles.swipeBoxesContainer}>
        {boxNames.map((name, index) => {
          const calculatedOpacityValue =
            swipeBoxRefs.current[index]?.getBoundingClientRect().x /
              swipeBoxRefs.current[index]?.getBoundingClientRect().width +
            1;

          const onTouchEnd = () => {
            if (calculatedOpacityValue > routeThreshold)
              swipeBoxRefs.current[index].parentElement?.scrollTo({
                left: -swipeBoxRefs.current[index].getBoundingClientRect()
                  .width,
                behavior: "smooth",
              });
          };

          return (
            <SwipeBox
              animationOrder={index}
              onSwipe={() => {
                setOpacity(calculatedOpacityValue);
                if (calculatedOpacityValue <= routeThreshold && !routePushed) {
                  setRoutePushed(true);
                  route.push("/the-company");
                }
              }}
              onTouchEnd={onTouchEnd}
              ref={(element) => (swipeBoxRefs.current[index] = element!)}
              onClick={() =>
                swipeBoxRefs.current[index].parentElement?.scrollTo({
                  left: swipeBoxRefs.current[index].getBoundingClientRect()
                    .width,
                  behavior: "smooth",
                })
              }
              key={index}
              text={name}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
