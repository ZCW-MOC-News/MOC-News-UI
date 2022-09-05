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
    <div class="rounded-xl max-w-lg shadow-md">
      <div class="w-full p-4">
        <span className="text-gray-800 text-xs font-bold mr-4 mb-2 inline-block">
          {comment.commenter}
        </span>
        <span className="text-gray-500 text-xs">
          {timeago.format(comment.date)}
        </span>
      </div>
      <p
        className="comments-paragraph"
        dangerouslySetInnerHTML={{ __html: comment.comment }}
      ></p>
    </div>
  );
}