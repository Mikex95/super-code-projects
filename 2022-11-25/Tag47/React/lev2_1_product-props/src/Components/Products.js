import ProductsEach from "./ProductsEach"
import "./Products.css"
let database = [{
    title: "cocooil",
    price: "30$",
    img: "https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg"
},
{
    title: "Polaroid",
    price: "60$",
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
},
{
    title: "Maui Moisture",
    price: "20$",
    img: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
}
]

const Products = () => {
    return (
    <section>
        {database.map((item) => (
            <div>
                <ProductsEach 
                img={item.img}
                title={item.title}
                price={item.price}/>
            </div>
        ))}
    </section>
    );
}
 
export default Products;