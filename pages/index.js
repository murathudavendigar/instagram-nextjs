import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";

export default function Home() {
  return (
    <div className="bg-gray-50 text-black dark:bg-black dark:text-white">
      <Head>
        <title>Instagram | Captain Price</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>

      <Header />
      <Feed />
      <Modal />
    </div>
  );
}
