import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

function WriteArticle() {
  return (
<> 
<div style={{display:"flex", justifyContent:"center", marginTop:"250px"}}>
<div class="max-w-lg rounded-lg shadow-md shadow-blue-600/50">
  <form action="" class="w-full p-4">
    <div class="mb-2">
    <label for="comment" class="text-lg text-gray-600">Title</label>
      <textarea
        class="w-full h-10 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
        name="comment"
        placeholder="Write title here"></textarea>
      <label for="comment" class="text-lg text-gray-600">Article</label>
      <textarea
        class="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
        name="comment"
        placeholder="Write article here"></textarea>
    </div>
    <div>
      <button class="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded">
        Submit
      </button>
      <button
        class="px-3 py-2 text-sm text-blue-600 border border-blue-500 rounded">
          <a href="http://localhost:3000">
        Cancel
        </a>
      </button>
    </div>
  </form>
</div>
</div>
    </>
  )
}
export default WriteArticle;