import {useContext} from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import './CartWidgetIcon.css';
import {Store} from '../../../store/';

const CartWidgetIcon = ({action}) => {

    const [data, setData] = useContext(Store);
    
    return (
        <div className="cartWidgetIcon" onClick={action}>
            <AiOutlineShoppingCart />
            <span>{data.cantidad}</span>
        </div> 
    );
}
export default CartWidgetIcon;