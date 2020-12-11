const ItemCard = ({titulo, precio}) => {
    return (
        <article className="itemCard">
            <img src="https://placehold.it/250X200" alt="Producto de prueba"/>
            <div>
                <h3>{titulo}</h3>
                <p>${precio}</p>
            </div>
        </article>
    );
}
export default ItemCard;