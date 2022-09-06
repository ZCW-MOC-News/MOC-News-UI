import React, { useState } from "react";
import axios from "axios";
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

function FeedLiked() {
  const [articles, setArticles] = useState([]);

  const getArticles = () => {
    axios
      .get(
        "http://localhost:8080/articles/liked?account_id=" +
          localStorage.getItem("id")
      )
      .then((response) => {
        console.log("Success");
        setArticles(response.data);
      })
      .catch((e) => {
        console.log("Error");
        setArticles([]);
      });
  };

  if (typeof window !== "undefined") {
    console.log(localStorage.getItem("id"));
    React.useEffect(() => getArticles(), []);
  } 

  return (
    <>
      <Head>
        <title>MOC News</title>
      </Head>
      <div className="flex justify-center space-x-3 mx-auto">
        <div className="lg:col-span-2 mt-8">
          <span className="main-title flex items-center text-soft-black">
            <h1 className="fancy-undeline text-xl">Liked Stories</h1>
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
          {/* <button className="more-btn">Load more</button> */}
        </div>
      </div>
    </>
  );
}

export default FeedLiked;
