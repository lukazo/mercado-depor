import {useState} from 'react';
import {Redirect} from 'react-router-dom';
import ItemCount from '../../components/ItemCard/ItemCard';

const ProductDetail = ({itemDetail}) => {

    const [evtToCart, setEvtToCart] = useState(false);

    const handleClickGoToCart = () => {
        setEvtToCart(true)
    }

    return (
        <article>
            <p>{itemDetail.nombre}</p>
            <p>{itemDetail.description}</p>
            <p>{itemDetail.precio}</p>
            <ItemCount itemDetail={itemDetail} />
            <button onClick={handleClickGoToCart}>Ir a comprar</button>
            {
                evtToCart && <Redirect to='/cart'/>
            }
        </article>
    )
}

export default ProductDetail;