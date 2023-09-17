import React from "react";
import { AppProps } from "next/app";
import "../styles/globals-styles.scss";
import Head from "next/head";

export const getServerSideProps = () => {};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
          integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu"
          crossOrigin="anonymous"
        ></link>
        <title>Tongue Dance Project</title>
        <link rel="shortcut icon" href="https://i.imgur.com/cLa60sr.png" />

        <meta name="title" content="Tongue Dance Project" />
        <meta name="description" content="Mouthful of dirt." />
        <meta name="type" content="website" />
        <meta name="image" content="https://i.imgur.com/WpJWJbh.png" />
        <meta name="url" content="https://www.tonguedanceproject.com" />

        <meta property="og:title" content="Tongue Dance Project" />
        <meta property="og:description" content="Mouthful of dirt." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.imgur.com/WpJWJbh.png" />
        <meta property="og:url" content="https://www.tonguedanceproject.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
