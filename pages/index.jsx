import { Button } from "components/common/button";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MathonGo</title>
        <meta name="description" content="Login and registration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button variant="primary" size="medium">
        Sign Up
      </Button>
      <Button variant="secondary" size="small">
        Sign In
      </Button>
    </div>
  );
}
