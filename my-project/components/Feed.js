import React, { useState } from 'react';
import axios from 'axios';
import Stories from './Stories';


function Feed() {

    const [articles, setArticles] = useState([]);

    const getArticles = () => {
        axios.get("http://localhost:8080/articles/all")
            .then((response) => {
                console.log("Success");
                setArticles(response.data);
            })
            .catch((e) => {
                console.log("Error");
                setArticles([]);
            });
    };

    React.useEffect(() => getArticles(), []);

    return (

        
        // <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
        //     <div className='mx-auto max-wd-md md:max-w-1g'>
      
        //         <div><Stories />
        //         <div class="flex-grow grid grid-cols-2 gap-10 place-content-center h-48">
        //             {articles
        //                 &&
        //                 articles.map((item, i) => (
        //                     <div key={i}>
                                
        //                         <div className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">{item.title}</div>
        //                             <div>Author: {item.author}</div>
        //                             <div> Description: {item.description}</div>

        //                     </div>

        //                 ))
        //             }
        //         </div>
        //         </div>
        //     </div>
        // </div>
        <Link href={`/items/${story.id}`}>
        <div className="news-card flex flex-row font-inter">
          <div className="px-5 hidden lg:flex flex-col justify-center text-center w-20">
            <UpIcon />
            <p className="text-gray-600 text-xs font-medium">{story.score}</p>
          </div>
          <div className="px-5">
            <h2 className="font-medium text-sm text-soft-black">{story.title}</h2>
            <div className="flex mt-2">
              <p className="hidden lg:inline-block text-xs mr-4 text-gray-600">
                by <span className="text-red-500 font-medium">{story.user}</span>
              </p>
              <p className="text-xs text-gray-600 mr-4"> {story.time}</p>
              <p className="text-xs hidden lg:inline-block text-gray-600 mr-4">
                {getHost(story.source, story.id)}
              </p>
              <figure className="flex items-start mr-4">
                <ChatIcon />
                <figcaption className="text-xs text-gray-600">
                  {story.comment_count}
                </figcaption>
              </figure>
  
              <div className="lg:hidden flex items-start">
                <ThumbsUp />
                <p className="text-xs text-gray-600">{story.score}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
    
}


export default Feed;