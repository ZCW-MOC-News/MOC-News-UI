import React, { useState } from 'react';
import axios from 'axios';

import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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


        <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
            <div className='mx-auto max-wd-md md:max-w-1g'>
                <div><Stories />
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
        </div>
    );
}


export default Feed;