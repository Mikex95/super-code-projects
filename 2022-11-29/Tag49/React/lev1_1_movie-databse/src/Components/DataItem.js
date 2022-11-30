const DataItem = (props) => {
    return ( 
        <article>
            <p>{props.title}</p>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            <p>{props.rate}</p> 
            <div>
                {props.genre.map(elt =>
                    <p>{elt}</p>)}
                    </div>
        </article>
     );
}
 
export default DataItem;