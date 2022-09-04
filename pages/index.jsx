import { Button } from "components/common/button";
import SplitScreen from "components/layout/split-screen";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>MathonGo</title>
        <meta name="description" content="Login and registration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SplitScreen />
    </>
  );
}
