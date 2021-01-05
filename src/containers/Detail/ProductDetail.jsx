import ItemCount from '../../components/ItemCard/ItemCard';
import {useState} from 'react';
import {Redirect} from 'react-router-dom';

const ProductDetail = ({itemDetail}) => {

    const [evtToCart, setEvtToCart] = useState(false);

    const handleClickGoToCart = () => {
        setEvtToCart(true)
        if(evtToCart) {
            return <Redirect to='/cart'/>
        }
    }
    
    return (
        <article>
            <p>{itemDetail.nombre}</p>
            <p>{itemDetail.description}</p>
            <p>{itemDetail.precio}</p>
            <ItemCount />
            <button onClick={handleClickGoToCart}>Ir a comprar</button>
        </article>
    )
}

export default ProductDetail;