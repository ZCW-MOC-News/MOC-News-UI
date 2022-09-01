import React, { useState } from 'react';
import axios from 'axios';

import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Feed () {

    const [articles, setArticles] = useState(0);


    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a5471905bdc34ec896ea6da26b298091')
    .then(response => { 
        setArticles(response.data.articles
        ); 

    });

    return (

        <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
            <div className='mx-auto max-wd-md md:max-w-1g'>
            {articles
                &&
                articles.map((item, i) => (
                    <div key={i}>
                        <TableContainer component={Paper}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Title: {item.title}</TableCell>

                                </TableRow>
                                <TableRow>

                                    <TableCell>Author: {item.author}</TableCell>
                                </TableRow>
                                <TableRow>

                                    <TableCell>Description: {item.description}</TableCell>
                                </TableRow>
                            </TableHead>
                        </TableContainer>

                    </div>
                    
                ))
            }
        </div>
        </div>
    );
}


export default Feed;

// export const Feed = ({ article }) => {
//     return (
//         <div>
//             {articles
//                  &&
//                 articles.map((item, i) => (
//                     <div key={i}>
//                         <h3>Title: {item.title}</h3>
//                         <h3>Author: {item.author}</h3>
//                     </div>
//                 ))
//             }
//         </div>
//     )
// }


// export const getServerSideProps = async () => {
//     const apiResponse = await fetch(
//         'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a5471905bdc34ec896ea6da26b298091',
//     );
//     const articles = await apiResponse.json();
//     console.log(articles)

//     return {
        
//         props: {
//             article,
//         },
//     };
// };

// export default Feed