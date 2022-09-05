import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import axios from "axios";

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
    <div className="mb-8">
      {comments.map((comment, i) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
}