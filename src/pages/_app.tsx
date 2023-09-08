import React, { useEffect } from "react";
import { AppProps } from "next/app";
import "../styles/globals-styles.scss";
import Head from "next/head";
import { OpacityContextProvider, useOpacityValue } from "@/contexts/opacity";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { opacity } = useOpacityValue();

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <OpacityContextProvider>
        <Component {...pageProps} />
      </OpacityContextProvider>
    </>
  );
}
