import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import Comments from "../../components/Comments";
import ChatIcon from "../../components/icons/chat";
import LikeIcon from "../../components/icons/thumbsup";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
// import getComments from "../../lib/getComments";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Widgets from "../../components/Widgets";

export default function Best() {
  const { id } = useRouter().query;

  const [data, setArticle] = useState([]);

  React.useEffect(() => {
    if (!id) {
      return;
    }
    const getArticle = () => {
      axios
        .get(`http://localhost:8080/articles/find_id?id=${id}`)
        .then((response) => {
          console.log("Success");
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
                <title>MOC News - {data.title}</title>
              </Head>
              <div>
                <a
                  className="font-extrabold text-xl fancy-undeline"
                  target="_blank"
                >
                  {data.title}
                </a>
                <div className="flex mt-2">
                  <p className="text-xs mr-4 text-gray-500">
                    by{" "}
                    <span className="text-red-500 font-medium">
                      {data.author}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 mr-4">
                    {dayjs(data.date).format("MMM D, YYYY")}
                  </p>
                  <p className="text-xs text-gray-500 mr-4 flex items-start">
                    <LikeIcon />{data.likes_count}
                  </p>
                  <figure className="flex items-start">
                    <ChatIcon />
                    <figcaption className="text-xs text-gray-500">{data.comments_count}</figcaption>
                  </figure>
                </div>
              </div>
              {/* <Comments comments={data.comments} /> */}
              <div className="my-6 text-med">
                {data.content}
              </div>
            </div>
          </div>
        </div>
        <Widgets />
      </main>
    </div>
  );
}
