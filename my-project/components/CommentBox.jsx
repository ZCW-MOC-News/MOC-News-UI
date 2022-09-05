import axios from "axios";
import React from "react";

export default function CommentBox({ article_id }) {

  const [formValue, setformValue] = React.useState({
    account_id: "13",
    comment: ""
  });

  const handleSubmit = async () => {
    // store the states in the form data
    const commentData = new FormData();
    const date = formatDate(new Date());
    commentData.append("account_id", formValue.account_id);
    commentData.append("article_id", { article_id }.article_id);
    commentData.append("date", date);
    commentData.append("comment", formValue.comment);

    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "http://localhost:8080/comments/add_form",
        data: commentData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.log(error);
    }
  };

// const handleSubmit = (e) => {
//     const date = formatDate(new Date());
//     e.preventDefault();
//     const userData = {
//       account_id: formValue.account_id,
//       article_id: { article_id }.article_id,
//       date: date,
//       comment: formValue.comment
//     };
//     console.log(userData);
//     axios
//       .post("http://localhost:8080/comments/form-data", userData)
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         if (error.response) {
//           console.log(error.response);
//           console.log("server responded");
//         } else if (error.request) {
//           console.log("network error");
//         } else {
//           console.log(error);
//         }
//       });
//   };

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div id="comment-box" class="rounded-xl max-w-lg shadow-md mt-8">
      <form action="" method="post" class="w-full p-4" onSubmit={handleSubmit}>
        <div class="mb-2">
          <label for="comment" class="text-lg text-gray-600">
            Add a comment
          </label>
          <textarea
            class="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
            name="comment"
            placeholder=""
            value={formValue.comment}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          class="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded"
          type="submit"
        >
          Comment
        </button>
      </form>
    </div>
  );
}

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function formatDate(date) {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-") +
    " " +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(":")
  );
}
