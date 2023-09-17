import { NextRouter } from "next/router";

export const useTransitionRoute = (path: string, router: NextRouter) => {
  const body = document.getElementsByTagName("body")[0];

  body.classList.add("fadeOut");

  return setTimeout(() => {
    router.push(path);
    body.classList.add("fadeIn");

    setTimeout(() => {
      body.classList.remove("fadeOut");
      body.classList.remove("fadeIn");
    }, 500);
  }, 750);
};
