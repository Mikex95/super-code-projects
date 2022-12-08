import { Link } from 'react-router-dom'

const DataItems = (props) => {
    return ( <div className="grid1">
        <div className='img-container'>
            <img src={props.urlToImage} alt="" />
        </div>
        <h4>{props.title}</h4>
        <p>{props.author}</p>
        <p>{props.content}</p>
        <p>{props.publishedAt}</p>
        <Link to={`/products/${props.source}}`}>Read More</Link>
    </div> );
}

 
export default DataItems;