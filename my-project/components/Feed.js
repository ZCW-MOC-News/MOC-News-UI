import React, { useState } from "react";
import axios from "axios";
import Stories from "./Stories";
import Story from "./Story";
import { motion } from "framer-motion";
import Head from "next/head";

const list = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, deplay: 1 },
  },
};
const item = {
  hidden: { x: -20, opacity: 0 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function Feed() {
  const [articles, setArticles] = useState([]);

  const getArticles = () => {
    axios
      .get("http://localhost:8080/articles/all")
      .then((response) => {
        console.log("Success");
        setArticles(response.data);
      })
      .catch((e) => {
        console.log("Error");
        setArticles([]);
      });
  };

  React.useEffect(() => getArticles(), []);

  // return (

  //     <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
  //         <div className='mx-auto max-wd-md md:max-w-1g'>

  //             <div><Stories />
  //             <div class="flex-grow grid grid-cols-1 gap-10 place-content-center h-48">
  //                 {articles
  //                     &&
  //                     articles.map((item, i) => (
  //                         <div key={i}>

  //                             <div className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">{item.title}</div>
  //                                 <div>Author: {item.author}</div>
  //                                 <div> Description: {item.description}</div>

  //                         </div>

  //                     ))
  //                 }
  //             </div>
  //             </div>
  //         </div>
  //     </div>
  // );
  return (
    <>
      <Head>
        <title>MOC News</title>
      </Head>
      <div className="flex justify-center space-x-3 mx-auto">
        <div className="lg:col-span-2 mt-8">
          <span className="main-title flex items-center text-soft-black">
            <h1 className="fancy-undeline text-xl">MOC News</h1>
          </span>
          <div className="mt-4">
            <motion.div
              className="children"
              initial="hidden"
              animate="show"
              variants={list}
            >
              {articles.map((story, i) => (
                <motion.div variants={item}>
                  <Story story={story} key={i} />
                </motion.div>
              ))}
            </motion.div>
          </div>
          <button className="more-btn">Load more</button>
        </div>
      </div>
    </>
  );
}

export default Feed;
