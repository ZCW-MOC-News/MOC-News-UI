import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import Comments from "../../components/Comments";
import ChatIcon from "../../components/icons/chat";
import LikeIcon from "../../components/icons/thumbsup";
import dayjs from "dayjs";
import CommentBox from "../../components/CommentBox";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Widgets from "../../components/Widgets";

export default function Best() {
  const { id } = useRouter().query;

  const [article, setArticle] = useState([]);

  React.useEffect(() => {
    if (!id) {
      return;
    }
    const getArticle = () => {
      axios
        .get(`http://localhost:8080/articles/find_id?id=${id}`)
        .then((response) => {
          setArticle(response.data);
        })
        .catch((e) => {
          console.log("Error");
          setArticle([]);
        });
    };
    getArticle();
  }, [id]);

  return (
    <div>
      <Header />
      <main className="flex">
        <Sidebar />
        <div className="flex justify-center space-x-3 mx-[350px]">
          <div className="container grid justify-center my-10">
            <div className="w-full lg:w-140">
              <Head>
                <title>MOC News - {article.title}</title>
              </Head>
              <div>
                <a
                  className="font-extrabold text-xl fancy-undeline"
                  target="_blank"
                >
                  {article.title}
                </a>
                <div className="flex mt-2">
                  <p className="text-xs mr-4 text-gray-500">
                    by{" "}
                    <span className="text-red-500 font-medium">
                      {article.author}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 mr-4">
                    {dayjs(article.date).format("MMM D, YYYY")}
                  </p>
                  <p className="text-xs text-gray-500 mr-4 flex items-start">
                    <LikeIcon />
                    {article.likes_count}
                  </p>
                  <figure className="flex items-start">
                    <ChatIcon />
                    <figcaption className="text-xs text-gray-500">
                      {article.comments_count}
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="my-6 text-med">{article.content}</div>
              <CommentBox article_id={id}/>
              <Comments id={id} />
            </div>
          </div>
        </div>
        <Widgets />
      </main>
    </div>
  );
}
