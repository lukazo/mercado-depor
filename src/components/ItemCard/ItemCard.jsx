import ItemCount from '../ItemCount/ItemCount';
import './ItemCard.css';

const ItemCard = ({nombre, precio, description}) => {
    return (
        <article className="itemCard">
            <img src="https://placehold.it/250X200" alt="Producto de prueba"/>
            <div className="container-producto">
                <h3>{nombre}</h3>
                <p>{description}</p>
                <ItemCount />
                <p>${precio}</p>
            </div> 
        </article>
    );
}
export default ItemCard;