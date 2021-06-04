import { ThemeProvider } from 'next-themes'
import Head from "next/head";
import "../styles/globals.css";

import { ProvideAuth } from "../hooks/useAuth";

function MyApp({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <ThemeProvider attribute="class">
        <Head>
          <meta name="description" content="An authentication app example" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </ProvideAuth>
  );
}

export default MyApp;