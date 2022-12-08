import React, { useState, useEffect } from 'react';
import DataItems from './DataItems';
import "./Data.css"
import { nanoid } from "nanoid";


const Data = () => {

    let [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2022-11-01&sortBy=publishedAt&apiKey=d3eea46996a742e2925383bdbc9575ec')
            .then((response) => response.json())
            .then((data) => setItems(data.articles))
    }, []);

    console.log(items);

  
    return ( <div className='grid'>
        {items.map((elt, index) => 
        <DataItems
        key={index}
        author={elt.author}
        content={elt.content}
        description={elt.description}
        publishedAt={elt.publishedAt}   
        title={elt.title}
        url={elt.url}
        urlToImage={elt.urlToImage} 
        source={elt.source}
        />
        )}
    </div> );
}
 
export default Data;