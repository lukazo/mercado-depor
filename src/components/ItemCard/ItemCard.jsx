import {Link} from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemCard.css';

const ItemCard = ({itemDetail}) => {
    return (
        <article className="itemCard">
            <img src="https://placehold.it/250X200" alt="Producto de prueba"/>
            <div className="container-producto">
                <h3>{itemDetail.nombre}</h3>
                <p>{itemDetail.description}</p>
                <ItemCount itemDetail={itemDetail} />
                <p>${itemDetail.precio}</p>
            </div> 
            <button><Link to={`/detail/${itemDetail.id}`} >Ver Detalle</Link></button>
        </article>
    );
}
export default ItemCard;
