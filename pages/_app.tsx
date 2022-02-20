import {AppProps} from "next/app";
import Head from "next/head";

import Page from "../components/Page";

import "../globals.css";

function App({Component, PageProps}: AppProps) {
  return (
    <>
      <Page>
        <Head>
          <title>Cupoghlan</title>
          <meta content="initial-scale=1.0, width=device-width" name="viewport" />
        </Head>

        <Component {...PageProps} />
      </Page>
    </>
  );
}

export default App;
