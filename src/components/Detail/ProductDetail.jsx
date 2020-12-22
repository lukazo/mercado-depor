const ProductDetail = ({item}) => {
    return (
        <article>
            <p>{item.nombre}</p>
            <p>{item.description}</p>
            <p>{item.precio}</p>
        </article>
    )
}

export default ProductDetail;