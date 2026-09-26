function ProductCard(props){
    return(
        <div className="card">
            <img src={props.image} alt={props.name}/>
            <h2>{props.name}</h2>
            <p>Category: {props.category}</p>
            <p>{props.price >50 ? 'Expensive' : 'Affordable'}</p>
            <button>Buy Now</button>
        </div>
    )  
}
export default ProductCard