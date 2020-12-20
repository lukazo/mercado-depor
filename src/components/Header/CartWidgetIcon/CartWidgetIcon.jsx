import {AiOutlineShoppingCart} from 'react-icons/ai'
import './CartWidgetIcon.css'

const CartWidgetIcon = () => {
    return (
        <div className="cartWidgetIcon">
            <AiOutlineShoppingCart />
            <span>0</span>
        </div> 
    );
}
export default CartWidgetIcon;