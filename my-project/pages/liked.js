import Head from "next/head";
import Header from "../components/Header";
import FeedLiked from "../components/FeedLiked";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

export default function Liked() {
    return (
      <div>
        <Head>
          <title>Liked Stories</title>
        </Head>
  
        {/* <h1>Let's build MOC News!</h1> */}
  
        {/* Header */}
        <Header />
  
        <main className="flex">
          {/* Sidebar */}
          <Sidebar />
          {/* Newsfeed */}
          <FeedLiked />
          {/* Widgets */}
          <Widgets />
        </main>
        {/* <Signin /> */}
      </div>
    )
  }