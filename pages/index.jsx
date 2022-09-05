import SignUp from "components/page/sign-up";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Overpay</title>
        <meta name="description" content="Register your account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignUp />
    </>
  );
}
