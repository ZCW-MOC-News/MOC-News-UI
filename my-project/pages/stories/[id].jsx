import { useRouter } from "next/router";
import React, { useState } from "react";
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

  const [userId, setUserId] = React.useState('')
  React.useEffect(() => setUserId(typeof window !== 'undefined' ? localStorage.getItem('id') : null), [])

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

  const [showCommentBox, setShowCommentBox] = useState(false);

  return (
    <div>
      <Header />
      <main className="flex">
        <Sidebar />
        <div className="flex justify-center space-x-3 mx-auto">
          <div className="container grid justify-center mt-8">
            <div class="rounded-xl border p-5 shadow-md bg-white">
              <div class="flex w-full items-center justify-between border-b pb-3">
                <div class="flex items-center space-x-3">
                  {/* <div class="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div> */}
                  <div class="text-lg font-bold text-slate-700">
                    {article.author}
                  </div>
                </div>
                <div class="flex items-center space-x-8">
                  <button class="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">
                    Category
                  </button>
                  <div class="text-xs text-neutral-500">
                    {dayjs(article.date).format("MMM D, YYYY")}
                  </div>
                </div>
              </div>
              <div class="mt-4 mb-6">
                <div class="mb-3 text-xl font-bold">{article.title}</div>
                <div class="text-sm text-neutral-600">{article.content}</div>
              </div>
              <div>
                <div class="flex items-center justify-between text-slate-500">
                  <div class="flex space-x-4 md:space-x-8">
                    <div
                      class="flex cursor-pointer items-center transition hover:text-slate-600"
                      onClick={() => setShowCommentBox(!showCommentBox)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="mr-1.5 h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                      <span>{article.comments_count}</span>
                    </div>
                    <div class="flex cursor-pointer items-center transition hover:text-slate-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="mr-1.5 h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                      </svg>
                      <span>{article.likes_count}</span>
                    </div>
                  </div>
                </div>
              </div>
              {showCommentBox && userId != null && <CommentBox article_id={id} />}
            </div>
            <div class="relative flex py-5 items-center mx-[500px]">
              <div class="flex-grow border-t border-gray-400"></div>
              <span class="flex-shrink mx-4 text-gray-400">Comments</span>
              <div class="flex-grow border-t border-gray-400"></div>
            </div>
            <Comments id={id} />
          </div>
        </div>
        <Widgets />
      </main>
    </div>
  );
}
