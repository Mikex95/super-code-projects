const DataItem = (props) => {
    return ( 
        <article>
            <p>{props.title}</p>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            <p>{props.genre + " "}</p>
            <p>{props.rate}</p> 
        </article>
     );
}
 
export default DataItem;