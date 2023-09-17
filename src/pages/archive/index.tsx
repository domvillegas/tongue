import React from "react";
import styles from "./index.module.scss";
import BackButton from "@/components/MenuButton/MenuButton";

const data = [
  {
    title: "Untitled (2020)",
    location: "Portland, OR",
    link: "https://www.youtube.com/watch?v=vstVU5oxcUQ",
  },
  {
    title: "Untitled (2019)",
    location: "Portland, OR",
    link: "https://www.youtube.com/watch?v=RNOIaCcW4OQ&t=1s",
  },
  {
    title: "Knee Deep (2018)",
    location: "Portland, OR",
    link: "https://www.youtube.com/watch?v=lMTgte2jjz8&t=1s",
  },
  {
    title: "Becoming Buffalo (2017)",
    location: "San Jacinto, CA",
    link: "https://vimeo.com/174316892",
  },
];

const Archive = () => {
  return (
    <div className={styles.archive}>
      <BackButton />
      <div className={styles.backgroundImage} />
      <div className={styles.contentContainer}>
        <h1>Videos</h1>
        {data.map((video) => {
          return (
            <a className={styles.link} href={video.link} target="_blank">
              <span>{video.title}</span> - <span>{video.location}</span>{" "}
              <i className="fas fa-arrow-right" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Archive;
