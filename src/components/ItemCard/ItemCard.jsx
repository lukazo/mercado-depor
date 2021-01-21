import {Link} from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemCard.css';

const ItemCard = ({nombre, description, precio, item, id}) => {
    return (
        <article className="itemCard">
            <img src="https://placehold.it/250X200" alt="Producto de prueba"/>
            <div className="container-producto">
                <h3>{nombre}</h3>
                <p>{description}</p>
                <ItemCount itemDetail={item} />
                <p>${precio}</p>
            </div> 
            <button><Link to={`/detail/${id}`} >Ver Detalle</Link></button>
        </article>
    );
}
export default ItemCard;
