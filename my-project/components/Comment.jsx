import * as timeago from "timeago.js";

const item = {
  hidden: { y: 10, opacity: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Comment({ comment }) {
  return (
    // <div class="rounded-xl max-w-lg shadow-md mt-4">
    //   <div class="w-full p-4">
    //     <span className="text-gray-800 text-s font-bold mr-4 mb-2 inline-block">
    //       {comment.commenter}
    //     </span>
    //     <span className="text-gray-500 text-xs">
    //       {timeago.format(comment.date)}
    //     </span>
    //   </div>
    //   <p className="p-2">{comment.comment}</p>
    // </div>
    <div class="rounded-xl max-w-md shadow-md mt-2">
      <div className="news-card flex flex-row font-inter">
        <div className="px-5">
          <h2 className="font-medium text-sm text-soft-black">
            {comment.comment}
          </h2>
          <div className="flex mt-2">
            <p className="hidden lg:inline-block text-xs mr-4 text-gray-600">
              by{" "}
              <span className="text-red-500 font-medium">
                {comment.commenter}
              </span>
            </p>
            <p className="text-xs text-gray-600 mr-4">
              {" "}
              {timeago.format(comment.date)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
