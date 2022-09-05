import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import axios from "axios";

const list = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", staggerChildren: 0.2 },
  },
};

export default function Comments({ id }) {

  const [comments, setComments] = useState([]);

  React.useEffect(() => {
    if (!id) {
      return;
    }
    const getComment = () => {
      axios
        .get(`http://localhost:8080/comments/find?article_id=${id}`)
        .then((response) => {
          setComments(response.data);
        })
        .catch((e) => {
          console.log("Error");
          setComments([]);
        });
    };
    getComment();
  }, [id]);

  return (
    <div>
      {comments.map((comment, i) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
}