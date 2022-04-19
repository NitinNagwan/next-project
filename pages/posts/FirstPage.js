import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function () {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Nextjs page</h1>
        <Link href="/">Bak to home page</Link>
      </Layout>
    </>
  );
}
