import React from "react";
import Link from "next/link";
import ChatIcon from "../components/icons/chat";
import UpIcon from "../components/icons/up";
import ThumbsUp from "../components/icons/thumbsup";

export default function Story({ story }) {
  return (
    <Link href={`/stories/${story.article_id}`}>
    <div className="news-card flex flex-row font-inter">
      <div className="px-5 hidden lg:flex flex-col justify-center text-center w-20">
        <UpIcon />
        <p className="text-gray-600 text-xs font-medium">{story.likes_count}</p>
      </div>
      <div className="px-5">
        <h2 className="font-medium text-l text-soft-black">{story.title}</h2>
        <div className="flex mt-2">
          <p className="hidden lg:inline-block text-xs mr-4 text-gray-600">
            by <span className="text-red-500 font-medium">{story.author}</span>
          </p>
          <p className="text-xs text-gray-600 mr-4"> {story.date}</p>
          <p className="text-xs hidden lg:inline-block text-gray-600 mr-4">
            {story.source}
          </p>
          <figure className="flex items-start mr-4">
            <ChatIcon />
            <figcaption className="text-xs text-gray-600">
              {story.comments_count}
            </figcaption>
          </figure>

          <div className="lg:hidden flex items-start">
            <ThumbsUp />
            <p className="text-xs text-gray-600">{story.likes_count}</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}
