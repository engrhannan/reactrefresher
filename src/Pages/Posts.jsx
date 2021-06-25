import React, { useEffect, useState} from 'react';
import Grid from '../Components/Grid';

export default function Posts() {

     const [jsonResponse, setJsonResponse] = useState([]);

    const headers = ['userId', 'id', 'title', 'body']


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setJsonResponse(json))

    })


    return (
        <div>
            <Grid headers={headers} data={jsonResponse}></Grid>       </div>
    )
}





