const ProductsEach = (props) => {
    console.log(props);
    return ( 
        <article>
            <img src={props.img} alt="" />
            <p>{props.title}</p>
            <p>{props.price}</p>
            <a href="#">Button</a>
        </article>
     );
}
 
export default ProductsEach;