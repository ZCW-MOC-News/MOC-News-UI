import Head from "next/head";
import Header from "../components/Header";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MOC News</title>
      </Head>

      {/* <h1>Let's build MOC News!</h1> */}

      {/* Header */}
      <Header />

      <main className="flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Newsfeed */}
        <Feed />
        {/* Widgets */}
        <Widgets />
      </main>
      {/* <Signin /> */}
    </div>
  )
}
