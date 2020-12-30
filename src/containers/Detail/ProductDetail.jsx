const ProductDetail = ({itemDetail}) => {

    // const handleClickAddToCart = (e) => {

    // }
    
    return (
        <article>
            <p>{itemDetail.nombre}</p>
            <p>{itemDetail.description}</p>
            <p>{itemDetail.precio}</p>
            {/* <button onClick={handleClickAddToCart}>Agregar al carrito</button> */}
        </article>
    )
}

export default ProductDetail;